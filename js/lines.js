class Lines {
   body = [];
  
   

   constructor() {
      for (let i = 0; i < 20; i++) {
         let el = new Line();
         this.body.push(el);
      }
   }

   draw(){
      this.body.forEach((item) => {
         Canvas.ctx.fillStyle = "white";
         Canvas.ctx.fillRect(item.x, item.y, item.w, item.h);
      });
   }

   move(){
      this.body.forEach((item, i) => {
         item.x -= 10;
         if (item.x < 0) {
            item.h = 50 + parseInt(Math.random() * 200);
            item.y = Canvas.element.height - item.h;
            item.x = Canvas.element.width + 10;
         }
      });

      this.draw();
   }
}

class Line {
   x = 50;
   y = 0;
   w = 25;
   h = 130;
}