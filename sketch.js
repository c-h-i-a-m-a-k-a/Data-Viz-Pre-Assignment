

// Function found at: 
//https://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript
/*
function matrixMultiply(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}


function translatePoints(x,y,z,t1,t2,t3){
  
  let orig  = [[x],[y],[z],[1]];
  let t_mat = [[1,0,0,t1],[0,1,0,t2],[0,0,1,t3],[0,0,0,1]];
  let res =  matrixMultiply(t_mat,orig);
  let ret = [res[0][0],res[1][0],res[2][0]];
  
  return ret;
}

let xt = -1000;
*/


// Animation from:
// https://www.youtube.com/watch?v=vmhRlDyPHMQ&list=PLwUlLzAS3RYow0T9ZXB0IomwB-DyBRTfm&ab_channel=ColorfulCoding

let sketch1 = async function (p){
	p.setup = function() {
  c = p.createCanvas(300, 300,p.WEBGL)
  c.position(0,0);
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
     
      let time = Math.floor(p.hour()/10);
     
     if (time >= 3 || time == 0){
	if(time == 0){
		time++;}
        p.beginShape()
     for (var j = 0; j < 360; j += 360/time ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount*0.33 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   }  else if (time == 2){
       p.beginShape()
     for (var j = 0; j < 180; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount*0.33 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
       
     p.endShape(p.CLOSE)
    } else if (time == 1) {
      p.beginShape()
     for (var j = 0; j < 360; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount*0.33 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   } 
}
    }
  
  
  
}

/*let sketch2 = async function (p){
	p.setup = function() {
  p.createCanvas(300, 300,p.WEBGL)
  p.angleMode(p.DEGREES)

}

	p.draw = function() {
  p.background (30)
  p.rotateX(60)
  
  p.noFill()
  p.stroke(255)
   for (var i = 0; i <= 50; i ++) {
    var r = p.map(p.sin(p.frameCount/2), -1, 1, 100, 200)
    var g = p.map(i, 0, 50, 100, 200)
    var b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)
     p.stroke(r, g, b)
     p.rotate(1)
     
      let time = Math.floor(p.hour()%10);
     
     if (time >= 3){
        p.beginShape()
     for (var j = 0; j < 360; j += 360/time ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   }  else if (time == 2){
       p.beginShape()
     for (var j = 0; j < 180; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
       
     p.endShape(p.CLOSE)
    } else if (time == 1) {
      p.beginShape()
     for (var j = 0; j < 360; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   } 
}
    }
  
  
  
}*/

/*let sketch3 = async function (p){
	p.setup = function() {
  p.createCanvas(300, 300,p.WEBGL)
  p.angleMode(p.DEGREES)

}

	p.draw = function() {
  p.background (30)
  p.rotateX(60)
  
  p.noFill()
  p.stroke(255)
   for (var i = 0; i <= 50; i ++) {
    var r = p.map(p.sin(p.frameCount/2), -1, 1, 100, 200)
    var g = p.map(i, 0, 50, 100, 200)
    var b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)
     p.stroke(r, g, b)
     p.rotate(1)
     
      let time = Math.floor(p.minute()/10);
     
     if (time >= 3){
        p.beginShape()
     for (var j = 0; j < 360; j += 360/time ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   }  else if (time == 2){
       p.beginShape()
     for (var j = 0; j < 180; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
       
     p.endShape(p.CLOSE)
    } else if (time == 1) {
      p.beginShape()
     for (var j = 0; j < 360; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   } 
}
    }
  
  
  
}*/

/*let sketch4 = async function (p){
	p.setup = function() {
  p.createCanvas(300, 300,p.WEBGL)
  p.angleMode(p.DEGREES)

}

	p.draw = function() {
  p.background (30)
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
     
     if (time >= 3){
        p.beginShape()
     for (var j = 0; j < 360; j += 360/time ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   }  else if (time == 2){
       p.beginShape()
     for (var j = 0; j < 180; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
       
     p.endShape(p.CLOSE)
    } else if (time == 1) {
      p.beginShape()
     for (var j = 0; j < 360; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   } 
}
    }
  
  
  
}*/

/*let sketch5 = async function (p){
	p.setup = function() {
  p.createCanvas(300, 300,p.WEBGL)
  p.angleMode(p.DEGREES)

}

	p.draw = function() {
  p.background (30)
  p.rotateX(60)
  
  p.noFill()
  p.stroke(255)
   for (var i = 0; i <= 50; i ++) {
    var r = p.map(p.sin(p.frameCount/2), -1, 1, 100, 200)
    var g = p.map(i, 0, 50, 100, 200)
    var b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)
     p.stroke(r, g, b)
     p.rotate(1)
     
      let time = Math.floor(p.second()/10);
     
     if (time >= 3){
        p.beginShape()
     for (var j = 0; j < 360; j += 360/time ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   }  else if (time == 2){
       p.beginShape()
     for (var j = 0; j < 180; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
       
     p.endShape(p.CLOSE)
    } else if (time == 1) {
      p.beginShape()
     for (var j = 0; j < 360; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   } 
}
    }
  
  
  
}*/
 
/*let sketch6 = async function (p){
	p.setup = function() {
  p.createCanvas(300, 300,p.WEBGL)
  p.angleMode(p.DEGREES)

}

	p.draw = function() {
  p.background (30)
  p.rotateX(60)
  
  p.noFill()
  p.stroke(255)
   for (var i = 0; i <= 50; i ++) {
    var r = p.map(p.sin(p.frameCount/2), -1, 1, 100, 200)
    var g = p.map(i, 0, 50, 100, 200)
    var b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)
     p.stroke(r, g, b)
     p.rotate(1)
     
      let time = Math.floor(p.second()%10);
     
     if (time >= 3){
        p.beginShape()
     for (var j = 0; j < 360; j += 360/time ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   }  else if (time == 2){
       p.beginShape()
     for (var j = 0; j < 180; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
       
     p.endShape(p.CLOSE)
    } else if (time == 1) {
      p.beginShape()
     for (var j = 0; j < 360; j += 5 ) {
      var rad = i * 3
      var x = rad * p.cos(j)
      var y = rad * p.sin(j)
      var z = p.sin(p.frameCount * 2 + i * 5) * 50
      
      p.vertex(x*0.75, y*0.75, z*0.75)
     }
    p.endShape(p.CLOSE)
   } 
}
    }
  
  
  
}*/


const d = new Date();


let s1 = Math.floor(d.getSeconds()/10);
let s2 = d.getSeconds()%10;
let m1 = Math.floor(d.getMinutes()/10);
let m2 = d.getMinutes()%10;
let h1 = Math.floor(d.getHours()/10);
let h2 = d.getHours()%10;
let times = [h1,h2,m1,m2,s1,s2];


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

let myp1 = new p5(sketch1);
//let myp2 = new p5(sketch2);
//let myp3 = new p5(sketch3);
//let myp4 = new p5(sketch4);
//let myp5 = new p5(sketch5);
//let myp6 = new p5(sketch6);
