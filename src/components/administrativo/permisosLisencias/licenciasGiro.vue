<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row align="center" justify="center">
      <v-col> <h2 class="text-center">Licencias Giro Tipo A, B, C </h2> </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          Dentro de los giros de impacto, dependiendo por el tipo de actividad que tendrá el establecimiento se clasificará de la siguiente manera el tipo de la licencia necesaria:
          <ul>
            <li><b>Giro tipo A:</b> Son para los negocios de impacto bajo o medio sin venta de alcohol. Tiene un costo de $561.00 por expedición la licencia.</li>
          </ul>
        </p>
      </v-col>
    </v-row>
    <v-divider class="mb-5" />

    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="documentosA"
          :footer-props="{
            'items-per-page-options': [15, 20, 25]
          }"
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          <ul>
            <li><b>Giro tipo B:</b> Son para los establecimientos de riesgo medio que por su tipo de actividades requiere de supervisión previa al otorgamiento de la licencia. Tiene un precio de $561.00 mxn por impresión de licencia.</li>
          </ul>
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="documentosB"
          :footer-props="{
            'items-per-page-options': [15, 20, 25]
          }"
        />
      </v-col>
    </v-row>
    
    <v-row align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          <ul>
            <li><b>Giro tipo C:</b> Son los establecimientos que por su actividad (venta de vinos generosos y de alta graduación incluyendo consumo en el establecimiento) requieren supervisión y visto bueno de algunas de las siguientes dependencias: Dirección de Medio Ambiente y Ecología, Dirección de Protección Civil y Dirección de Movilidad. Tiene un precio de $561.00 mxn por expedición de Licencia </li>
          </ul>
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="documentosC"
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
  name: 'licenciasGiro',
  data: () => ({
    headers: [
      { text: 'Documento Requerido', align: 'start', value: 'nombre' },
      { text: 'Presentación', align: 'start', value: 'presentacion' }
    ],
    documentosA: [
      {
        nombre: 'Acta constitutiva (En caso de ser persona moral)',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Contrato legal del inmueble',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Formato del tramite',
        presentacion: 'Original'
      },
      {
        nombre: '5 fotografías a color (donde se aprecie el numero oficial del inmueble, fotografías del interior acondicionado y fotografías donde se pueda ver los inmuebles vecinos.)',
        presentacion: 'Original'
      },
      {
        nombre: 'Identificación oficial con fotografía vigente',
        presentacion: 'Original'
      },
      {
        nombre: 'Constancia de uso de suelo',
        presentacion: 'Original'
      }
    ],
    documentosB: [
      {
        nombre: 'Acta constitutiva (En caso de ser persona moral)',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Contrato legal del inmueble',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Formato del tramite',
        presentacion: 'Original'
      },
      {
        nombre: '5 fotografías a color (Fotografías donde se aprecie el numero oficial del inmueble, fotografías del interior acondicionado y fotografías donde se puede ver los inmuebles vecinos)',
        presentacion: 'Original'
      },
      {
        nombre: 'Identificación oficial con fotografía vigente',
        presentacion: 'Original'
      },
      {
        nombre: 'Constancia de uso de suelo',
        presentacion: 'Original'
      }
    ],
    documentosC: [
      {
        nombre: 'Acta constitutiva (En caso de ser persona moral)',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Constancia de no antecedentes penales (Únicamente para licencias con venta y consumo de bebidas alcohólicas de baja graduación)',
        presentacion: 'Original'
      },
      {
        nombre: 'Contrato legal del inmueble',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Formato de Licencia de Giro',
        presentacion: 'Original'
      },
      {
        nombre: '3 Fotografías a color (Fotografías donde se aprecie el numero oficial del inmueble, fotografías del interior acondicionado y fotografías donde se pueda ver los inmuebles vecinos)',
        presentacion: ''
      },
      {
        nombre: 'Identificación oficial con fotografía vigente)',
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Registro Federal de Contribuyentes',
        presentacion: '2 copias y original para cotejo'
      },
      {
        nombre: 'Ubicación (Solicitar a la Dirección de Padrón y Licencias que coteje la compatibilidad de Uso de Suelo)',
        presentacion: ''
      }
    ]
  })
}
</script>

<style>
.scrollable-content {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 500px;
}
</style>