var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d2560862-b27e-45a9-878e-129eaad3592c"],"propsByKey":{"d2560862-b27e-45a9-878e-129eaad3592c":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var border1 = createSprite(10,200,10,390);
border1.shapeColor = ("white");
var border2 = createSprite(200,10,390,10);
border2.shapeColor = ("white");
var border3 = createSprite(390,200,10,390);
border3.shapeColor = ("white");
var border4 = createSprite(200,390,390,10);
border4.shapeColor = ("white");
var centerLine1 = createSprite(200,160,370,10);
centerLine1.shapeColor = ("red");
var centerLine2 = createSprite(200,240,370,10);
centerLine2.shapeColor = ("red");
var computergoal  = createSprite(200,25,100,20);
computergoal.shapeColor = ("yellow");
var playergoal  = createSprite(200,375,100,20);
playergoal.shapeColor = ("yellow");
var computermallet  = createSprite(200,45,70,10);
computermallet.shapeColor = ("black");
var playermallet  = createSprite(200,355,70,10);
playermallet.shapeColor = ("black");
var striker = createSprite(200,200,20,20);
striker.shapeColor = ("white");
var gameState = "serve";
var computerscore = 0;
var playerscore = 0;

function draw() {
 background("rgb(105, 151, 250)");
 createEdgeSprites();
 
  if (gameState === "serve") {
  text("Press Space to Serve",150,180);
  }
  
  text(computerscore, 20, 195);
  text(playerscore, 20, 215);
  
  
  computermallet.velocityX = striker.velocityX ;
  
    if (keyWentDown("LEFT_ARROW")){
   playermallet.velocityX =-5;
 }
  if (keyWentUp("LEFT_ARROW")){
   playermallet.velocityX =0;
 }
  if (keyWentDown("RIGHT_ARROW")){
   playermallet.velocityX = 5; 
 }
  if (keyWentUp("RIGHT_ARROW")){
   playermallet.velocityX = 0; 
 }

  //draw line at the centre
  for (var i = 0; i < 390; i=i+20) {
    line(i,200,i+10,200);
  } 
 
 //reset the ball to the centre if it crosses the screen
  
  if (striker.isTouching(playergoal)){
   computerscore = computerscore+1;
   }
   
    if (striker.isTouching(computergoal)){
   playerscore =  playerscore+1;
    }
   
   if(striker.isTouching(playergoal)||striker.isTouching(computergoal )){ 
    reset();
    gameState = "serve";
  }
  if (playerscore === 5 || computerscore === 5){
    gameState = "over";
   text("Game Over", 170, 180);
   text("press R to restart",150,190);
   }
   
     if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }

   //bouncing off objects from each other and edges
   striker.bounceOff(border2);
   striker.bounceOff(border1);
   striker.bounceOff(computermallet);
   striker.bounceOff(playermallet);
   striker.bounceOff(border3);
   striker.bounceOff(border4);
   playermallet.bounceOff(border1);
   playermallet.bounceOff(border3);
   computermallet.bounceOff(border1);
   computermallet.bounceOff(border3);
   
     if (keyDown("r") && gameState === "over"){
    gameState = "serve";
     computerscore = 0;
     playerscore = 0;
  }
  
 drawSprites();
}

function serve() {
  striker.velocityX = -3;
  striker.velocityY = 4;
}

function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
