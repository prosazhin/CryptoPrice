import { createApp } from 'vue';
import { store } from './store.js';
import App from './App.vue';
import './styles/main.css';

const app = createApp(App);

app.use(store);
app.mount('#app');
