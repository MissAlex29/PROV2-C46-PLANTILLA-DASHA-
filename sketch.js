//Ancho y alto del tablero 
width = 11;
height = 11;

//Si tiro bien o no 
var hasWon = false;


//Al presionar botón, tira dado
/*window.rollDice = () => {
  
};*/


//2 jugadores 
players = [{name: "Jugador 1",position: 0,color: "gold"}];

let currentPlayerTurn = 0;

//Matriz para el tablero
board = [];
let position = 0;
let darkBox = false;

//Posición de serpientes y escaleras
//La primera es escalera (café) 
//la siguiente serpiente  (blanca)
ladders = [{start: 2,end: 22},{start: 50,end: 34}];

//Crear cuadros para tablero 
for (var y = height; y >= 0; y--) {
  //Matriz para cuadros 
  let row = [];

  board.push(row);
  for (var x = 0; x < width; x++) {
    row.push({x,y,occupied: null,position,color: darkBox ? "#2B05F4" : "#FB040C"});
    //Intercala colores
    darkBox = !darkBox; //next one is not dark box
    position++;
  }
}

boardSize = 55;
//Dibuja el tablero
drawBoard = () => {
  let boardOnScreen = ``;
  board.forEach(row => {
    row.forEach(square => {
      boardOnScreen += `<div class=square style="top:${square.y *
        boardSize}px; left:${square.x *
        boardSize}px; background-color:${square.color}"></div>`;
    });
  });

  //Dibuja las piezas principales
  


  //Función para dibujar serpientes y escaleras 
 ladders.forEach(ladder=>{
   let startPos = {x:0, y:0};
   let endPos = {x:0, y:0};

   board.forEach(row=>{
     row.forEach(square=>{
      if(square.position === ladder.start){
        startPos.x = square.x * boardSize;
        startPos.y = square.y * boardSize;
      }
      if(square.position===ladder.end){
        endPos.x = square.x * boardSize;
        endPos.y = square.y * boardSize;
      }
     });
   });

   isLadder=ladder.end > ladder.start;
   drawLine({color:isLadder ? "brown" : "white",startPos,endPos});
 })
  
  //Obtiene datos de la pagina 
  document.getElementById("board").innerHTML = boardOnScreen;
};


//Asigna color a serpientes y escaleras 
function drawLine({color,startPos, endPos}){
  var canvas= document.getElementById("canvas");
  var diseño= canvas.getContext("2d");
  diseño.beginPath();
  diseño.moveTo(startPos.x + 35,startPos.y + 20);
  diseño.lineTo(endPos.x + 25,endPos.y + 25);
  diseño.lineWidth=17;
  diseño.strokeStyle=color;
  diseño.stroke();
 }
drawBoard();