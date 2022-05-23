import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import FeaturePage from "@/views/FeaturePage";
import FilmCard from "@/components/FilmCard";
import merge from "lodash.merge";
const localVue = createLocalVue();

localVue.use(Vuex);

function createFeaturedFilms() {
  const arr = new Array(2);
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
      getFeaturedFilms: jest.fn(() => createFeaturedFilms()),
    },
    actions: {
      fetchFeaturedFilms: jest.fn(() => Promise.resolve()),
    },
  };
  return new Vuex.Store(merge(defaultStoreConfig, overrides));
}

function createWrapper(overrides) {
  const defaultMountingOptions = {
    localVue,
    store: createStore(),
  };
  return shallowMount(FeaturePage, merge(defaultMountingOptions, overrides));
}

describe("FeaturePage.vue", () => {
  test("Featured Page renders correctly", () => {
    expect(createWrapper().element).toMatchSnapshot();
  });
  test("Featured Page show 2 films", () => {
    const wrapper = createWrapper();
    expect(wrapper.findComponent(FilmCard).exists()).toBe(true);
    expect(wrapper.findAllComponents(FilmCard).length).toBe(2);
  });
});
