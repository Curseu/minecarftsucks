var canvas=new fabric.Canvas("panvas");


playerx=10;
playery=10;
blockwidth=30;
blockheight=39;
var player_object="";
var blockobject="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;


        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);

    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockobject=Img;


        blockobject.scaleToWidth(150);
        blockobject.scaleToHeight(140);
        blockobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockobject);

    })
}
window.addEventListener("keydown",Keypan);
function Keypan(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey== true && keyPressed=='80'){
        console.log("p & shift pressed together");
        blockwidth=blockwidth+10;
        blockheight=blockheight+10;
        document.getElementById("Currentwidth").innerHTML=blockwidth;
        document.getElementById("Currentheight").innerHTML=blockheight;

            

    }
    if(e.shiftKey== true && keyPressed=='77'){
        console.log("M & shift pressed together");
        blockwidth=blockwidth-10;
        blockheight=blockheight-10;
        document.getElementById("Currentwidth").innerHTML=blockwidth;
        document.getElementById("Currentheight").innerHTML=blockheight;
        
            

    }
    if(keyPressed=='38'){
        up();
        console.log("up");

    }
    if(keyPressed=='40'){
        down();
        console.log("down");
        
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
        
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
        
    }
    if(keyPressed=='87'){
        new_image('wall.jpg');
        console.log("W");

    }
    if(keyPressed=='71'){
        new_image('ground.png');
        console.log("g");
        
    }
    if(keyPressed=='76'){
        new_image('light_green.png');
        console.log("l");
        
    }
    if(keyPressed=='84'){
        new_image('trunk.jpg');
        console.log("t");
        
    }
    if(keyPressed=='82'){
        new_image('roof.jpg');
        console.log("r");
        
    }
    if(keyPressed=='89'){
        new_image('yellow_wall.png');
        console.log("y");
        
    } 
    if(keyPressed=='68'){
        new_image('dark_green.png');
        console.log("d");
        
    }
    if(keyPressed=='85'){
        new_image('unique.png');
        console.log("u");
        
    }
    if(keyPressed=='67'){
        new_image('cloud.jpg');
        console.log("c");
        
    }
    
}
function up(){
    if(playery>=0){
        playery=playery-blockheight;
        console.log("block image height="+blockheight);
        console.log("when up arrow is pressed,x="+playerx+",y="+playery);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(playery<=500){
        playery=playery+blockheight;
        console.log("block image height="+blockheight);
        console.log("when down arrow is pressed,x="+playerx+",y="+playery);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(playerx>=0){
        playerx=playerx-blockwidth;
        console.log("block image width="+blockwidth);
        console.log("when left arrow is pressed,x="+playerx+",y="+playery);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(playerx<=850){
        playerx=playerx+blockwidth;
        console.log("block image width="+blockwidth);
        console.log("when left arrow is pressed,x="+playerx+",y="+playery);
        canvas.remove(player_object);
        player_update();
    }
}




