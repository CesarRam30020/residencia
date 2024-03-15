<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Licencia de Funcionamiento para establecimientos sin venta de bebidas alcohólicas</h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          Es el permiso otorgado que permite la operación del establecimiento sin ofrecer bebidas alcohólicas.
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

    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          En caso de que el trámite lo realice un representante legal de persona física: 
          <ul>
            <li>Identificación oficial vigente del propietario, carta poder simple o poder notarial (copia legible)</li>
            <br>
            <li>Identificación oficial con fotografía vigente del representante (copia legible)</li>
          </ul>
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Costos</h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          <ul>
            <li>Emisión de tarjetón general: $177.82</li>
            <li>Emisión de tarjetón de sustancias de inhalación y efectos tóxicos: $177.82</li>
          </ul>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'licFuncionamientoNoAlcohol',
  data: () => ({
    headers: [
      { text: 'Documento Requerido', align: 'start', value: 'nombre' },
      { text: 'Presentación', align: 'start', value: 'presentacion' }
    ],
    documentos: [
      {
        nombre: 'Formato de Empadronamiento (Se adquiere en cajas de Tesorería Municipal o Centro de Atención Municipal)',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Licencia de Uso de Suelo vigente',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Recibo de pago de la Licencia de Uso de Suelo',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Cedula de identificación fiscal expedida por el SAT',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Identificación oficial con fotografía vigente',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Comprobante domiciliario no mayor a 3 meses',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Comprobante de pago de derechos',
        presentacion: 'Copia y original para cotejo'
      }
    ]
  }),
}
</script>

<style>
.scrollable-content {
  overflow-y: auto;
  max-height: 500px;
}
</style>