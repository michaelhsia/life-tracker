import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';

import './assets/main.scss'
import App from './App.vue'
import { router } from './router';

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.component('Menubar', Menubar)
app.mount('#app')


