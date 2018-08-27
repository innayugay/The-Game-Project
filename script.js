
 class HeadJump{
  constructor(){
    this.character = {};
    this.blocks = [];
    // this.score = score;
  }
  
  collision(){}

  pointsCollector(){}

  animate(){
    window.requestAnimationFrame(character.jump());
    window.addEventListener("keydown", controller.keyListener)
    window.addEventListener("keyup", controller.keyListener);

  }

  gameOver(){}

  checkIfWin(){}
  

 }

///////////////////////  CHARACTER CLASS //////////////////////
 class Character{
  // constructor(){
  // this.x = 200,
  // this.y = 600,
  // this.width = 100,
  // this.height = 80
  // this.imageSource = "../images/nick-on-head.png"
  // }
  constructor(){
  this.height = 32,
  this.jumping = true,
  this.width = 32,
  this.x = 144,
  this.x_velocity= 0,
  this.y= 550,
  this.y_velocity = 0
  this.imageSource = "../images/nick-on-head.png"
  this.ctx = document.getElementById("theCanvas").getContext('2d');
  }



 drawCharacter(){
  
  console.log(this)
  
  const theImage = new Image();
  theImage.src = this.imageSource;
  
  theImage.onload = (() => {
    
    this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    


  })
 }

 moveAround(number){
  this.ctx.clearRect(this.x, this.y, this.width, this.height)
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
  this.drawCharacter();

 }

  


  

  //  controller(){
  //     var left = false;
  //     var right = false;
  //     var up = false;
  
  jump(number){

    // this.ctx.clearRect(this.x, this.y, this.width, this.height)
    console.log(number);
    if(number === 38){
      this.y_velocity -= 20;  // CHANGE THE JUMPING HERE!
      this.y_velocity += 1.5; //gravity
      
      this.y += this.y_velocity;

      this.y_velocity *= 0.9 //firction
      this.jumping = true;
    }

    if(number === 39){
      this.x_velocity += 0.5;
      this.x += this.x_velocity;
      this.x_velocity *= 0.9;
    }
    
    // this.drawCharacter();
  
  }


    //   var key_state;
   
  //     switch(number) {
   
  //       case 37: //left key
  //       key_state = "left";
  //       break;
  //       case 38: //up key
  //       key_state = "up";
  //       break;
  //       case 39: //right key
  //       key_state = "right";
  //       case 40: //down key
  //       key_state = "down";
  //       break;
  //     }
   
    
  // // }
  

  //   if(key_state = "up" && this.jumping == false) {
  //       this.y_velocity -= 20;  // CHANGE THE JUMPING HERE!
  //       this.jumping = true;
  //   }
  //   if(key_state = "left") {
  //       this.x_velocity -= 0.5;
  //   }
  //   if(key_state = "right") {
  //       this.x_velocity += 0.5;
  //   }
  // }
   
   

  // window.requestAnimationFrame(jump());
}




///////////////////////  BLOCKS CLASS //////////////////////

class Blocks{
  constructor(){
    this.x = 200, 
    this.y = 400,
    this.color = "green",
    this.ctx = document.querySelector("#theCanvas").getContext('2d')

  }
  blocksDraw(){
    this.ctx.fillRect(this.x, this.y, 100, 30);
    
  }


  blocksMoveRandom(){}


  
}
//  ///////////
  // var game = new HeadJump;
  // game.animate();

  // var blocks = new Blocks;
  // blocks.blocksDraw();
  // var character = new Character;
  // character.drawCharacter();
  // character.jump();
  // console.log('haha')

  var newGame;
  window.onload = function() {
    newGame = new HeadJump();
    newGame.character = new Character;
    newGame.character.drawCharacter();
    newGame.character.jump(number);
    // setInterval(newGame.character.jump(),20);
    newGame.character.moveAround();


  }

  document.onkeydown = function(e){
    let whereToGo = e.keyCode;
    newGame.character.moveAround(whereToGo);
    newGame.character.jump(whereToGo);
  }







