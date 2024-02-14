import { createApp } from "vue";
import App from "./PharmacyDash.vue";
import Pharmacy from "./views/pharmacy";
import LabPage from "./views/Lab.vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
// app.component("Pharmacy", Pharmacy);
// app.component("LabPage", LabPage);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Pharmacy },
    { path: "/pharmacy", component: Pharmacy },
    { path: "/lab", component: LabPage },
  ],
});
app.use(router);

app.mount("#app");
