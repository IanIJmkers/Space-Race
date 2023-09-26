class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.pos = Math.floor(Math.random() * 2);
      if(this.pos == 1){
        this.left = -300;
      } else {
        this.left = 1900;
      }
  
      this.top = Math.random() * 750;
      this.width = 40;
      this.height = 40;
      this.speed = 5.5;
      // this.stoppingPoint = this.gameScreen.width;
      // this.row
      this.element = document.createElement("img");
  
      this.element.src = "/src/asteroid.png";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;

      this.gameScreen.appendChild(this.element);
      this.updatePosition ();
    }
  
    updatePosition() {
      // Update the obstacle's position based on the properties left and top
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
    
    move() {
      // speed of obstacle
      if (this.pos == 1){
        this.left += this.speed;
        // Update the obstacle's position on the screen
        this.updatePosition();
        
        if (this.left >= this.gameScreen.width) {
          this.element.remove();
        }
      } else {
        this.left -= this.speed;
      // Update the obstacle's position on the screen
      this.updatePosition();
      
      if (this.left <= -300) {
        this.element.remove();
      }
      }
    }
  }