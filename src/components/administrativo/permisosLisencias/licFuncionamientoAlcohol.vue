<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Licencia de Funcionamiento para establecimientos con venta de bebidas alcohólicas. </h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          Es el permiso otorgado que permite la operación de un establecimiento con venta de bebidas alcohólicas.
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
          En caso de ser una personal moral:
          <ul><li><b>Acta constitutiva:</b> Original y Copia </li></ul>
          En caso de que la persona que realiza el trámite no se mencione en el acta constitutiva:
          <ul><li><b>Poder notarial:</b> Original y Copia </li></ul>
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
          Dependiendo cual sea la temática del establecimiento, cambiara el coste de la licencia.
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          <ul>
            <li><b>Tarjetón general:</b> $177.82</li>
            <li><b>Tarjetón de sustancias de inhalación y efectos tóxicos:</b> $177.82</li>
            <li><b>Alimentos en general con venta de cerveza en botella abierta:</b> $39,119.81</li>
            <li><b>Restaurante bar:</b> $51,656.23</li>
          </ul>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'licFuncionamientoAlcohol',
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
        nombre: 'Licencia de Uso de suelo vigente',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Recibo de pago de la Licencia de Uso de Suelo Especifico',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Cedula de identificación fiscal expedida por el SAT',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Comprobante domiciliario no mayor a 3 meses',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Comprobante de pago de derechos',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Identificación oficial con fotografía vigente',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Pago de derechos',
        presentacion: 'Copia y original para cotejo'
      }
    ]
  })
}
</script>

<style>
.scrollable-content {
  overflow-y: auto;
  max-height: 500px;
}
</style>