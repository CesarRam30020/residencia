<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <p class="text-justify">Objetivo: Fomentar la cultura de protección civil y de la autoprotección a la población jalisciense a través de la promoción, coordinación e impartición de cursos básicos, así como la programación de capacitación y eventos que promuevan en la población trabajar en las acciones preventivas. 
        <br><br>
        Cursos Básicos:
        <ul>
          <li>Primeros Auxilios</li>
          <li>Evacuación de inmuebles</li>
          <li>Búsqueda y Rescate</li>
          <li>Prevención y Control de Incendios</li>
          <li>Programa Interno de Protección Civil</li>
        </ul>
        <br><br>
        Puedes encontrar más información
        <a href="https://proteccioncivil.jalisco.gob.mx/servicios/capacitacion" target="_blank" style="color: blue;">aquí.</a>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'proteccionCivilResumen',
  data: () => ({

  }),
}
</script>

<style>
.scrollable-content {
  overflow-y: auto;
  max-height: 500px;
}
</style>