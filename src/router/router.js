import Vue from "vue";
import Router from "vue-router";

const MainTemplate = () => import("@/components/globales/mainTemplate.vue");
const Administrativo = () => import("@/components/administrativo/main.vue");
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: '/main'},
    { 
      path: '/main',
      name: 'MainTemplate', 
      component: MainTemplate,
      children: [
        {
          path: '/administrativo',
          name: 'Administrativo',
          component: Administrativo,
        },
        // {
        //   path: '/financiero',
        //   name: 'Financiero',
        //   component: Dos,
        // }
      ]
    },
    {
      path: '*',
      redirect: '/',
  }
  ],
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (
      err.name === "NavigationDuplicated" &&
      err.message.includes("Avoided redundant navigation")
    ) {
      console.log("Navegación duplicada evitada:", err.message);
    } else {
      throw err;
    }
  });
};

export default router;