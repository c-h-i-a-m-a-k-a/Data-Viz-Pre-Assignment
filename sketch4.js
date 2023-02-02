
// Animation from:
// https://www.youtube.com/watch?v=vmhRlDyPHMQ&list=PLwUlLzAS3RYow0T9ZXB0IomwB-DyBRTfm&ab_channel=ColorfulCoding


let sketch4 = async function (p){
	p.setup = function() {
  c = p.createCanvas(300, 300,p.WEBGL)
  c.position(900, 300, 'fixed');
  p.angleMode(p.DEGREES)

}

	p.draw = function() {
  p.background (0)
  p.rotateX(60)
  
  p.noFill()
  p.stroke(255)
   for (var i = 0; i <= 50; i ++) {
    var r = p.map(p.sin(p.frameCount/2), -1, 1, 100, 200)
    var g = p.map(i, 0, 50, 100, 200)
    var b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)
     p.stroke(r, g, b)
     p.rotate(1)
     
      let time = Math.floor(p.minute()%10);
     
if (time >= 3 || time == 0){
	if(time == 0){
		time = 2;}
        p.beginShape()
     for (var j = 0; j < 360; j += 360/time ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   }  else if (time == 2){
       p.beginShape()
     for (var j = 0; j < 180; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount  + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
       
     p.endShape(p.CLOSE)
    } else if (time == 1) {
      p.beginShape()
     for (var j = 0; j < 360; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   } 
}
    }
  
  
  
}



let myp4 = new p5(sketch4);
