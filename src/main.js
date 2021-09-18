import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dayjs from "dayjs";
import GlobalComponents from "./includes/_globals";

// Create Vue instance
const app = createApp(App);

app.use(store);
app.use(router);
app.use(GlobalComponents);

app.config.globalProperties.$dayjs = dayjs;

// Mount Vue instance
app.mount("#app");
