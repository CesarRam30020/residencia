<template>
    <v-footer app color="primary">
        <v-spacer></v-spacer>
        <span  class="overline">&copy; {{ new Date().getFullYear() }} FICG </span>
    </v-footer>
</template>

<script>
export default {
   
    data: () => ({
        loading: false,
    })
}
</script>