import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version

import App from './App.vue'
import router from'./routers/index'
import store  from "./store";
import './index.css'


createApp(App).use(router).use(store).mount('#app');
