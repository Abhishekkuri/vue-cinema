import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import cloneDeep from "lodash.clonedeep";
import flushPromises from "flush-promises";
import Router from "vue-router";
import { sync } from "vuex-router-sync";
import storeConfig from "@/store/store-config";
import routerConfig from "@/router/router-config";
import {
  fetchFeaturedFilms,
  fetchFilmById,
  fetchFilmsByTitle,
} from "@/api/api";

jest.mock("@/api/api");

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Router);
const store = new Vuex.Store(storeConfig);
const router = new Router(routerConfig);
sync(store, router);

function createFeaturedFilms() {
  const arr = new Array(22);
  return arr.fill().map((film, i) => ({
    Title: `a${i}`,
    Year: "2022",
    Genre: "Series",
    imdbID: `a${i}`,
  }));
}

function createSearchedFilms() {
  return { Response: "True", Search: createFeaturedFilms() };
}

describe("store-config", () => {
  test("calling fetchFeaturedFilms action returns top 2 films from getFeaturedFilms getter", async () => {
    const featuredFilms = createFeaturedFilms();
    const clonedStoreConfig = cloneDeep(storeConfig);
    const store = new Vuex.Store(clonedStoreConfig);
    fetchFeaturedFilms.mockImplementation(() => Promise.resolve(featuredFilms));
    store.dispatch("fetchFeaturedFilms");

    await flushPromises();

    expect(store.getters.getFeaturedFilms).toEqual(featuredFilms);
  });

  test("calling fetchSearchedFilms returns top 5 films from getSearchedFilms getter on a search parameter basis", async () => {
    const searchedFilms = createSearchedFilms();
    const clonedStoreConfig = cloneDeep(storeConfig);
    const store = new Vuex.Store(clonedStoreConfig);
    const title = "someTitle";
    fetchFilmsByTitle.mockImplementation((calledWith) =>
      calledWith === title ? Promise.resolve(searchedFilms) : Promise.resolve()
    );
    fetchFilmById.mockImplementation(() =>
      Promise.resolve(searchedFilms.Search[1])
    );

    store.dispatch("fetchSearchedFilms", { title });

    await flushPromises();

    expect(store.getters.getSearchedFilms.length).toEqual(1);
  });
});
