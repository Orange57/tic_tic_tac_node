
<template>
    <div>
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
    </div>
</template>
<script>
    module.exports = {
        data(){
            return{
                socketIO : "",
            }
        },
        methods:{
            connectSocketIO : async function(){
                await this.$nextTick();
                this.socketIO = io();
            }
        },
        mounted(){
            this.connectSocketIO();
        },
    }
</script>
<style>

</style>
