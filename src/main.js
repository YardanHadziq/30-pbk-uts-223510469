// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import { Quasar } from 'quasar'

// import '@quasar/extras/material-icons/material-icons.css'
// import 'quasar/src/css/index.sass'
// import './index.css';
// import App from './App.vue'


// const pinia = createPinia()
// const myApp = createApp(App)

// myApp.use(Quasar, {
//   plugins: {}, 
// })

// myApp.mount('#app')
// app.use(createPinia());
// app.use(router);
// app.use(Quasar);
// app.mount('#app')

// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue';
import router from './router/index.js';
import './index.css';
import 'quasar/dist/quasar.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar);

app.mount('#app');
