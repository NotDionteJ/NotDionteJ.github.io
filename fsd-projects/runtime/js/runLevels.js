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
    createSawBlade(4500,190)
    createSawBlade(5000,290)
    
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
    createEnemy(400, groundY - 250);
    createEnemy(950, groundY - 250);
    createEnemy(1520, groundY -250);
    function createReward(){

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
