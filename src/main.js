import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
<<<<<<< HEAD
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
Vue.config.productionTip = false

// const routes = [
//     { }
// ]
// const router = new VueRouter({
//     routes
// })

new Vue({
    vuetify,
    // router: router,
=======

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    vuetify,
>>>>>>> 89f2afed779681a38bb51ac9f64b73588480f260
    render: h => h(App)
}).$mount('#app')