var randomHello = [];


function setup() {
    
    createCanvas(500,500);
    
    console.log(randomHello.lenght);
    console.log(typeof(randomHello));
    
    randomHello.push("Hello");
    randomHello.push("Hola");
    randomHello.push("Bonjour");
    randomHello.push("what's");
    randomHello.push("up");
 
//    text(randomHello[0], random(width), random(height));
//    text(randomHello[1], random(width), random(height));
//    text(randomHello[2], random(width), random(height));
//    text(randomHello[3], random(width), random(height));
//    text(randomHello[4], random(width), random(height));
    
    for(var i = 0; i < randomHello.length; i++);{
        text(randomHello[i], random(width), random(height));
        
    }
}
    
function draw(){

}
