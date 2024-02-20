import { createRouter, createWebHistory } from 'vue-router';

const Main = () => import('@/components/main/holaMundo.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      // redirect: '/main/ures/0',
      // children: [
      //   // {
      //   //   path: 'ures/:numero',
      //   //   name: 'URES',
      //   //   component: uresView
      //   // },
      // ]
    },
    // {
    //   path: '*',
    //   redirect: '/main',
    // }
  ]
});

export default router;