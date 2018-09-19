import Vue from 'vue';
import Router from 'vue-router';

import Example from '../components/example/Example.vue';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        name: 'index',
        redirect: 'example',
    }, {
        path: '/example',
        component: Example,
        name: 'example',
    }]
});


export default router;