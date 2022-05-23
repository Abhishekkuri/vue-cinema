import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import SearchPage from "@/views/SearchPage";
import FilmCard from "@/components/FilmCard";
import merge from "lodash.merge";
const localVue = createLocalVue();

localVue.use(Vuex);

function createSearchedFilms() {
  const arr = new Array(5);
  return arr.fill().map((film, i) => ({
    Title: `a${i}`,
    Year: "2022",
    Genre: "Series",
    imdbID: `a${i}`,
  }));
}

function createStore(overrides) {
  const defaultStoreConfig = {
    getters: {
      getSearchedFilms: jest.fn(() => createSearchedFilms()),
    },
  };
  return new Vuex.Store(merge(defaultStoreConfig, overrides));
}

function createWrapper(overrides) {
  const defaultMountingOptions = {
    localVue,
    store: createStore(),
  };
  return shallowMount(SearchPage, merge(defaultMountingOptions, overrides));
}

describe("SearchPage.vue", () => {
  test("Search Page renders correctly", () => {
    expect(createWrapper().element).toMatchSnapshot();
  });
  test("Search Page show 2 films", () => {
    const wrapper = createWrapper();
    expect(wrapper.findComponent(FilmCard).exists()).toBe(true);
    expect(wrapper.findAllComponents(FilmCard).length).toBe(5);
  });
});
