import { createApp } from "vue";
import App from "./DoctorDashboard.vue";
import DashboardDoctor from "./views/Doctor/DashboardPage";
import { createRouter, createWebHistory } from "vue-router";
import MedsAndTests from "./components/Doctor/MedsAndTests";
import PrimeVue from "primevue/config";

const app = createApp(App);
// app.component("homePage", HomePage);
// app.component("aboutPage", AboutPage);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MedsAndTests },
    { path: "/about", component: DashboardDoctor },
  ],
});
app.use(PrimeVue, {
  /* options */
});

app.use(router);

app.mount("#app");
