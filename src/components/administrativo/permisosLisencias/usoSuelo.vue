<template>
  <div class="scrollable-content" style="padding: 10px;">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Licencia de uso de suelo </h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p>
          En el caso de requerir el permiso de uso de suelo para utilizar un espacio para servicios industriales o en este caso comercial.
          <br /><br />
          La duración de la licencia tiene una vigencia de dos años con la opción a prorrogarse por un periodo igual, previa solicitud del interesado deberá presentarse cuando menos cinco días hábiles anteriores a la fecha de vencimiento. El tiempo del trámite por lo general tarda alrededor de cinco días hábiles.
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Documentos</h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="documentos"
          :footer-props="{
              'items-per-page-options': [15, 20, 25]
            }"
        />
      </v-col>
    </v-row>
    <v-divider class="mb-5" />

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Costos</h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p>
          Dependiendo el tamaño, el lugar destinado puede o no ser ampliado y/o remodelado variaría el costo de la licencia.
          <br /><br />
          Para superficie destinada a uso comercial, oficina, servicios personales y profesionales:
          <ul>
            <li>De 1 hasta 50 m2 $1,458.94 mxn</li>
            <li>De 51 hasta 100 m2 $4,214.60 mxn</li>
            <li>De 101 hasta 500 m2 $7,348.79 mxn</li>
            <li>Para superficie que exceda de 500 m2 $9,552.89</li>
          </ul>
          <br />
          Para superficie destinada a establecimientos comerciales ya edificados, no válidos para construcción, ampliación o remodelación:
          <ul>
            <li>Hasta 100 m2 $864.12</li>
            <li>De 101 hasta 500 m2 $2,188.95 mxn</li>
            <li>Para superficie que exceda de 500 m2 $4,408.19 mxn</li>
          </ul>
          <br />
          Para superficie destinada a uso de suelo mixto:
          <ul>
            <li>De 30 a 50 m2 $1,521.67 mxn </li>
            <li>De 51 hasta 100 m2 $4,397.38 mxn </li>
            <li>De 101 hasta 500 m2 $9,968.19 mxn </li>
            <li>Para superficie que exceda de 500 m2 $9,968.19 mxn </li>
          </ul>
        </p>
      </v-col>
    </v-row>
    <v-divider class="mb-5" />
  </div>
</template>

<script>
export default {
  name: 'usoSuelo',
  data() {
    return {
      headers: [
        { text: 'Documento Requerido', align: 'start', value: 'nombre' },
        { text: 'Presentación', align: 'start', value: 'presentacion' }
      ],
      documentos: [
        {
          nombre: 'Acta constitutiva de la empresa',
          presentacion: 'Copia y original para cotejo'
        },
        {
          nombre: 'Identificación oficial vigente con fotografía',
          presentacion: 'Original y Copia'
        },
        {
          nombre: 'Titulo profesional (opcional) ',
          presentacion: 'Original y copia'
        },
        {
          nombre: 'Comprobante de domicilio ',
          presentacion: 'Original y copia'
        },
        {
          nombre: 'Croquis de ubicación ',
          presentacion: 'Original y copia'
        },
        {
          nombre: 'Escrituras del predio ',
          presentacion: 'Original y copia'
        },
        {
          nombre: 'Plano topográfico ',
          presentacion: 'Original y copia'
        },
        {
          nombre: 'Boleta predial vigente ',
          presentacion: 'Original y copia'
        },
        {
          nombre: 'Escrito libre de solicitud ',
          presentacion: 'Original y copia'
        },
        {
          nombre: 'Oficio de solicitud ',
          presentacion: 'Original y copia'
        },
        {
          nombre: 'Plano georeferenciado con coordenadas geográficas ',
          presentacion: 'Original y copia'
        },
      ],
    };
  }
}
</script>

<style scoped>
.scrollable-content {
  overflow-y: auto;
  max-height: 500px;
}
</style>
