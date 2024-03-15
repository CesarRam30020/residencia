<template>
  <div style="padding: 10px;" class="scrollable-content">
    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Permiso de anuncio exterior</h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          Permite a una persona física o moral instalar un anuncio que contenga una denominación, logotipo o emblema y eslogan que identifique la instalación donde se desarrolla la actividad del anuncio. La duración del permiso es de 3 años y el plazo del trámite es de 30 días aproximadamente.
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

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Costos</h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          Por la solicitud de permiso de publicidad de bebidas alcohólicas y alimentos de bajo valor nutritivo: 
          <ul>
            <li><b>Folletos, catálogos, carteles y otros medios similares:</b> $1,311.96 </li>
            <li><b>Anuncios en exteriores:</b> $10,157.24 </li>
          </ul>
          
          <br>

          Por la solicitud de permiso de publicidad para productos y servicios: 
          <ul>
            <li><b>Folletos, catálogos, carteles, y otros medios similares:</b> $655.98</li>
            <li><b>Anuncios en exteriores:</b> $5,078.62</li>
          </ul>
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters align="center" justify="center">
      <v-col>
        <h2 class="text-center">Nota</h2>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mb-5">
      <v-col>
        <p class="text-justify">
          <ol>
            <li>Es necesario que, como anexo al trámite relacionado a Permiso de publicidad para servicios de salud y procedimientos de embellecimiento, incluya copia de: título profesional, cédula profesional, cédula de subespecialidad, cursos, diplomados y/o certificaciones, licencia sanitaria (correspondiente), aviso de funcionamiento / responsable sanitario; que acrediten al personal y establecimiento.</li>
            <br>
            <li>Conforme se establece en el artículo 15 de la Ley Federal de Procedimiento Administrativo, el promovente deberá adjuntar a su escrito los documentos que acrediten su personalidad, y de ser el caso el nombre de la persona o personas autorizadas para recibir notificaciones. </li>
          </ol>
          
          <br>

          En lugar de los documentos que acrediten su personalidad jurídica, también podrá indicar el número de Registro Único de Personas Acreditadas (RUPA) de los representantes legales. Así mismo el escrito deberá estar firmado por el interesado o su representante legal, o en su caso de trámites electrónicos deberá ser firmado con firma electrónica (e.firma). 
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'permisoAnuncioExterior',
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
        nombre: `Documentación de acreditación de personalidad jurídica.
        Persona moral: Acta constitutiva, poder notarial e identificación oficial del representante o apoderado `,
        presentacion: 'Copia y original para cotejo'
      },
      {
        nombre: 'Comprobante de pago',
        presentacion: 'Original'
      },
      {
        nombre: 'Escritura del inmueble donde se colocará el anuncio',
        presentacion: 'Copia'
      },
      {
        nombre: 'Croquis de la ubicación',
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