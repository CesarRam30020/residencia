<template>
    <v-footer app color="primary">
        <v-spacer></v-spacer>
        <span  class="overline">&copy; {{ new Date().getFullYear() }} Cesar Ramirez</span>
    </v-footer>
</template>

<script>
export default {
   
    data: () => ({
        loading: false,
    })
}
</script>