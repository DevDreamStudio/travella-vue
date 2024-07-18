import { createApp } from 'vue';
import App from './App.vue';
import Loader from "./components/Loader/Loader.vue";
import Footer from "./components/Footer/Footer.vue";
import './assets/style/main.scss';
import router from "./router/router.ts";
import { createPinia, Pinia } from "pinia";

const pinia: Pinia = createPinia();

createApp(App).component('Loader', Loader).component('Footer', Footer).use(router).use(pinia).mount('#app');
