let w = 600;
let h = 400;
let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
    //noStroke es para que no tenga margen
    
}

function draw() {


    micLevel = mic.getLevel();
    mov = map(micLevel, 0, 1, 1, 3000);
    background('#71FACF');

    var boca_w = width / 1.75;
    noStroke();
    
    push();
    
    scale(mouseX / 1000);
    translate(mouseX, mouseY);
//    
//    translate(width / 2, height / 2);
//    rectMode(CENTER);
//    pop();

    //indica que emnpieza y podemos poner los que queramos.



    //Oreja Izquierda Detras
    push();
    fill('#137C48');
    beginShape();
    //stroke('#FFFFFF');
    //strokeWeight(6);
    vertex(350 + mov, 440);
    vertex(350, 200);
    vertex(500, 350);
    endShape(CLOSE);
    //pop();

    //Oreja Derecha Detras
    push();
    //el reflejo solo se mueve el Heigth
    fill('#137C48');
    beginShape();
    //stroke('#FFFFFF');
    //strokeWeight(6);
    vertex(650 - mov, 440);
    vertex(650, 200);
    vertex(500, 350);
    endShape(CLOSE);
    //    pop();

    //Oreja Izquierda delante
    push();
    fill('#51ECA0');
    beginShape();
    //stroke('#FFFFFF');
    //strokeWeight(6);
    vertex(350, 195);
    vertex(440, 290);
    vertex(250, 380 - mov);
    endShape(CLOSE);
    //    pop();

    //Oreja Derecha delante
    push();
    fill('#51ECA0');
    beginShape();
    //    stroke('#FFFFFF');
    //    strokeWeight(6);
    vertex(750, 380 - mov);
    vertex(650, 195);
    vertex(560, 290);
    endShape(CLOSE);
    //    pop();

    //Triangulo Cara
    push();
    fill('#51ECA0')
    beginShape();
    //    stroke('#FFFFFF');
    //    strokeWeight(6);
    vertex(300 + mov, 500); //Izquierdo
    vertex(500, 200 - mov); //Arriba
    vertex(700 - mov, 500); //Derecho
    vertex(500, 800); //Abajo
    endShape(CLOSE);
    //    pop();


    //Ojo Negro Izquierdo
    push();
    beginShape();
    fill('#137C48')
    ellipse(450 + mov, 450, 20, 20);
    endShape();
    //        pop();

    //Ojo Blanco Izquierdo
    push();
    beginShape();
    fill('#F5F5F5')
    ellipse(450 + mov, 450, 9, 9);
    endShape();
    //        pop();


    //Ojo Negro Derecha
    push();
    beginShape();
    fill('#137C48')
    ellipse(550 - mov, 450, 20, 20);
    endShape();
    //    pop();

    //Ojo Blanco Derecha
    push();
    beginShape();
    fill('#F5F5F5')
    ellipse(550 - mov, 450, 9, 9);
    endShape();
    //    pop();

    //Nariz
    push();
    beginShape();
    stroke('white');
    strokeWeight(6);
    fill('#137C48')
    ellipse(500, 500, 30, 30);
    endShape();
    //    pop;

    //Ceja
    push();
    fill('black');
    stroke('#137C48');
    strokeWeight(6);
    beginShape();
    rect(425, 410 - mov, 150, 5, 50);
    endShape(CLOSE);
    //    pop();

    //Boca_01
    beginShape();
    push();
    stroke('white');
    strokeWeight(20);
    fill('#137C48')
    rect(440, 560, 120, 30 + mov, 20);
    endShape();
    pop();






//            //Arruga Ojo Izquierdo
//            push();
//            stroke('#137C48');
//            strokeWeight(6);
//            noFill();
//            arc(450 + mov, 450, 50, 50, PI, TWO_PI);
//            endShape();
//            pop();
//        
//            //Arruga Ojo Derecho
//            push();
//            stroke('#137C48');
//            strokeWeight(6);
//            noFill();
//            arc(550 - mov, 450, 50, 50, PI, TWO_PI);
//            endShape();
//            pop();


}


function touchStarted() {
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
