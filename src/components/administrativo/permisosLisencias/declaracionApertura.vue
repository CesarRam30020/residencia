<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row align="center" justify="center">
      <v-col> <h2 class="text-center">
        Declaración de Apertura de Establecimientos Mercantiles
      </h2> </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          La Declaración de apertura de establecimientos mercantiles es un tramite por el cual una persona física o moral. Hace del conocimiento a las autoridades que va a iniciar actividades comerciales o de servicios siendo un documento que forma parte de los tramites necesarios para que un emprendedor opere en la República Mexicana. El tramite por lo general suele ser rápido de 3 días hábiles hasta el mismo día que se tramita y luego se deberá de colocar a la vista del negocio. 
          <br><br>
          Como dueño de un establecimiento es importante saber que los establecimientos mercantiles se dividen en tres tipos de giros que determinan los requisitos que se necesitan para poder obtener la Declaración de apertura:
          <br>
          <ul>
            <li>
              <b>Giros de Bajo Impacto: </b>Establecimientos que se caracterizan por la compraventa, arrendamiento, distribución de bienes o prestación de servicios y que por las sus características tiene prohibida la venta de bebidas alcohólicas. Solo esta la venta permitida de bebidas alcohólicas en los establecimientos que no midan mas de 80 m2 y que se dediquen a la venta de alimentos preparados en un horario de 12:00 a 17:00 hrs.
            </li>
            <br>
            <li>
              <b>Giros de Impacto Zonal: </b>Establecimientos que tienen como actividad principal la venta y distribución de bebidas alcohólicas en envase abierto y/o al copeo para su consumo en el interior. En este tipo de establecimientos se pueden prestar los servicios de alimentos preparados, música viva y grabada o videograbada, televisión, alquiler de juegos de salón de mesa y billares y/o se podrá contar con un espacio para bailar o presentación de espectáculos. Estos establecimientos no podrán ubicarse a menos de trecientos metros de centros educativos.
            </li>
            <br>
            <li>
              <b>Giros de impacto vecinal: </b>Establecimientos que provocan transformaciones, alteraciones o modificaciones en la armonía de la comunidad, Sus actividades principales esta la venta de alimentos como complemento la venta de bebidas alcohólicas.
            </li>
          </ul>
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center">
      <v-col> <h2 class="text-center">Documentos para el tramite</h2> </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="documentos"
          :footer-props="{
            'items-per-page-options': [15, 20, 25 ]
          }"
        /> <br>
        <p class="text-justify">
          <b>Nota: </b>Si se es persona moral, presentar el numero de acta constitutiva y datos de identificación de la misma o registro en trámite, fecha, notaria o corredor publico  y entidad federativa en la cual se llevo a cabo la constitución de la empresa.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'declaracionApertura',
  data: () => ({
    headers: [
      { text: 'Documento Requerido', align: 'start', value: 'nombre' },
      { text: 'Presentación', align: 'start', value: 'presentacion' }
    ],
    documentos: [
      {
        nombre: 'Nombre o razón social para personas morales, fecha de nacimiento para personas físicas, domicilio y nacionalidad del solicitante.',
        presentacion: 'Original y Copia'
      },
      {
        nombre: 'Registro federal de causantes (RFC)',
        presentacion: 'Original y Copia'
      },
      {
        nombre: 'Visto bueno de protección civil seguridad y operación',
        presentacion: 'Original y Copia'
      },
      {
        nombre: 'Ubicación y superficie del establecimiento mercantil',
        presentacion: 'Original y Copia'
      },
      {
        nombre: 'Denominación o nombre comercial del establecimiento mercantil',
        presentacion: 'Original y Copia'
      },
      {
        nombre: 'Giro comercial o actividad que pretende ejercer',
        presentacion: 'Original y Copia'
      },
      {
        nombre: 'Datos de la constancia o certificado de zonificación para el giro que se pretende operar',
        presentacion: 'Original y Copia'
      },
      {
        nombre: 'Programa interno de Protección Civil',
        presentacion: 'Original y Copia'
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