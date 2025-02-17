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
    //most he can jump is 139 pixles
     createPlatform(500, 0, 20, 300);
     createPlatform(0, 300, 400, 20);
     createPlatform(350, 439, 100, 60);
     createPlatform(450, 170, 10, 20, "lightBlue");
     createPlatform(50, 420, 150, 20, "lightBlue");
     createPlatform(150, 420, 150, 20);
     createPlatform(500, 400, 100, 20)
     createPlatform(600, 350, 50, 50)
     createPlatform(500, 250, 50, 20)
     createPlatform(650, 0, 20, 400)









    // TODO 3 - Create Collectables
     createCollectable("database", 600, 120, 0, 20)
     createCollectable("database", 450, 30, 0, 0.7)
     createCollectable("database", 20, 350, 0, 0.7)
     

    
    // TODO 4 - Create Cannons
     createCannon("right", 200, 1500)
     createCannon("right", 450, 1500)
     createCannon("bottom", 0, 1500)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
