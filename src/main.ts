import { createApp } from 'vue'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import './assets/main.scss'
import 'primeflex/primeflex.scss'

import App from './App.vue'
import { router } from './router';

import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Button from 'primevue/button';
import MeterGroup from 'primevue/metergroup';

const app = createApp(App)
app.use(PrimeVue)
app.use(router)

// primevue components
app.component('Menubar', Menubar)
app.component('Card', Card)
app.component('Button', Button)
app.component('MeterGroup', MeterGroup)

app.mount('#app')


createApp(App).mount('#app')
