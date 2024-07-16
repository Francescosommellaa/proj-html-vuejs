import { createRouter, createMemoryHistory } from "vue-router";

import NotFound from "./Pages/NotFound.vue";
import Home from "./Pages/Home.vue";
import Pages from "./Pages/Pages.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/Pages", name: "Pages", component: Pages },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export { router };
