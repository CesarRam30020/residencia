<template>
  <div>
    <v-carousel hide-delimiter-background show-arrows-on-hover ref="carousel" @change="handleCarouselChange">
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
import lisenciaMusicaVue from './lisenciaMusica.vue';
import traspasosResumenVue from './traspasosResumen.vue';

export default {
  name: 'traspasosVue',
  data() {
    return {
      items: [
        { component: traspasosResumenVue },
        { component: lisenciaMusicaVue }
      ],
      page: 0,
    };
  },
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
}
</script>

<style>

</style>