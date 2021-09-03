import App from './App.js'
import Input from './Views/Input.js';
import Zones from './Views/Zones.js'
import Routes from './routes.js';


const routes = [
    { path: '*', component: Input},
    { path: '/home', component: Input},
    Routes.account,
    Routes.zones
  ]

const router = new VueRouter({
  routes // short for `routes: routes`
})

var app = new Vue({
    router,
    el: '#app',
    components: {
        App
    },
    data: {
    }
  })

