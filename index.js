window.onload = function(){

    //Base para usar o canvas
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    //Variaveis

    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    footY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;
}