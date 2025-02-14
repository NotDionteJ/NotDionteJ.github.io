$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    //createPlateform(x,y,width,height)
    createPlatform(200, 400, 550, 20);
    createPlatform(300, 610, 750, 20);
    createPlatform(1000, 475, 500, 20);
    createPlatform(900, 250, 400, 20);
    createPlatform(1350, 350, 100, 20);
    createPlatform(80, 200, 650, 20);
    

    // TODO 3 - Create Collectables
    createCollectable("diamond", 10, 500, 0.5, 0.7);
    createCollectable("max", 800, 500, 0.5, 0.7);
    createCollectable("steve", 1350, 170, 0.5, 0.7);
    createCollectable("grace", 400, 300, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 400, 700);
    createCannon("right", 300, 750);
    createCannon("top", 1000, 700);
    createCannon("left", 500, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
