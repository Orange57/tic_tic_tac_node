import Vue from "vue";
import App from "D:\\DEV\\nodejs_cesi\\tictactoe\\tic_tic_tac_node\\src\\views\\index.vue";

export function createApp(data) {
    const mergedData = Object.assign(App.data ? App.data() : {}, data);
    App.data = () => (mergedData)
 
    const app = new Vue({
        data,
        render: h => h(App),
    });
    return { app };
}