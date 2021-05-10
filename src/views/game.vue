
<template>
    <div class="h-5/6 w-5/6">
        <table class="w-full h-full">
            <tr class="w-full">
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 1 </td>
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 2 </td>
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 3 </td>
            </tr>
            <tr class="w-full">
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 4 </td>
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 5 </td>
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 6 </td>
            </tr>
            <tr class="w-full">
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 7 </td>
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 8 </td>
                <td class="w-1/3 h-1/3 bg-gray-300 text-center border-gray-500 border-solid"> 9 </td>
            </tr>
        </table>
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
                this.initAllEventIO();
            },
            initAllEventIO(){
                
            }
        },
        mounted(){
            this.connectSocketIO();
        },
    }
</script>
<style>
    body{
        height: 100vh;
        widows: 100vh;
    }
</style>
