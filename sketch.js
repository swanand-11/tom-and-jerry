var tom
var tomimage
var jerry
var jerryimage
var garden
var gardenimage

function preload() {

    //load the images here
    gardenimage = loadimage("garden.png");
    tomimage = loadimage("cat1.png,cat2.png,cat3.png,cat4.png")
    jerryimage = loadimage("mouse1.png,mouuse2.png,mouse3.png,mouse4.png")
    
}

function setup(){
    createCanvas(1000,1000);
    tom=createSprite(200,200,20,20)
    jerry=createSprite(300,300,30,30)
    garden=createSprite(1000,1000,100,100)
    //create tom and jerry sprites here

}

function draw() {

    background("gardenimage");

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
