import Vue from 'vue'
import App from './App.vue'
import VueSocketio from 'vue-socket.io';
import VueResource from 'vue-resource';

Vue.use(VueSocketio, '10.129.41.45:8889');
Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
