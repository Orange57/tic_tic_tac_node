<template>
    <div>
         rttt dsqkdk
        <p>TEST DE TOI</p>
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
