
<template>
    <div class="game_creator_container">
        <form action="/create_game" method="post">
            <div class="name_container">
                <div class="label_name">
                    Merci de saisir un pseudo
                </div>
                <input class="input_name" name="pseudo" />
            </div>
            <div class="create_game_container">
                <button type="submit">Créer une partie</button>
            </div>
            <div class="join_game_container">
                <div class="label_join_game">
                    Saisir l'ID de la partie en cours
                </div>
                <input class="id_game" name="gameId" />
            </div>
        </form>
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
    .game_creator_container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            height: 30vh;
            width: 40vw;
            background-color: rgba(250, 250, 250, 1);
            border: solid 0.5vh gray;
        }
        .name_container{
            height: 33%;
            width: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .label_name{

        }
        .input_name{

        }
        .create_game_container{
            height: 33%;
            width: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .join_game_container{
            height: 33%;
            width: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .label_join_game{

        }
        .id_game{

        }
</style>
