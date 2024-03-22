<template>
<v-list>
    <v-list-item >
      <v-list-item-content>
        <v-list-item-title>MENÚ</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item v-for="(item,index) in menu" :key="index" link @click="redirect(item.route)">
         <v-list-item-avatar>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        
         <v-list v-for="(item,index) in item.children" :key="index" link @click="redirect(item.route)"> 
          <v-list-item-title>{{ item.title }}</v-list-item-title></v-list>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  props:['menu'],
  computed: {
    ...mapGetters(["httpURL","userName"]),
  },
  data () {
    return {
    }
  },
  created(){
  },
  methods:{
    redirect(route){
      if( this.$route.path != route )
        this.$router.push(route);
      else
        this.$emit('cerrarMenu');
    }
  }
}
</script>