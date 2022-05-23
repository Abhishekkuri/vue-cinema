import { shallowMount } from "@vue/test-utils";
import NavigationBar from "@/components/NavigationBar.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";
import App from "@/App";

describe("FeaturedPage.vue", () => {
  test("Featured Page renders correctly", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.element).toMatchSnapshot();
  });
  test("Featured Page renders page header", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(PageHeader).exists()).toBe(true);
  });
  test("Featured Page renders page footer", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(PageFooter).exists()).toBe(true);
  });
  test("Featured Page renders navigation bar", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(NavigationBar).exists()).toBe(true);
  });
});
