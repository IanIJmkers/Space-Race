class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.pos = Math.floor(Math.random() * 2);
      // floor of randomized number between 0-1 * 2 
      this.img = Math.floor(Math.random() * 2);

      this.top = Math.random() * 750;
      this.width = 40;
      this.height = 40;
      this.speed = 5.5;
      
      this.element = document.createElement("img");
      // use random value to decide origin point
      if(this.pos == 1){
        this.left = -300;
      } else {
        this.left = 1900;
      }
      // use random value to decide content of img
      if (this.img == 1) {
        this.element.src = "/src/asteroid.png";
      } else {
        this.element.src = "/src/pink-monster.png";
      }
  
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
      // 
      if (this.pos == 1){
        // Moves object (left - right)
        this.left += this.speed;
        // Update the obstacle's position 
        this.updatePosition();
        
        if (this.left >= this.gameScreen.width) {
          this.element.remove();
        }
      } else {
        // moves object (right - left)
        this.left -= this.speed;
      // Update the obstacle's position on the screen
      this.updatePosition();
      
      if (this.left <= -300) {
        this.element.remove();
      }
      }
    }
  }