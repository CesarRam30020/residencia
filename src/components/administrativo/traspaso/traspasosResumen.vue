<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <p class="text-justify">Una opción más rápida para el inicio de un establecimiento de alimentos y bebidas es el traspaso. Este método tiene la ventaja de ahorrar bastante tiempo con el tema de los tramites y es una opción si se quiere evitar el todo el tema de conseguir los permiso y licencias. 
        <br><br>
        Hacerlo de esta manera no solo los costos pueden variar dependiendo el día que se lleve a cabo el trámite será el costo del traspaso. El dueño puede fijar un precio por el permiso que es ajeno al del trámite. 
        <br><br>
        Se tiene que tomar en cuenta si se quiere hacer el traspaso de un establecimiento de alimentos y bebidas. Es el estudiar el historial del lugar desde el por qué se quiere traspasar el lugar, si es por que murió alguien dentro del lugar, está por quebrar por x motivo, la zona no fue la adecuada para lo que se ofrece, etc. Al hacer esto se evitarán problemas que se puedan llegar a afectar el establecimiento en el futuro. 
        <br><br>
        El tiempo para atender la solicitud es de 30 días hábiles con un costo de $561.00 más $51.00 por formato múltiple. Además, los giros con venta y/o consumo de bebidas alcohólicas, tendrán un costo a calcular de acuerdo con la Ley de ingresos vigente.</p>
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
  </div>
</template>

<script>
export default {
  name: 'traspasosResumen',
  data: () => ({
    headers: [
      { text: 'Documento Requerido', align: 'start', value: 'nombre' },
      { text: 'Presentación', align: 'start', value: 'presentacion' }
    ],
    documentos: [
      {
        nombre: 'Identificación oficial',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Acta constitutiva (para personas morales',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Contrato de legal posesión del inmueble',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Formato de solicitud llenado y firmado por el titular',
        presentacion: 'Original'
      },
      {
        nombre: 'Identificación Oficial con fotografía vigente del Cedente y Aceptante',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Licencia en vigente del año en curso',
        presentacion: 'Original'
      },
      {
        nombre: 'Pago de cuenta Predial Vigente',
        presentacion: 'Original'
      },
      {
        nombre: 'Registro Federal de Contribuyentes',
        presentacion: '2 copias y original para cotejo'
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