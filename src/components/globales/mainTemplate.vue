<template>
  <v-app style="background-color: #eceff1">
    <v-app-bar color="primary" app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <h1>Residencia</h1>
      <!-- <v-toolbar-title class="headline text-uppercase">
          Sistema de registro de estaciones — {{userName}}
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click="cerrarSesion()"> <v-icon>mdi-power</v-icon></v-btn> -->
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small icon outlined v-bind="attrs" v-on="on">
            <v-icon small>mdi-cog</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="resetpass = true">
            <v-row>
              <v-col cols="2"><v-icon>mdi-lock-reset</v-icon></v-col>
              <v-col cols="10">Reset password</v-col>
            </v-row>
          </v-list-item>
          <v-list-item @click="cerrarSesion();">
            <v-row>
              <v-col cols="2"><v-icon>mdi-power</v-icon></v-col>
              <v-col cols="10">Cerrar Sesión</v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-menu> -->
     
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      :expand-on-hover="false"
      :mini-variant="false"
      :right="false"
      app
      dark
      temporary
    >
      <left-menu :menu="menu" @cerrarMenu="drawer = false" />
    </v-navigation-drawer>

    <main-content/>
    <main-footer />

  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
// import { getSession } from './main.service'
import LeftMenu from "./leftMenu";

import MainFooter from "./mainFooter";
import MainContent from './mainContent.vue';

export default {
  components: { LeftMenu, MainFooter, MainContent },
  computed: {
    ...mapGetters(["httpURL","sessionToken", "userName"]),
  },
  async created() {
  },
  data: () => ({
    drawer: false,
    loading: false,
    resetpass: false,
    userId: '',
    menu: [
      { title: 'Inicio', route: '/main' },
      { title: 'Administrativo', route: '/administrativo' },
      { title: 'Financiero', route: '/financiero' },
      { title: 'Operativo', route: '/operativo' },
    ],
  }),
  methods: {
    // cerrarSesion() {
    //   localStorage.removeItem("token");
    //   sessionStorage.removeItem("token");
    //   this.$store.dispatch("setSessionToken", null);
    //   this.$router.push("/login");
    // },
  },
};
</script>