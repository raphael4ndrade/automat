const PIXI = require('pixi.js');
const width = 640;
const height = 480;

var renderer = PIXI.autoDetectRenderer(height, width);
document.body.appendChild(renderer.view);

let stage = new PIXI.Container();
let alien;

PIXI.loader.add("alien.json").load( function(loadre, resources){
    let frames = [];
    frames.push(PIXI.Texture.fromFrame("alien_down1"));
    frames.push(PIXI.Texture.fromFrame("alien_down0"));
    frames.push(PIXI.Texture.fromFrame("alien_down1"));
    frames.push(PIXI.Texture.fromFrame("alien_down2"));
    alien = new PIXI.MovieClip(frames);
    alien.interactive = true
    alien.animationspeed = 0.1;
    alien.play();
    alien.on("mousedown", function(){
        alien.y = -20;
        alien.x = Math.ceil(Math.random() * height);
    });
    stage.addChild(alien); 
    anim();
});

function anim(){
    renderer.render(stage);
    if(alien.position.y > width){
        alert("GAME OVER!");
    } else {
        alien.position.y++;
        requestAnimationFrame(anim);
    }
}
