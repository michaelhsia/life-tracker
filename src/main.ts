import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';

import './assets/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue)
app.component('Menubar', Menubar)
app.mount('#app')


