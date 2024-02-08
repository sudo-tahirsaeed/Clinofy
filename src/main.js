import { createApp } from "vue";
import App from "./ReceptionDashboard.vue";
import RegisterPatient from "./views/RegisterPatient";
// import AboutPage from "./views/About";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
// app.component("homePage", HomePage);
// app.component("aboutPage", AboutPage);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: RegisterPatient },
    // { path: "/about", component: AboutPage },
  ],
});
app.use(router);

app.mount("#app");
