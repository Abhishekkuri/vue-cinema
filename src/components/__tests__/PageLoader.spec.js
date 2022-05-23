import { shallowMount } from "@vue/test-utils";
import PageLoader from "@/components/PageLoader";

describe("PageLoader.vue", () => {
  test("loader renders correctly", () => {
    expect(shallowMount(PageLoader).element).toMatchSnapshot();
  });
});
