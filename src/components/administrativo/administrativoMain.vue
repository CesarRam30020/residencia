<template>
  <v-container>
    
		<v-card class="pa-5">
        <v-row no-gutters style="max-height: 400px; " :class="[height>0? 'ma-10':'ma-5']">
          <v-col cols="12" md="6" lg="6" xl="6" class="d-flex justify-center flex-column">
            <h1 :class="[height>1? 'display-2':'overline']">
							Administrativo
						</h1>
						<br v-if="height>1">
          </v-col>
        </v-row>

				<v-row no-gutters>
					<v-col cols="12" md="6">
						<p>Resumen</p>
					</v-col>
				</v-row>

				<!-- <v-tabs background-color="primary">
          <v-col v-for="(tab, index) in tabs" :key="index" md="2">
            <div class="v-tab-wrapper">
              <v-tab>{{ tab.title }}</v-tab>
            </div>
          </v-col>
        </v-tabs> -->

        <div>
          <v-card>
            <v-tabs v-model="tab" centered background-color="primary" dark slider-color="yellow">
              <!-- <v-tab to="#tab-1">Entrantes</v-tab>
              <v-tab to="#tab-2">Generados</v-tab> -->
              <v-tab
                v-for="(tab, index) in tabs"
                :key="index"
                :to="tab.route"
              >
                {{ tab.title }}
              </v-tab>
              
              <v-tabs-items v-model="tab">
                <v-tab-item value="tab-1">
                  <v-card flat>
                    <h1>tab</h1>
                    <permisos-lisencias />
                  </v-card>
                </v-tab-item>
                <v-tab-item value="tab-2">
                  <v-card flat>
                    <h1>TAB2</h1>
                  </v-card>
                </v-tab-item>
                <v-tab-item value="tab-3">
                  <v-card flat>
                    <h1>TAB3</h1>
                  </v-card>
                </v-tab-item>
                <v-tab-item value="tab-4">
                  <v-card flat>
                    <h1>TAB4</h1>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-card>
        </div>

      </v-card>

  </v-container>
</template>

<script>
import permisosLisenciasVue from './permisosLisencias.vue'

export default {
	name: 'administrativoMain',
  components: [ permisosLisenciasVue ],
	data: () => ({
		tabs: [
			{ title: 'PERMISOS Y LICENCIAS', route: '#tab-1' },
			{ title: 'TRASPASO', route: '#tab-2' },
			{ title: 'PROTECCIÓN CIVIL', route: '#tab-3' },
			{ title: 'NORMAS LEYES E ISO', route: '#tab-4' },
		],
    tab: null
	}),
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
}
</script>

<style>
.v-application--wrap {
  width: 100%;
}

/* Estilo de las tabs */
.v-tab {
  min-width: auto;
  text-align: center;
}
</style>