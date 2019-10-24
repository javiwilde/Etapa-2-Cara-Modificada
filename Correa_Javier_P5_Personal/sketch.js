let w = 400;
let h = 600;
let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    mic = new p5.AudioIn();
    mic.start();
    //noStroke es para que no tenga margen
    noStroke();
}

function draw() {
    
    //Para que no me aparezca el seguimiento de la linea.
    background('white');
    micLevel = mic.getLevel();
    mov = map(micLevel, 0, 1, 10, 500);

    var boca_w = width / 1.75;
    noStroke();
    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);

    //fons de la boca
    fill(188,41,10);
    rect(0, 80, boca_w-mov+0.5, 200,0,0,50,50);

    //llengua
    fill(255, 87, 51);
    rect(0, 130, boca_w-mov+0.5, 100, 100);

    //dent dret.
    //( posicion derecha o izquierda, mas arriba o mas abajo, largo, curbatura, )
    fill(255);
    rect(30, 40, 50, 50, 5);
    
    //dent esquerra.
    fill(255);
    rect(-30, 40, 50, 50, 5);
    
//    //dent central.
//    fill(255);
//    rect(0, 30, 260, 70, 5);

    //barbeta
    fill('#1591D0');
    rect(0, 160, boca_w-mov+0.5, 100,0,0,50,50);

    //el pop cierra el push
    pop();
    //front
    fill('#1591D0');
    rect(0, 0, width, height / 1.8,0,0,20,20);

    //ull esquerra
    fill(255);
    ellipse(width * 0.25, height / 2.50, 40+mov+0.5);
//    fill('#28292A');
    fill('#000000');
    ellipse(width * 0.25, height / 2.40, 10+mov+0.5);

    //ull dret
    fill(255);
    ellipse(width * 0.75, height / 2.50, 40+mov+0.5);
//    fill('#28292A');
    fill('#000000');
    ellipse(width * 0.75, height / 2.40, 10+mov+0.5);

    
    //nas esquerra
    fill('#1172A3');
    ellipse(width * 0.45, height / 2.10, 20);
    
    //nas dret
    fill('#1172A3');
    ellipse(width * 0.55, height / 2.10, 20);
    
    
    //hacemos el push e introducmos el rectmMode para que me respete el inicio desde el centro de la linea. Y ponemos el width para que se separe el a la distancia del ojo.
    push();
    rectMode(CENTER);
    //ceja derecha
    fill('#28292A');
    rect(width * 0.25, 120-mov+0.5, 150, 30, 10); 
    
    //ceja izquierda
    fill('#28292A');
    rect(width * 0.75, 120-mov+0.5, 150, 30, 10);
    pop();
    
    
//    //nas
//    noFill();
//    stroke(255);
//    strokeWeight(10);
//    arc(width * 0.5, height / 1.85, 60, 60+mov+0.5, radians(230), radians(310));

}


function touchStarted(){
    getAudioContext().resume();
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}








//let w = 400;
//let h = 600;
//let mic;
//
//function setup (){
//    //createCanvas(400,400);
//    createCanvas(windowWidth, windowHeight);
//    background('red');
//    
//    //Esto es así, es el codigo que se a de poner.
//    mic = new p5.AudioIn();
//    mic.start();
//}
//
//
//
//function draw (){
//    micLevel = mic.getLevel();
//    //Amplia el valor minimo de 0 al valor maximo de 300. Le decimos que me mapee el valor que soundLevel va de 0 a 1 y le digo que me lo amplia de 1 a 1000 o al numero que yo quiera.
//    mov = map(micLevel, 0,1,10,1000);
//    
//    //noStroke();
//    background(150);
//    stroke('blue');
//    strokeWeight(40);
//    fill('yellow');
//    //rect(0,0,100,100);
//    //ellipse(100,100,100);
//    //ellipse(300,100,100);
//    //Le digo que me sume la variable +mov, que depoende sera 0 o depende sera 300.
//    //Para que se mueva todo tengo que poner el restyo de información para que se aplique.
//    ellipse(width/2,height/2,100+mov+0.5);
//    ellipse(mouseX,mouseY,100);
//    fill(134,31,234);
//    noFill();
//    stroke(20,mouseX,mouseY);
//    strokeWeight(1);
//    triangle(mouseX, mouseY,300,300,100,300);
//    rectMode(CENTER);
//    fill('brown');
//    rect(0,0,200,200);
//
//}
//
////Esto es un tema de privacidad para hacer que el adioContext.
//function touchStarted(){
//    getAudioContext().resume();
//}
//function windowResized(){
//    resizeCanvas(windowWidth, windowHeight);
//}
