import { createApp } from "vue";
import App from "./DoctorDashboard.vue";
import LabDash from "./views/labDashboard.vue";
import AboutPage from "./views/About";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
// app.component("LabDash", LabDash);
// app.component("aboutPage", AboutPage);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LabDash },
    { path: "/about", component: AboutPage },
  ],
});
app.use(router);

app.mount("#app");
