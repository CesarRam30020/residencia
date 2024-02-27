<template>
  <v-container>
    <v-card class="pa-5">
      <v-row no-gutters align="center" justify="center">
        <v-col> <h1 class="text-center"> PERMISOS Y LICENCIAS </h1> </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mb-5">
        <v-col>
          <p class="text-justify">
            Para poder iniciar un negocio de alimentos y bebidas se requiere de ciertos tramites y permisos que dependiendo de lo que será el tipo de negocio, de no tenerlos se pondrá el riesgo el proyecto.
          </p>
        </v-col>
      </v-row>
      <v-divider class="mb-5" />

      <v-row no-gutters align="center" justify="center">
        <v-col> <h2 class="text-center">Carta de colonos</h2> </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mb-5">
        <v-col>
          <p class="text-justify">
            También conocida como carta de anuencia vecinal es el tramite y/o permiso para corroborar que los vecinos cercanos no tengan algún inconveniente o molestia con el establecimiento. El tiempo del tramite depende de la zona en que se quiera llevar a cabo el negocio. 
            <br><br>
            Si el lugar deseado para el establecimiento se encuentra dentro de un edificio que ya este asignado para el tipo de establecimiento que se quiere realizar, no es necesario hacer este tramite.
          </p>
        </v-col>
      </v-row>
      <v-divider class="mb-5" />

      <v-row no-gutters align="center" justify="center">
        <v-col> <h2 class="text-center">Licencia de uso de suelo </h2> </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mb-5">
        <v-col>
          <p class="text-justify">
            En el caso de requerir el permiso de uso de suelo para utilizar un espacio para servicios industriales o en este caso comercial. 
            <br><br>
            La duración de la licencia tiene una vigencia de dos años con la opción a prorrogarse por un periodo igual, previa solicitud del interesado deberá presentarse cuando menos cinco días hábiles anteriores a la fecha de vencimiento. El tiempo del trámite por lo general tarda alrededor de cinco días hábiles.
          </p>
        </v-col>
      </v-row>
      <v-divider class="mb-5"/>

      <v-row no-gutters align="center" justify="center">
        <v-col> <h2 class="text-center">Documentos</h2> </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mb-5">
        <v-col>
          <table>
            <thead>
              <tr>
                <td>Documento Requerido</td>
                <td>Presentación</td>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Acta constitutiva de la empresa</td>
                  <td>Copia y original para cotejo</td>
                </tr>

                <tr>
                  <td>Identificación oficial vigente con fotografía</td>
                  <td>Original y Copia</td>
                </tr>
                
                <tr>
                  <td>Titulo profesional (opcional)</td>
                  <td>Original y copia</td>
                </tr>
                
                <tr>
                  <td>Comprobante de domicilio</td>
                  <td>Original y copia</td>
                </tr>

                <tr>
                  <td>Croquis de ubicación</td>
                  <td>Original y copia</td>
                </tr>

                <tr>
                  <td>Escrituras del predio</td>
                  <td>Original y copia</td>
                </tr>

                <tr>
                  <td>Plano topográfico</td>
                  <td>Original y copia</td>
                </tr>

                <tr>
                  <td>Boleta predial vigente</td>
                  <td>Original y copia</td>
                </tr>

                <tr>
                  <td>Escrito libre de solicitud</td>
                  <td>Original y copia</td>
                </tr>

                <tr>
                  <td>Oficio de solicitud</td>
                  <td>Original y copia</td>
                </tr>

                <tr>
                  <td>Plano georeferenciado con coordenadas  geograficas</td>
                  <td>Original y copia</td>
                </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
      <v-divider class="mb-5"/>

    </v-card>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: 'mainAdministrativo',
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
  }
}
</script>

<style>

</style>