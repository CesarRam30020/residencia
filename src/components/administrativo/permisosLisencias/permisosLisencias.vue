<template>
  <div>
    <v-carousel hide-delimiter-background show-arrows ref="carousel" @change="handleCarouselChange">
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-row no-gutters align="center" justify="center" class="p-3">
          <v-col>
            <component :is="item.component" />
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-progress-linear :value="progressValue" :buffer-value="progressBuffer"></v-progress-linear>
  </div>
</template>

<script>
import cartaColonosVue from './cartaColonos.vue';
import pnlResumenVue from './pnlResumen.vue';
import usoSueloVue from './usoSuelo.vue';

export default {
  name: 'permisosLisencias',
  components: {
    pnlResumenVue,
    cartaColonosVue,
    usoSueloVue,
  },
  data() {
    return {
      items: [
        { component: pnlResumenVue },
        { component: cartaColonosVue },
        { component: usoSueloVue },
        // { component:  },
      ],
      page: 0,
    };
  },
  mounted() {},
  computed: {
    progressValue() {
      return (this.page / this.items.length) * 100;
    },
    progressBuffer() {
      return 100;
    },
  },
  methods: {
    handleCarouselChange(newPage) {
      this.page = newPage + 1;
    }
  }
};
</script>

<style>
/* Agrega estilos personalizados para la barra de progreso si es necesario */
</style>
