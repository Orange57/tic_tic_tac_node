let source = `
<link rel="stylesheet" href="./create_game.css">
<div class="game_creator_container">
    <div class="name_container">
        <div class="label_name">
            Merci de saisir un pseudo
        </div>
        <input class="input_name" />
    </div>
    <div class="create_game_container">
        <button>Créer une partie</button>
    </div>
    <div class="join_game_container">
        <div class="label_join_game">
            Saisir l'ID de la partie en cours
        </div>
        <input class="id_game" />
    </div>
</div>

`;
let template = Handlebars.compile(source);

let data = {

};

let result = template(data);