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

    //Chamada da função jogo a cada 100 milisegundos
    setInterval(jogo, 100)
}
// centralizar o jogo
function centralizarCanvas(){
    const margemEsquerda = (window.innerWidth - canvas.width) / 2;
    const margemTopo = (window.innerHeight - canvas.height) / 2;
    canvas.style.marginLeft = `${margemEsquerda}px`;
    canvas.style.marginTop = `${margemTopo}px`;
}


// Responsivo
window.addEventListener('resize', ()=>{
    centralizarCanvas();
});

centralizarCanvas();

// Posicionamento do jogo //-------------------------//
function jogo(){
    // configuração da tela
    ctx.fillStyle = "#2980b9";
    //distancia da borda 
    ctx.fillRect(0,0, canvas.width, canvas.height );

    //posicionando a cobra
    snake.push({x:positionX, y: positionY});
    console.log(snake[0]);

    //configuração da cobra
    ctx.fillStyle = "#00f102"
        for(let i=0; i < snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1)
        }
}