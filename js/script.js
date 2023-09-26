window.onload = function () {
    const startButton = document.querySelector("#start-button");
    const restartButton = document.querySelector("#restart-button");
    let game;
  
    startButton.addEventListener("click", function () {
      startGame();
    });
  
    restartButton.addEventListener("click", function () {
      // Call the restartGame function when the button is clicked
      restartGame();
    });
  
    function startGame() {
      console.log("start game");
      game = new Game();
  
      game.start();
    }
    console.log (startGame);
  
    // Function reloads the page to start a new game
    function restartGame() {
      location.reload();
    }
  
    // Function handles keydown event
    function handleKeydown(event) {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        // "ArrowDown",
      ];
  
      // Check if the pressed key is in the possibleKeystrokes array
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();

        const moveDistance = 3;

        game.player.directionX = 0;
        game.player.directionY = 0;
  
        // Update player's directionX and directionY based on the key pressed
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -moveDistance;
            break;
          case "ArrowUp":
            game.player.directionY = -moveDistance;
            break;
          case "ArrowRight":
            game.player.directionX = moveDistance;
            break;
          // case "ArrowDown":
          //   game.player.directionY = moveDistance;
          //   break;
        }
      }
    }
  function handleKeyup(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      // "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key))  {
      event.preventDefault ();
      game.player.directionX = 0;
      game.player.directionY = 0;
    }
  }
    // Add the handleKeydown function as an event listener for the keydown event
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
  };