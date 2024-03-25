<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">
          LEY GENERAL PARA EL CONTROL DEL TABACO Y SU REGLAMENTO PARA RESTAURANTES, BARES, DISCOTECAS Y HOTELES:
        </h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <p class="text-justify">
          Ésta es una ley que debe cumplirse para proteger y mantener la salud de la población. La Comisión Federal para la Protección contra Riesgos Sanitarios <b>(COFEPRIS)</b> y la Comisión Nacional contra las Adicciones <b>(CONADIC)</b>, son los responsables de difundir y hacer que se cumpla esta ley. 
          <br><br>
          Puedes encontrar más información <a href="https://www.gob.mx/cms/uploads/attachment/file/167481/guia_tabaco.pdf" target="_blank" style="color: blue;">aquí.</a>
          <br><br>
          <b>ISO 14001:2015</b>
          <ul>
            <li>
              Sistemas de gestión ambiental — Requisitos con orientación para su uso.
            </li>
          </ul>
          <br><br>
          Con éste ISO se busca gestionar responsabilidades ambientales de forma sistemática para contribuir con el pilar ambiental de la sostenibilidad.
          <br><br>
          La norma ayuda a nuestra organización a lograr resultados previstos de su sistema de gestión ambiental, para la aportación de valor al medio ambiente. 
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'leyControlTabaco'
}
</script>

<style>
.scrollable-content {
  overflow-y: auto;
  max-height: 500px;
}
ul {
  list-style-type: none; /* Esto quita los estilos de viñeta predeterminados */
}
li:before {
  content: "-"; /* Reemplaza el contenido del elemento de lista con un guion */
  margin-right: 5px; /* Opcional: añade un margen derecho para separar el guion del texto */
}
</style>