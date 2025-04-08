var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x= -25;
      obstacleImage.y= -25;
    }
    createSawBlade(400,190)
    createSawBlade(1000,290)
    createSawBlade(1500,190)
    createSawBlade(2000,290)
    createSawBlade(2030,290)
    createSawBlade(2500,190)
    createSawBlade(2550,190)
    createSawBlade(2600,190)
    createSawBlade(2720,290)
    createSawBlade(3000,290)
    createSawBlade(3500,190)
    createSawBlade(4000,290)
    createSawBlade(4030,290)
    createSawBlade(4500,190)
    createSawBlade(5000,290)
    createSawBlade(5500,190)
    createSawBlade(6000,290)
    createSawBlade(6500,190)
    createSawBlade(7000,290)
    createSawBlade(7030,290)
    createSawBlade(7500,190)
    createSawBlade(7550,190)
    createSawBlade(7600,190)
    createSawBlade(7720,290)
    createSawBlade(8000,290)
    createSawBlade(8500,190)
    createSawBlade(9000,290)
    createSawBlade(9030,290)
    createSawBlade(9500,190)
    createSawBlade(10000,290)
    
    createSawBlade(10500,190)
    createSawBlade(11000,290)
    createSawBlade(11500,190)
    createSawBlade(12000,290)
    createSawBlade(12030,290)
    createSawBlade(12500,190)
    createSawBlade(12550,190)
    createSawBlade(12600,190)
    createSawBlade(12720,290)
    createSawBlade(13000,290)
    createSawBlade(13500,190)
    createSawBlade(14000,290)
    createSawBlade(14030,290)
    createSawBlade(14500,190)
    createSawBlade(15000,290)
    createSawBlade(15500,190)
    createSawBlade(16000,290)
    createSawBlade(16500,190)
    createSawBlade(17000,290)
    createSawBlade(17030,290)
    createSawBlade(17500,190)
    createSawBlade(17550,190)
    createSawBlade(17600,190)
    createSawBlade(17720,290)
    createSawBlade(18000,290)
    createSawBlade(18500,190)
    createSawBlade(19000,290)
    createSawBlade(19030,290)
    createSawBlade(19500,190)
    createSawBlade(20000,290)
    
    function createEnemy(x, y) {
      // all code from TODO 7 and 8
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = groundY - y;
      game.addGameItem(enemy);
      enemy.velocityX = -3;
      enemy.onPlayerCollision = function() {
        game.changeIntegrity(-10);
      }
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      }
    }
    createEnemy(500, groundY - 250);
    createEnemy(1200, groundY - 250);
    createEnemy(1720, groundY -250);
    createEnemy(2540, groundY - 250);
    createEnemy(2550, groundY - 250);
    createEnemy(3500, groundY -250);
    createEnemy(4400, groundY - 250);
    createEnemy(5600, groundY - 250);
    createEnemy(6000, groundY -250);
    createEnemy(7000, groundY - 250);
    createEnemy(7300, groundY - 250);
    createEnemy(8720, groundY -250);
    createEnemy(9440, groundY - 250);
    createEnemy(9550, groundY - 250);
    createEnemy(10500, groundY -250);
    createEnemy(10970, groundY - 250);
    createEnemy(12000, groundY - 250);
    createEnemy(12500, groundY -250);
    createEnemy(13500, groundY -250);
    createEnemy(14970, groundY - 250);
    createEnemy(15000, groundY - 250);
    createEnemy(16500, groundY -250);
    createEnemy(17300, groundY -250);
    createEnemy(17970, groundY - 250);
    createEnemy(18070, groundY - 250);
    createEnemy(18500, groundY -250);
    createEnemy(19470, groundY - 250);
    createEnemy(19700, groundY - 250);
    createEnemy(20000, groundY -250);
    function createReward(){

    }
    function createMarker( x , y){
      startLevel(20500,groundY -250);
    }
    function myFunctionName(parameter1Name, parameter2Name) {
      // your code to be reused goes here
      function average(x, y) {
        var average = (x + y) / 2;
        console.log("the average of " + x + " and " + y + " is " + average);
      }
    }

    

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
