import { createLocalVue, RouterLinkStub, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import NavigationBar from "@/components/NavigationBar";
import merge from "lodash.merge";
import flushPromises from "flush-promises";
const localVue = createLocalVue();

localVue.use(Vuex);

function createStore(overrides) {
  const defaultStoreConfig = {
    state: {
      featuredFilms: [{ film: {} }],
      films: [{ film: {} }],
    },
    getters: {
      getSearchedFilms: jest.fn(() => []),
    },
    actions: {
      fetchSearchedFilms: jest.fn(() => Promise.resolve()),
    },
  };
  return new Vuex.Store(merge(defaultStoreConfig, overrides));
}

function createWrapper(overrides) {
  const defaultMountingOptions = {
    stubs: {
      RouterLink: RouterLinkStub,
    },
    localVue,
    store: createStore(),
  };
  return shallowMount(NavigationBar, merge(defaultMountingOptions, overrides));
}

describe("NavigationBar.vue", () => {
  test("Navigation Bar renders correctly", () => {
    const wrapper = createWrapper();
    expect(wrapper.element).toMatchSnapshot();
  });
  test("Search button link works correctly", async () => {
    const mocks = {
      $router: {
        replace: jest.fn(),
      },
    };
    const store = createStore();
    store.dispatch = jest.fn(() => Promise.resolve());
    const title = "someTitle";
    const wrapper = createWrapper({ store, mocks });
    wrapper.setData({ title });
    wrapper.find(".nav-button").trigger("click");
    await flushPromises();
    expect(store.dispatch).toHaveBeenCalledWith("fetchSearchedFilms", {
      title,
    });
    expect(mocks.$router.replace).toHaveBeenCalledWith(`/search/${title}`);
  });
});
