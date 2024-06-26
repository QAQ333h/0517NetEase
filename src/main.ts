import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { Icon } from '@iconify/vue';

const app = createApp(App);
app.component("Icon", Icon)
app.use(router);
app.use(store);
app.mount("#app");
