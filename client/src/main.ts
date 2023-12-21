import App from "./App.vue"
import { createApp } from 'vue'
import router from "./router";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import library from '@/plugins/fontAwesomeIcons'

// Taiwind Css
import "@/assets/css/index.css"

// Global CSS
import "@/assets/scss/global.scss";

// Icons
library
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')