
import { createRouter, createWebHistory } from "vue-router";
import FirstApp from "./../views/FirstApp.vue";
import SecondApp from "./../views/SecondApp.vue";
// import ThirdApp from "./../views/ThirdApp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FirstApp",
      component: FirstApp,
    },
    {
      path: "/SecondApp",
      name: "SecondApp",
      component: SecondApp,
    },
    // {
    //   path: "/ThirdApp",
    //   name: "ThirdApp",
    //   component: ThirdApp,
    // },
  ],
});

export default router;
