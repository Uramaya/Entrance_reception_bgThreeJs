import HomeComponent from './components/home_component.js';
import CheckInComponent from './components/checkIn_component.js';
import CheckOutComponent from './components/checkOut_component.js';
import FinishComponent from './components/finish_component.js';


const router = new VueRouter({
    mode: "history",
    routes:[
        { name: 'home', path: '/', component: HomeComponent },
        { name: 'checkIn', path: '/checkIn', component: CheckInComponent },
        { name: 'checkOut', path: '/checkOut', component: CheckOutComponent },
        { name: 'finish', path: '/finish', component: FinishComponent },
    ]
});

const app = new Vue({
    router
}).$mount('#reception_app');