class Game {
   lines = new Lines();
   car = new Car();
   interval = null;
   constructor() {
      
   }
   play() {
      console.log("Started");
      this.lines.drawLines();
      this.car.drawCar();
      this.interval = setInterval(() => {
         Canvas.ctx.clearRect(0, 0, Canvas.element.width, Canvas.element.height);
         this.lines.move();
      }, 100);
   }

   over() {

   }
}
