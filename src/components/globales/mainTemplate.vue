<template>
  <v-app style="background-color: #eceff1">
    <v-app-bar color="primary" app dark>
      <v-toolbar-title
        class="headline text-uppercase"
        @click="navegar('/main')"
      >
        Residencia
      </v-toolbar-title>

      <v-toolbar-actions>
        <v-tabs background-color="primary">
          <v-col v-for="(tab, index) in tabs" :key="index" md="4">
            <div class="v-tab-wrapper" @click="navegar(tab.route)">
              <v-tab>{{ tab.title }}</v-tab>
            </div>
          </v-col>
        </v-tabs>
      </v-toolbar-actions>
    </v-app-bar>
    
    <main-content />
    <main-footer />

  </v-app>
</template>

<script>
// import { mapGetters } from "vuex";
import MainFooter from "./mainFooter";
import MainContent from './mainContent.vue';

export default {
  components: { MainFooter, MainContent },
  // computed: {
  //   ...mapGetters(["httpURL","sessionToken", "userName"]),
  // },
  async created() {},
  data: () => ({
    drawer: false,
    loading: false,
    resetpass: false,
    userId: '',
    menu: [],
    tabs: [
      { title: 'Inicio', route: '/main' },
      { title: 'Administrativo', route: '/administrativo' },
      { title: 'Financiero', route: '/financiero' },
    ]
  }),
  methods: {
    navegar(ruta) {
      this.$router.push(ruta);
    }
  },
};
</script>