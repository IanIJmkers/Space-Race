class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * 200 + 70);
      this.top = 0;
      this.width = 100;
      this.height = 100;
      this.element = document.createElement("img");
  
      this.element.src = "/src/asteroid.png";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
    }
  
    updatePosition() {
      // Update the obstacle's position based on the properties left and top
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      // Move the obstacle down by 3px
      this.left += 3;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
  }