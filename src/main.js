import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';


// Vue.component('LandingPage', resolve => require(['./views/LandingPage'], resolve));
createApp(App).use(store).use(router).use(VueCarousel).mount('#app')