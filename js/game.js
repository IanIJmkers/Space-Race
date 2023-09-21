class Game {
    constructor() {
      this.gameField = document.querySelector("#game-field");
      this.startScreen = document.querySelector("#game-intro");
      this.gameScreen = document.querySelector("#game-screen");
      this.gameEndScreen = document.querySelector("#game-end");
      this.player = new Player (
        this.gameScreen,
        200,
        500,
        100,
        150,
        "/src/spaceship.png"
      );
      this.height = 1600;
      this.width = 1500;
      this.obstacles = [];
      this.score = 0;
      this.lives = 1;
      this.gameIsOver = false;
    }
    start () {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block"; 

        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.gameLoop();
    }
    gameLoop() {
        console.log ("in the game loop");
        if (this.gameIsOver){
            return;
        }
        this.update ();

        window.requestAnimationFrame(() => this.gameLoop());
    }
    update () { 
        this.player.move();

        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles [i];
            obstacle.move ();

            if (this.player.didCollide (obstacle)) {
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this.lives--;
                i--;
            }
            else if (obstacle.width > this.width) {
                this.score++;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                i--;
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles.push (new Obstacle (this.gameScreen));
        }
    }

    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(function (obstacle) {
            obstacle.element.remove();
        });

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
}