<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">NORMAS OFICIALES MEXICANAS (NOM):</h2>
        <p class="text-justify">Existen muchas normas y de muchos tipos, pero utilizaremos unas cuantas que nos rigen en este ámbito que es el restaurantero y son las siguientes: </p>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <p class="text-justify">
          <ul>
            <li>
              <b>NOM-003-SEGOB-2011 <br></b>
              Señales y avisos para protección civil. - Colores, formas y símbolos a utilizar. 
            </li><br>
            <li>
              <b>NOM-026-STPS-2008 <br></b>
              Colores y señales de seguridad e higiene, e identificación de riesgos por fluidos conducidos en tuberías.
            </li><br>
            <li>
              <b>NOM-001-STPS-2008 <br></b>
              Edificios, locales, instalaciones y áreas en los centros de trabajoCondiciones de seguridad.
            </li><br>
            <li>
              <b>NOM-002-STPS-2010 <br></b>
              Condiciones de seguridad-Prevención y protección contra incendios en los centros de trabajo.
            </li>
          </ul>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'nombresLeyesIsoResumen',
  data: () => ({}),
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