class Car {
   drawCar() {

      let car = new Image();
      car.src = 'images/car.png';
      car.addEventListener('load', () => {
         Canvas.ctx.drawImage(car, this.rndX(), this.rndY(), 130, 280);
      });
   }
   
   rndX() {
      let rndNumber = parseInt(Math.random() * Canvas.element.width);
      return rndNumber;
   }
   rndY() {
      let rndNumber = parseInt(Math.random() * Canvas.element.height);
      return rndNumber;
   }

}