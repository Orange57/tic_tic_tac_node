<template>
  <div>
    <v-toolbar-title></v-toolbar-title>

    <v-row justify="center" align="center">
      <v-col v-for="(element, index) in board" :key="index" cols="4">
        <v-btn @click="play(index)"  width="200px" height="200px" color="gray">
          {{ element[index+1] }}
        </v-btn>
      </v-col>
    </v-row>

  </div>
</template>

<script>
  export default {
    name: 'game',
    data() {
      return {
        pseudo: "",
        gameId: "",
        board: [
          {sign: ' '},
          {sign: ' '},
          {sign: ' '},
          {sign: ' '},
          {sign: ' '},
          {sign: ' '},
          {sign: ' '},
          {sign: ' '},
          {sign: ' '},
        ]
      }
    },

    methods:{
      play(index){
        this.$axios.$post('http://localhost:8080/game', {gameId: this.gameId, pseudo: this.pseudo, index: index}).then(res => this.board = res.board)
      }
  },

    mounted() {
      this.pseudo = this.$route.query.pseudo
      this.gameId = this.$route.query.gameId

      console.log(this.$route.query)
    }
  };
</script>

<style scoped>

</style>
