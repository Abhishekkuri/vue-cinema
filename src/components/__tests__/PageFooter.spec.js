import { shallowMount } from "@vue/test-utils";
import PageFooter from "@/components/PageFooter";

describe("PageFooter.vue", () => {
  test("Footer renders correctly", () => {
    expect(shallowMount(PageFooter).element).toMatchSnapshot();
  });
});
