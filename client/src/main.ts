import App from "./App.vue"
import { createApp } from 'vue'
import router from "./router";
// Taiwind Css
import "@/assets/css/index.css"

// Global CSS
import "@/assets/scss/global.scss";

const app = createApp(App)

app.use(router)

app.mount('#app')