import { shallowMount } from "@vue/test-utils";
import FilmCard from "@/components/FilmCard";
import merge from "lodash.merge";

const defaultMountingOptions = {
  propsData: {
    film: {
      Title: "Some Title",
      Type: "Series",
      Rated: "8",
      Actors: "Ben, John, Henk",
      Genre: "Mystry, Drama, Musical",
      Plot: "This is a movie plot with more than 200 words. This is a movie plot with more than 200 words. This is a movie plot with more than 200 words. This is a movie plot with more than 200 words. This is a movie plot with more than 200 words. This is a movie plot with more than 200 words.",
      Director: "Ben, John, Henk",
      Awards: "Oscar, BAFTA",
    },
  },
};

function createWrapper(overrides) {
  return shallowMount(FilmCard, merge(defaultMountingOptions, overrides));
}

describe("FilmCard.vue", () => {
  test("FilmCard renders correctly", () => {
    const wrapper = createWrapper();
    expect(wrapper.element).toMatchSnapshot();
  });
  test("renders the Poster", () => {
    const wrapper = createWrapper();
    expect(wrapper.find("img").exists()).toBe(true);
  });
  test("renders the Title", () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain(
      defaultMountingOptions.propsData.film.Title
    );
  });
  test("renders the Type", () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain(
      defaultMountingOptions.propsData.film.Type
    );
  });
  test("renders the Genre", () => {
    const wrapper = createWrapper();
    defaultMountingOptions.propsData.film.Genre.split(",").forEach((genre) => {
      expect(wrapper.text()).toContain(genre);
    });
  });
  test("renders the Actors", () => {
    const wrapper = createWrapper();
    defaultMountingOptions.propsData.film.Actors.split(",").forEach((actor) => {
      expect(wrapper.text()).toContain(actor);
    });
  });
  test("renders the Directors", () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain(
      defaultMountingOptions.propsData.film.Director
    );
  });
  test("renders the Awards", () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain(
      defaultMountingOptions.propsData.film.Awards
    );
  });
  test("renders the Plot", () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain(
      defaultMountingOptions.propsData.film.Plot.slice(0, 200)
    );
  });
  test("renders the Read More", () => {
    const wrapper = createWrapper();
    expect(wrapper.contains(".read-more")).toBe(true);
  });
});
