<template>
  <v-main>
    <v-container>
      <v-card v-if="$route.path == '/main'" class="pa-5">
        <!-- <div class="triangulo-equilatero-bottom-left"></div> -->
        <v-row no-gutters style="max-height: 400px; " :class="[height>0? 'ma-10':'ma-5']">
          <v-col cols="12" md="6" lg="6" xl="6" class="d-flex justify-center flex-column">
            <h1 :class="[height>1? 'display-2':'overline']">Bienvenido</h1><br v-if="height>1">
            <!-- <p :class="[height<3? 'caption':'headline','grey--text text--darken-1']">Para poder registar estaciones, ingresa al menu que se encuentra
              a tu izquierda. O bien haz click en el siguiente botón. </p>
            <br v-if="height>1">
            <div>
              <v-btn dark color="primary" rounded to="/convocatorias" small>Registrar Estacion</v-btn>
            </div> -->
          </v-col>
          <!-- <v-btn @click="navegar();">HOLA</v-btn> -->
          <!-- <v-col cols="6" v-if="height>1">
            <div class="py-5  d-flex justify-center child-flex " style="max-height: 400px;">
              <v-img src="logo.png" contain aspect-ratio="1" class="mb-5" />
            </div>
          </v-col> -->
        </v-row>
      </v-card>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 0
        case 'sm': return 1
        case 'md': return 2
        case 'lg': return 3
        case 'xl': return 4
        default: return null
      }
    },
  },
  data: () => ({
    loading: false,
  }),
  methods: {}
};
</script>

<style>
.triangulo-equilatero-bottom-left {
  width: 0;
  height: 0;
  border-right: 3.5vw solid transparent;
  border-top: 3.5vw solid #5b5b5b;
  border-left: 3.5vw solid #5b5b5b;
  border-bottom: 3.5vw solid transparent;
  position: absolute;
}
</style>