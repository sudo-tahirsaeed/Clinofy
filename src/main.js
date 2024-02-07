import { createApp } from "vue";
import App from "./DoctorDashboard.vue";
import HomePage from "./views/Homepage";
import AboutPage from "./views/About";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
// app.component("homePage", HomePage);
// app.component("aboutPage", AboutPage);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
  ],
});
app.use(router);

app.mount("#app");
