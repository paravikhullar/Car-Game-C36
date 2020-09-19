class Game{
    constructor(){}

    getState(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value", function(data){
            gameState = data.val();
        })
    }
    
    update(myState){
        database.ref('/').update({
            gamestate : myState
        })
    }

    start(){
        player = new Player();
        form = new Form();
        player.getCount();
        form.display();
    }

    play(){
        form.myHide();
        textSize (30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
       // console.log(allPlayers);

       if(allPlayers != undefined){

            var displayPosition = 130;
            for(var plr in allPlayers){
                if(plr == "player" + player.index){
                    fill ("red");
                }
                else{
                    fill("black");
                }
                displayPosition = displayPosition + 40;
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, displayPosition);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance = player.distance +50;
            player.update();
        }
    }



}