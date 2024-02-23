<template>
    <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="black"
          text icon
          v-on="on"
          small
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="$emit('menuAction', item.action, id)"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    props: ['items','id'],
    data: () => ({
    })
}
</script>