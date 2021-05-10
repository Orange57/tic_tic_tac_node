<template>
  <v-row justify="center" align="center">
    <v-card width="450px" elevation="5px">
      <v-card-title> Jouer une partie</v-card-title>

      <v-text-field label="Saisir un pseudo" v-model="form.pseudo"></v-text-field>

      <v-row justify="center" align="center">
        OU
      </v-row>


      <v-text-field label="Saisir un pseudo d'un joueur a rejoindre" v-model="form.gameId"></v-text-field>

      <v-row justify="center" align="center">
        <v-btn @click="createGame">Rejoindre une partie</v-btn>
      </v-row>

    </v-card>
  </v-row>
</template>

<script>
  export default {
    name: 'createGame',
    data () {
      return {
        form:{
          pseudo:'',
          gameId: null
        }
      }
    },

    methods: {
      createGame(){
        this.$axios.$post('http://localhost:8080/create_game', this.form)
        .then(res => {
          this.$router.replace({path:'/game', query:{pseudo:res.pseudo, gameId: res.gameId}})
        })
      }
    }
  };
</script>

<style scoped>

</style>
