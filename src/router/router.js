// import path from "path";
import Vue from "vue";
import Router from "vue-router";

// const LoginView = () => import("@/components/login/login-view.vue");
// const EntidadesView = () => import("@/components/entidades/entidadesMain.vue");
// const UsuariosView = () => import("@/components/usuarios/Usuarios.vue");
// const OficiosView = () => import("@/components/oficios/OficiosView.vue");
const MainTemplate = () => import("@/components/globales/mainTemplate.vue");
const Dos = () => import("@/components/dos/Dos.vue");
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
          path: '/dos',
          name: 'Dos',
          component: Dos
        }
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