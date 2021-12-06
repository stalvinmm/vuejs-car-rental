import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Loginpage from './components/loginpage'
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/loginpage', component: Loginpage }
]
const router = new VueRouter({
    routes
})

new Vue({
    vuetify,
    router: router,
    render: h => h(App)
}).$mount('#app')