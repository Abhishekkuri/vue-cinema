import FeaturedPage from "@/views/FeaturedPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: FeaturedPage,
  },
  {
    path: "/search/:title",
    name: "SearchPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchPage.vue"),
  },
];

const router = {
  mode: "history",
  base: process.env.BASE_URL,
  routes,
};

export default router;
