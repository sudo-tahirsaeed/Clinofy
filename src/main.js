import { createApp } from "vue";
import App from "./DoctorDashboard.vue";
import DashboardDoctor from "./views/Doctor/DashboardPage";
import DetailsModal from "../src/components/Doctor/DetailsModal";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
// app.component("homePage", HomePage);
// app.component("aboutPage", AboutPage);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: DetailsModal },
    { path: "/about", component: DashboardDoctor },
  ],
});
app.use(router);

app.mount("#app");
