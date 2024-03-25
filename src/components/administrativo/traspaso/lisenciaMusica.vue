<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <p class="text-justify">
          Esta licencia puede ser una parte importante del proyecto mas no obligatoria dependiendo el ambiente que se quiera para el lugar. El ambiente musical y/o audiovisual en un establecimiento es uno de los principales motivos en el que los clientes se sientan a gusto y quieran permanecer más tiempo y seguir consumiendo.  
          <br><br>
          El trámite se debe de llevar a cabo en las oficinas de los estados a nivel nacional y en la Ciudad de México 
          <br><br>
          Esto por lo general los dueños de establecimientos desconocen el que al hacer esto no se necesita algún tipo de permiso por lo que recurren a aplicaciones o servicios de internet. 
          <br><br>
          Aunque existe música sin restricciones por su reproducción, existen canciones que están protegidas por derechos de autor. Por lo que, en caso de no tener una licencia, se puede llegar a una denuncia con las autoridades y cobrar mensualidades de manera retroactiva por el tiempo de uso. Por parte de la Sociedad de Autores y Compositores de México tiene como criterio económico la Unidad de Derechos de Autor (UDA) con un valor de $278.00 en 2024.  
          <br><br>
          Precio es de fácil aplicación que nace del salario mínimo y se indexa en forma automática cada año con base en el Índice Nacional de Precios al Consumidor (INPC) del Banco de México, conforme al artículo 173 del Reglamento de la Ley Federal del Derecho de Autor, garantizando a largo plazo la vigencia de las cuotas que permite un mejor entendimiento entre la SACM y los usuarios. 
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Costo</h2>
        <h4>Videos en bares, pizzerías, taquerías, restaurantes o similares</h4>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <v-data-table
          :headers="headersCosto"
          :items="itemsCosto"
          :footer-props="{
              'items-per-page-options': [15, 20, 25]
            }"
        />
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <p class="text-justify">
          <b>Nota:</b> Aquellos lugares que transmiten videos, deberán pagar de forma independiente la cuota que corresponda por el uso, difusión y ejecución publica de música grabada y/o música en vivo que tengan en su establecimiento 
          <br><br>
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h4>Los usuarios que utilicen música transmitida sin costo de forma ambiental, conocidos como: Loncherías, fondas, rosticerías, ostionerías, cafeterías o salones de te sin alimentos, heladerías y similares</h4>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="items"
          :footer-props="{
              'items-per-page-options': [15, 20, 25]
            }"
        />
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <p class="text-justify">
          <b>Nota:</b> Debido a que estos montos constituyen cantidades muy bajas, los pagos deberán hacerse en forma anual o semestral.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'licenciaMusica',
  data: () => ({
    headersCosto: [
      { text: 'Base de calculo', align: 'start', value: 'base' },
      { text: 'Cuota', align: 'start', value: 'cuota' }
    ],
    headers: [
      { text: 'Capacidad', align: 'start', value: 'capacidad' },
      { text: 'Base de calculo', align: 'start', value: 'base' },
      { text: 'Cuota', align: 'start', value: 'cuota' }
    ],
    itemsCosto: [
      {
        base: 'Udas por días de funcionamiento',
        cuota: 4
      }
    ],
    items: [
      {
        capacidad: 'De 1 a 10 mesas',
        base: 'Udas por mes',
        cuota: 2.5
      },
      {
        capacidad: 'De 11 mesas en adelante',
        base: 'Udas por mes',
        cuota: 4
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