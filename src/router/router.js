// import path from "path";
import Vue from "vue";
import Router from "vue-router";

// const LoginView = () => import("@/components/login/login-view.vue");
// const EntidadesView = () => import("@/components/entidades/entidadesMain.vue");
// const UsuariosView = () => import("@/components/usuarios/Usuarios.vue");
// const OficiosView = () => import("@/components/oficios/OficiosView.vue");
const MainTemplate = () => import("@/components/globales/mainTemplate.vue");
const AdministrativoMain = () => import("@/components/administrativo/administrativoMain.vue");
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
          component: AdministrativoMain
        },
        {
          path: '/financiero',
          name: 'Financiero',
          redirect: '/'
        },
        {
          path: '/operativo',
          name: 'Operativo',
          redirect: '/'
        },
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