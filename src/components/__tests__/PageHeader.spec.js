import { shallowMount } from "@vue/test-utils";
import PageHeader from "@/components/PageHeader";

describe("PageHeader.vue", () => {
  test("Header renders correctly", () => {
    expect(shallowMount(PageHeader).element).toMatchSnapshot();
  });
  test("Header renders logo", () => {
    expect(shallowMount(PageHeader).contains("img")).toBe(true);
  });
});
