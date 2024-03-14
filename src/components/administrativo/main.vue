<template>
  <v-container>
    <v-card class="pa-5">
      <v-row no-gutters align="center" justify="center">
        <v-col> <h1 class="text-center"> PERMISOS Y LICENCIAS </h1> </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mb-5">
        <v-col>
          <p>
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
          <p>
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
          <p>
            En el caso de requerir el permiso de uso de suelo para utilizar un espacio para servicios industriales o en este caso comercial. 
            <br><br>
            La duración de la licencia tiene una vigencia de dos años con la opción a prorrogarse por un periodo igual, previa solicitud del interesado deberá presentarse cuando menos cinco días hábiles anteriores a la fecha de vencimiento. El tiempo del trámite por lo general tarda alrededor de cinco días hábiles.
          </p>
        </v-col>
      </v-row>
      <!-- <v-divider class="mb-5"/> -->

      <v-row no-gutters align="center" justify="center">
        <v-col> <h2 class="text-center">Documentos</h2> </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mb-5">
        <v-col>
          <v-data-table
            :headers="headers"
            :items="documentosLicencias"
            :footer-props="{
              'items-per-page-options': [15, 20, 25 ]
            }"
          />
        </v-col>
      </v-row>
      <v-divider class="mb-5"/>

      <v-row no-gutters align="center" justify="center">
        <v-col> <h2 class="text-center">Costos</h2> </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mb-5">
        <v-col>
          <p>
            Dependiendo el tamaño, el lugar destinado puede o no ser ampliado y/o remodelado variaría el costo de la licencia. 
            <br><br>
            Para superficie destinada a uso comercial, oficina, servicios personales y profesionales:
            <ul>
              <li>De 1 hasta 50 m2 $1,458.94 mxn</li>
              <li>De 51 hasta 100 m2 $4,214.60 mxn</li>
              <li>De 101 hasta 500 m2 $7,348.79 mxn</li>
              <li>Para superficie que exceda de 500 m2 $9,552.89</li>
            </ul>
            <br>
            Para superficie destinada a establecimientos comerciales ya edificados, no válidos para construcción, ampliación o remodelación:
            <ul>
              <li>Hasta 100 m2 $864.12</li>
              <li>De 101 hasta 500 m2 $2,188.95 mxn</li>
              <li>Para superficie que exceda de 500 m2 $4,408.19 mxn</li>
            </ul>
            <br>
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

      <v-row align="center" justify="center">
        <v-col> <h2 class="text-center">Declaración de Apertura de Establecimientos Mercantiles </h2> </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mb-5">
        <v-col>
          <p>
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
      <!-- <v-divider class="mb-5" /> -->

      <v-row no-gutters align="center" justify="center">
        <v-col> <h2 class="text-center">Documentos para el tramite</h2> </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mb-5">
        <v-col>
          <v-data-table
            :headers="headers"
            :items="documentosDeclaracion"
            :footer-props="{
              'items-per-page-options': [15, 20, 25 ]
            }"
          /> <br>
          <p>
            <b>Nota: </b>Si se es persona moral, presentar el numero de acta constitutiva y datos de identificación de la misma o registro en trámite, fecha, notaria o corredor publico  y entidad federativa en la cual se llevo a cabo la constitución de la empresa.
          </p>
        </v-col>
      </v-row>
      <v-divider class="mb-5" />

      <v-row align="center" justify="center">
        <v-col> <h2 class="text-center">Licencias Giro Tipo A, B, C </h2> </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mb-5">
        <v-col>

        </v-col>
      </v-row>
      <v-divider class="mb-5" />

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
  },
  data: () => ({
    headers: [
      { text: 'Documento Requerido', align: 'start', value: 'nombre' },
      { text: 'Presentación', align: 'start', value: 'presentacion' }
    ],
    documentosLicencias: [
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
        nombre: 'Plano georeferenciado con coordenadas  geograficas ',
        presentacion: 'Original y copia'
      },
    ],
    documentosDeclaracion: [
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
  }),
}
</script>

<style>
p { text-align: justify; }
</style>