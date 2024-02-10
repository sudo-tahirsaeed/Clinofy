import { createApp } from "vue";
import PrimeVue from 'primevue/config';
import App from "./ReceptionDashboard.vue";
import RegisterPatient from "./views/RegisterPatient";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

app.component("RegisterPatient", RegisterPatient);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: RegisterPatient },
  ],
});
app.use(router);
app.use(PrimeVue);
app.mount("#app");
