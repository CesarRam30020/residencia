import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import { store } from './store/store'
import Notificaciones from './plugins/notificaciones'
import ValidateResponse from './plugins/validateResponse'


Vue.config.productionTip = false

Vue.use(Notificaciones,ValidateResponse, store)

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')