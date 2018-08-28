let theInt, otherInt, firstInt;

 class HeadJump{
  constructor(){
    this.character = {};
    this.blocks = [];
    this.ctx = document.querySelector("#theCanvas").getContext('2d')
    // this.score = score;
  }
  
  collisionCheck(){

  }

  pointsCollector(){}

  drawEverything(){
    this.character.drawCharacter();
    this.blocks.forEach((oneBlock)=>{
      oneBlock.blocksDraw();
    })
  }

  animate(){
   
    // console.log(this.character.ctx + "ctx")

    setInterval(()=>{
      // this.character.ctx.clearRect(this.x, this.y, this.width, this.height);
      // console.log('clearing y: ' + this.character.y)
      // setTimeout(()=>{
      //   console.log('drawing y: ' + this.character.y)
      //   this.character.drawCharacter();

      // },20)

      this.ctx.clearRect(this.x, this.y, this.width, this.height);
      this.drawEverything();
      this.collisionCheck();
    },50)
  
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
  this.height = 52,
  this.jumping = true,
  this.width = 52,
  this.x = 144,
  this.x_velocity= 0,
  this.y= 550,
  this.y_velocity = 0
  this.imageSource = "../images/nick-on-head.png"
  this.ctx = document.getElementById("theCanvas").getContext('2d');
  }



 drawCharacter(){
  
  // console.log(this)
  
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
  
  jump(){
    // if(number === 38){
      //   this.y_velocity -= 20;  // CHANGE THE JUMPING HERE!
      //   console.log("start this.y_velocity: ", this.y_velocity)
      //   this.y_velocity += 1.5; //gravity
      
      //   this.y += this.y_velocity;
      
      //   this.y_velocity *= 0.9 //firction
      //   console.log("end this.y_velocity: ", this.y_velocity)
      
      //   // this.jumping = true;
      // }
      // if(number === 38){
        setInterval(()=>{
          console.log("jump interval happening")
          // this.ctx.clearRect(this.x, this.y, this.width, this.height)
          clearInterval(theInt);
          clearInterval(otherInt);
          clearInterval(firstInt);

        // console.log('before: ', this.y)
        if(this.y > 50){
          // firstInt = setInterval(() => {
          // this.ctx.clearRect(this.x, this.y, this.width, this.height)
          this.y -= 50;
          console.log("actually jumping y: " + this.y)
          
          // this.drawCharacter();
          // },50)
          theInt = setInterval(() => {
          if(this.y < 548){
              // this.ctx.clearRect(this.x, this.y, this.width, this.height)
              this.y += 5;
              console.log('falling: ', this.y)
              // this.drawCharacter()
            }
          }, 50)
        } else {
          this.y = 50;
          // this.drawCharacter();
          otherInt = setInterval(() => {
            if(this.y < 548){
              // this.ctx.clearRect(this.x, this.y, this.width, this.height)
              this.y += 5;
              // this.drawCharacter()
            }
          }, 5)  
        }
      }, 900)
      // }

    // if(number === 39){
    //   this.x_velocity += 0.5;
    //   this.x += this.x_velocity;
    //   this.x_velocity *= 0.9;
    // }
    
    // this.drawCharacter();
    // requestAnimationFrame(this.jump());
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
  constructor(x,y){
    this.x = x, 
    this.y = y,
    this.color = "rgb(29, 109, 9)",
    this.ctx = document.querySelector("#theCanvas").getContext('2d')

  }
  blocksDraw(){
    this.ctx.fillRect(this.x, this.y, 70, 10);
    this.ctx.fillStyle = this.color;

  }
  blocksMoveRandom(){
    var withinRightBorder = true;
    var withinLeftBorder = true;

    setInterval(()=>{
      this.ctx.clearRect(this.x, this.y, 70, 10);
      
      if((this.x + 70) > 800){
        withinRightBorder = false;
      }

      if(this.x < 0){
        withinLeftBorder = false;
      }

      if(withinRightBorder || withinLeftBorder === false){
        this.x += 10;
      }
      else{
        this.x -= 10;
        console.log(this.x)
        
      }

      this.blocksDraw();
    },400)
  }


  
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
    // newGame.character.jump();
    // setInterval(newGame.character.jump(),20);
    newGame.character.moveAround();


    newGame.blocks.push(new Blocks(100,100),new Blocks (200,140), new Blocks (480,180), new Blocks (150,220), new Blocks(400,260), new Blocks(450,300),new Blocks (210,340),new Blocks (300,380),new Blocks (250,420),new Blocks (500,460), new Blocks (50,500),new Blocks (350,550));

    for(i=0; i< newGame.blocks.length; i++){
      newGame.blocks[i].blocksDraw();
    }

    for(i=0; i< newGame.blocks.length; i++){
      newGame.blocks[i].blocksMoveRandom();
      // console.log(`new x of block ${i} is ${newGame.blocks[i].x}`)
    }

  }

  document.onkeydown = function(e){
    let whereToGo = e.keyCode;
    newGame.character.moveAround(whereToGo);
    if(e.keyCode === 38){
      newGame.character.jump();
      setTimeout(()=>{
        console.log("animating")
        newGame.animate();
      },880) 
    }
  }











