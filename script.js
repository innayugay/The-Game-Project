let theInt, otherInt, firstInt;
var b;
window.onload = function() {
  
  var ctx = document.querySelector("#theCanvas").getContext('2d');
 class HeadJump{
  constructor(){
    this.character = {};
    this.blocks = [];
    this.building;
    // this.ctx = document.querySelector("#theCanvas").getContext('2d')
    // this.score = score;
  }
  
  collisionCheck(){
      this.blocks.forEach((eachObstacle)=>{
  
              if((this.character.x + this.character.width >= eachObstacle.x && this.character.x <= eachObstacle.x+eachObstacle.width) &&
              (this.character.y + this.character.height >= eachObstacle.y && this.character.y + this.character.height <=   eachObstacle.y+eachObstacle.height)){
              
                this.character.y = eachObstacle.y - this.character.height;
                // this.character.y += 5;
                this.character.onTheBlock = true;
                setTimeout(()=> {
                this.character.onTheBlock = false;
                }, 350)
                this.character.upLimit = this.character.y - 50;
              } 
              else {
                if(this.character.onTheBlock === false) {
                  this.character.upLimit = 500;
                }
              }
              if(this.character.onTheBlock){
                this.character.onTheBlock < 20;
              }
      })  
  }
  

  pointsCollector(){}

  drawEverything(){
    this.building.drawBuilding();
    this.character.drawCharacter();
    this.blocks.forEach((oneBlock)=>{
      oneBlock.blocksDraw();
    })
  }

checkIfWin() {
  if((this.character.x + this.character.width >= this.building.x && this.character.x <= this.building.x + this.building.width) &&
  (this.character.y + this.character.height >= this.building.y && this.character.y  <= this.building.y+this.building.height)) {
 alert('You win');
  } 
} 

  gameOver(){}

  
 
}

 class Building {
   constructor() {
this.y = 30;
this.x = 600;
this.width = 50;
this.height = 50;
this.imageSourceS = "../images/building-icon.png"
   }

   drawBuilding() {

    const theImageTwo = new Image();
    theImageTwo.src = this.imageSourceS;
  
      ctx.drawImage(theImageTwo, this.x, this.y, this.width, this.height);
  }
 }

///////////////////////  CHARACTER CLASS //////////////////////
 class Character{
 
  constructor(){
    this.height = 52,
    this.jumping = true,
    this.width = 52,
    this.x = 144,
    this.x_velocity= 0,
    this.y= 550,
    this.y_velocity = 0
    this.onTheBlock = false;
    this.upLimit;
  this.imageSource = "../images/nick-on-head.png"
  // this.ctx = document.getElementById("theCanvas").getContext('2d');
  }



 drawCharacter(){
  
  // console.log(this)
  
  const theImage = new Image();
  theImage.src = this.imageSource;
  
  // theImage.onload = (() => {
    ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    // console.log("drawing character")
  // })
 }

 moveAround(number){
  // this.ctx.clearRect(this.x, this.y, this.width, this.height)
  switch(number){
    case 37: //left key
    if(this.x > 20){
      this.x -= 10;
    }
    break;

    case 39: //right key
    if(this.x < 760){
      this.x += 10;
    }
    break;
    default:
    // console.log("are you lost?")


  }
  // this.drawCharacter();

 }

  


  

  update() {
    clearInterval(b)
    this.upLimit = 500;
    var jumpUp = false;
    var jumpDown = false;
    intL = setInterval(()=> {
      if(this.y >= this.upLimit + 50) {
        jumpUp = true;
        jumpDown = false;
        // this.y += 5;
      } 
      if(this.y <= this.upLimit) {
        jumpUp = false;
        jumpDown = true;
        // this.y -= 5;
      }
      if(jumpUp === true) {
        this.y -= 5;
      } else {
        this.y += 5;
      }
    }, 35) 




    
  }

}


  
  
  

///////////////////////  BLOCKS CLASS //////////////////////
var blah;
var intL;

class Blocks{
  constructor(x,y){
    this.width = 60;
    this.height = 10;
    this.x = x, 
    this.y = y,
    this.color = "rgb(29, 109, 9)"
  

  }
  blocksDraw(){
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;

  }
  blocksMoveRandom(){
   
    
    var moveToTheRight = true;
    var moveToTheLeft = true;

    blah = setInterval(()=>{
      // ctx.clearRect(this.x, this.y, 70, 10);
      
      if((this.x + 70) > 800){
        moveToTheRight = false;
        moveToTheLeft = true;
      }

      if(this.x < 10){
      moveToTheLeft = false;
      moveToTheRight = true;
      }
     
       if(moveToTheRight || moveToTheLeft === false){
        this.x += 5;
      }
        else{
        this.x -= 5;

        
      }
    },50)
  }
  
}


  var newGame;
  
    newGame = new HeadJump();
    newGame.character = new Character;
    newGame.character.drawCharacter();
    newGame.building = new Building();
    newGame.character.moveAround();
    


    newGame.blocks.push(new Blocks(100,100),new Blocks (200,140), new Blocks (480,180), new Blocks (150,220), new Blocks(400,260), new Blocks(450,300),new Blocks (210,340),new Blocks (300,380),new Blocks (250,420),new Blocks (500,460), new Blocks (50,500),new Blocks (200,550) );

  

    for(i=0; i< newGame.blocks.length; i++){
      newGame.blocks[i].blocksMoveRandom();
      
    }

  
    
    function animate(){
      
      // setInterval(()=>{
        ctx.clearRect(0,0,800,600);
        newGame.drawEverything();
        newGame.checkIfWin();
        newGame.collisionCheck();
        
        // },50)
        
        window.requestAnimationFrame(animate);
      }
      
      document.onkeydown = function(e){
        // HeadJump.collisionCheck;

        if(e.key===" "){
          animate();
        }
        
        let whereToGo = e.keyCode;
        newGame.character.moveAround(whereToGo);
        if(e.keyCode === 38){
          newGame.character.update();
          
        }
      }
    
      
    }





