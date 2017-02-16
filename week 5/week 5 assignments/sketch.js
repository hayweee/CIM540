var message = "hello";

function setup(){   
}

function draw(){
    bacground(255);
    //fill(0);
    textSize(32);
    
    text(message, 10, 10, 100, 100); 
}

function mousePressed(){
    message = "goodbye";
}

function mouseReleased(){
    message = "";
}


function keyPressed(){
    console.log(key);
    console.log(keyCode);
    
        if(key == 'A'){
            console.log("A is for Apple")
        }
        
        if(keyCode == 65){
            console.log("A is for 65")
        }
    
}
