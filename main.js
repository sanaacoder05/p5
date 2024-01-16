function setup() {
    Canvas=createCanvas(400, 400);
    Canvas.center()
  }
  
  function draw() {
    background(220);
    textSize(20)
    stroke(0)
    strokeWeight(1)
    text(mouseX,150,30)
    text(mouseY,250,30)
    
    let e =map(mouseY,0,400,130,145)
    let e1=map(mouseX,0,400,140,155)
    let e2=map(mouseX,0,400,240,255)
    
    stroke(0)
    strokeWeight(1)
    //face
    fill(255)
    rect(100,100,200,200)
    
    //e1
    fill(255)
    ellipse(150,140,50,50)
    fill(0)
    ellipse(e1,e,20,20)
    
    //e2
    fill(255)
    ellipse(250,140,50,50)
    fill(0)
    ellipse(e2,e,20,20)
    
    //nose
    fill(mouseY,0,0)
    rect(190,168,20,50)
    
    //mouth
    let m=map(mouseY,0,400,20,30)
    fill(255)
    rect(150,250,100,m)
    //hat
    fill(255)
    triangle(100,100,200,30,300,100)
    
    
    
  }