let theInt, otherInt, firstInt;

var moveBottom = true;

 window.onload = function() {

  var ctx = document.querySelector("#theCanvas").getContext('2d');

 class HeadJump{
  constructor(){
    this.character = {};
    this.blocks = [];
    // this.ctx = document.querySelector("#theCanvas").getContext('2d')
    // this.score = score;
  }
  

  collisionCheck(){
    
// if(this.character.x < this.blocks.x + this.blocks.width && 
// this.character.x + this.character.width > this.blocks.x &&
// this.character.x < this.blocks.y + this.blocks.height &&
// this.character.y + this.character.height > this.blocks.y) {
//   consle.log('Collision Detected')
// }
   

      this.blocks.forEach((eachObstacle)=>{
  
              if((this.character.x + this.character.width >= eachObstacle.x && this.character.x <= eachObstacle.x+eachObstacle.width) &&
              (this.character.y + this.character.height >= eachObstacle.y && this.character.y <= eachObstacle.y+eachObstacle.height)){
                // console.log("AHHHHHH collision!=-=-=--=-=-=-=-=-=-=-=-")
                this.character.y = eachObstacle.y - this.character.height;
                // console.log('where am I')
              } 
              
      })  
  }


 
   
  drawEverything(){
    this.character.drawCharacter();
    this.blocks.forEach((oneBlock)=>{
      oneBlock.blocksDraw();
    })
  }

 

  gameOver(){}

  checkIfWin(){}
  

 }

///////////////////////  CHARACTER CLASS //////////////////////
 class Character{
 
  constructor(){
  this.height = 52,
  this.jumping = true,
  this.width = 52,
  this.x = 144,
  this.x_velocity= 20,
  this.y= 550,
  this.y_velocity = 0
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
    var jumpUp = false;
    var jumpDown = false;
    var intL = setInterval(()=> {
      if(this.y >= 550) {
        jumpUp = true;
        jumpDown = false;
        // this.y += 5;
      } 
      if(this.y <= 500) {
        jumpUp = false;
        jumpDown = true;
        // this.y -= 5;
      }
      if(jumpUp === true) {
        this.y -= 5;
      } else {
        this.y += 5;
      }
    }, 70) 


    // window.requestAnimationFrame(this.update());
  }

    
  }

   update(){
  
    var upLimit = this.y;
    var jumpUp = false;
    var jumpDown = false;
    // var a = false;
    
    setInterval(()=>{
    if(this.y >= 550){
      jumpUp = true;
      jumpDown = false;
    } 
    if (this.y <= 500){
      jumpDown = true;
      jumpUp = false;
    }
    
      if(jumpUp === true){
        // console.log("moving up");
        this.y -= 2;
        // console.log(this.y)
     }
      else{
        // this.y += this.y_velocity;
        this.y += 2;
        // consoles.log(this.y)
        // console.log("moving down");
      }
    }, 50)

  }





    

  
  
  

///////////////////////  BLOCKS CLASS //////////////////////


 class Blocks{
  constructor(x,y){
    this.x = x, 
    this.y = y,
    this.width = 70;
    this.height = 10;

    this.color = "rgb(29, 109, 9)"
    // this.ctx = document.querySelector("#theCanvas").getContext('2d')

  }
  blocksDraw(){
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;

  }
  blocksMoveRandom(){
    
    var moveToTheRight = true;
    var moveToTheLeft = true;

    setInterval(()=>{
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

        this.x += 10;
      }
        else{
        this.x -= 10;

        
      }
    },50)
  }
  
}



  var newGame;
  
    newGame = new HeadJump();
    newGame.character = new Character;
    newGame.character.drawCharacter();
    // newGame.character.jump();
    // setInterval(newGame.character.jump(),20);
    newGame.character.moveAround();


    newGame.blocks.push(new Blocks(100,100),new Blocks (200,140), new Blocks (480,180), new Blocks (150,220), new Blocks(400,260), new Blocks(450,300),new Blocks (210,340),new Blocks (300,380),new Blocks (250,420),new Blocks (500,460), new Blocks (50,500),new Blocks (350,550));


    // for(i=0; i< newGame.blocks.length; i++){
    //   newGame.blocks[i].blocksDraw();
    // }

    for(i=0; i< newGame.blocks.length; i++){
      newGame.blocks[i].blocksMoveRandom();
      // console.log(`new x of block ${i} is ${newGame.blocks[i].x}`)
    }

  


  function animate(){

    // setInterval(()=>{
      ctx.clearRect(0,0,800,600);
      newGame.drawEverything();

      newGame.collisionCheck();
      
    // },50)

    window.requestAnimationFrame(animate);
  }

  document.onkeydown = function(e){
    // HeadJump.collisionCheck;

    animate();
    let whereToGo = e.keyCode;
    newGame.character.moveAround(whereToGo);
    if(e.keyCode === 38){
      newGame.character.update();

      // setTimeout(()=>{
      //   console.log("animating")
      //   newGame.animate();
      // },880) 
    }
  }

}






