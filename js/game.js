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
      this.height = 950;
      this.width = 2500;
      this.obstacles = [];
      this.score = 0;
      this.scoreElement = document.getElementById ('score');
      this.scoreElement2 = document.getElementById ('score2');
      this.lives = 1;
      this.livesElement = document.getElementById ('lives');
      this.gameIsOver = false;
      this.animationId = null;
      this.gameIsWon = false;
    }

    start () {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block"; 

        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.gameLoop();
    }
    gameLoop() {
    
        if (this.gameIsOver){
            return;
        }
    
        this.update ();

        if (this.player.top <= 60) {
            this.score++;
            this.scoreElement.textContent = this.score;
            this.player.element.remove();           
            this.resetGame();
        }
        
        this.animationId = window.requestAnimationFrame(() => this.gameLoop());
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
                this.livesElement.innerText = this.lives;
                i--;
            }
            else if (obstacle.width > this.width) {
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                i--;
            }
        }

        if (this.score >= 3) {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].speed = 6.5;
            }
        }

        if (this.score >= 5) {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].speed = 8.5;
            }
        }

        if (this.score >= 7) {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].speed = 12.5;
            }
        }

        if (this.score >= 10) {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].speed = 22.5;
            }
        }

        if (this.lives === 0) {
            this.gameOver();
        }

        if (this.animationId % 100 === 0) {
            this.obstacles.push (new Obstacle (this.gameScreen));
        }

        if (this.animationId % 100 === 1 && this.score >= 3) {
            this.obstacles.push (new Obstacle (this.gameScreen));
        }

        if (this.animationId % 100 === 2 && this.score >= 7) {
            this.obstacles.push (new Obstacle (this.gameScreen));
        }
    }

    gameOver() {
        this.player.element.remove();


        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
       
        this.scoreElement2.innerText = this.score;
    }
    
    
    resetGame () {
        this.player = new Player (
            this.gameScreen,
            200,
            500,
            100,
            150,
            "/src/spaceship.png"
          );
        this.player.element.style.top = `${this.player.top}px`;
        this.lives = 1;
        this.livesElement.textContent = this.lives;
     
    }
}