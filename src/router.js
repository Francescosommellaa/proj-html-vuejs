import { createRouter, createMemoryHistory } from "vue-router";

import NotFound from "./Pages/NotFound.vue";
import Home from "./Pages/Home.vue";
import WhatWeOffer from "./Pages/WhatWeOffer.vue";
import OurTeam from "./Pages/OurTeam.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/WhatWeOffer", name: "WhatWeOffer", component: WhatWeOffer },
    { path: "/OurTeam", name: "OurTeam", component: OurTeam },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export { router };
