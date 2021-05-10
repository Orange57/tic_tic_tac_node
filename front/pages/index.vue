<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <p>
        Cette page est la pour vous expliquer les règles du jeu
      </p>

      <p>
        Aller sur jouer <br>
        Saisissez votre pseudo et créez votre partie ou rejoignez une partie déjà lancée
      </p>


      <p>
        Une fois dans la partie, cliquez sur une case pour y placer votre pion a votre tour <br>
        La but du jeu est d'en aligner 3
      </p>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
