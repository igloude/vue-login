import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Success from '@/components/Success';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
});
