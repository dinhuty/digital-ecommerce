import App from "./App.vue"
import { createApp } from 'vue'

// Taiwind Css
import "@/assets/css/index.css"

// Global CSS
import "@/assets/scss/global.scss";

const app = createApp(App)

app.mount('#app')