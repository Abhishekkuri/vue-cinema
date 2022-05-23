import FeaturePage from "@/views/FeaturePage";

const routes = [
  {
    path: "/",
    name: "home",
    component: FeaturePage,
  },
  {
    path: "/search/:title",
    name: "SearchPage",
    component: () => import("../views/SearchPage.vue"),
  },
];

const router = {
  mode: "history",
  base: process.env.BASE_URL,
  routes,
};

export default router;
