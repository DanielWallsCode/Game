let a = document.getElementById('body');
let sound = new Audio('./song.mp3');

//INICIAR CANVAS
function initCanvas(){
   let ctx =  document.getElementById('my_canvas').getContext('2d');
   let backgroundImage =  new Image();
   let naveImage =  new Image();
   let enemiespic1 = new Image();
   let enemiespic2 = new Image();
    //IMPORTACION DE IMAGENES
   backgroundImage.src = "images/background-pic.jpg";
   naveImage.src = "images/spaceship-pic.png";

   enemiespic1.src = "images/enemigo1.png";
   enemiespic2.src = "images/enemigo2.png";

   let cW = ctx.canvas.width;
   let cH = ctx.canvas.height;

    //OBJETO DE EENEMIGOS
   let enemyTemplate = function(options){
    return{
        id:options.id || '',
        x: options.x || '',
        y: options.y || '',
        w: options.w || '',
        h: options.h || '',
        image: options.image || enemiespic1  
    }
   }
    //ARREGLO DE ENEMIGOS
    let enemies = [
        new enemyTemplate({id: "enemy1", x: 100, y: -20, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy2", x: 225, y: -20, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy3", x: 350, y: -20, w: 80, h: 30 }),
        new enemyTemplate({id: "enemy4", x:100,  y:-70,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy5", x:225,  y:-70,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy6", x:350,  y:-70,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy7", x:475,  y:-70,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy8", x:600,  y:-70,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy9", x:475,  y:-20,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy10",x: 600, y: -20, w: 50, h: 30}),

        // Segundo grupo de enemigos
        new enemyTemplate({ id: "enemy11", x: 100, y: -220, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy12", x: 225, y: -220, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy13", x: 350, y: -220, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy14", x: 100, y: -270, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy15", x: 225, y: -270, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy16", x: 350, y: -270, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy17", x: 475, y: -270, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy18", x: 600, y: -270, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy19", x: 475, y: -200, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy20", x: 600, y: -200, w: 50, h: 30, image: enemiespic2 }),

        new enemyTemplate({ id: "enemy21", x: 100, y: -320, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy22", x: 225, y: -420, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy23", x: 350, y: -520, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy24", x: 100, y: -570, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy25", x: 225, y: -570, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy26", x: 350, y: -570, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy27", x: 475, y: -570, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy28", x: 600, y: -570, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy29", x: 475, y: -500, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy30", x: 600, y: -500, w: 50, h: 30, image: enemiespic2 }),

        new enemyTemplate({id: "enemy1", x: 100, y: -620, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy2", x: 225, y: -620, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy3", x: 350, y: -620, w: 80, h: 30 }),
        new enemyTemplate({id: "enemy4", x:100,  y:-670,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy5", x:225,  y:-670,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy6", x:350,  y:-670,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy7", x:475,  y:-670,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy8", x:600,  y:-670,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy9", x:475,  y:-620,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy10",x: 600, y: -620, w: 50, h: 30}),

        new enemyTemplate({id: "enemy1", x: 100, y: -720, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy2", x: 225, y: -720, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy3", x: 350, y: -720, w: 80, h: 30 }),
        new enemyTemplate({id: "enemy4", x:100,  y:-770,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy5", x:225,  y:-770,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy6", x:350,  y:-770,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy7", x:475,  y:-770,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy8", x:600,  y:-770,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy9", x:475,  y:-720,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy10",x: 600, y: -720, w: 50, h: 30}),


        new enemyTemplate({id: "enemy1", x: 100, y: -920, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy2", x: 225, y: -920, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy3", x: 350, y: -920, w: 80, h: 30 }),
        new enemyTemplate({id: "enemy4", x:100,  y:-970,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy5", x:225,  y:-970,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy6", x:350,  y:-970,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy7", x:475,  y:-970,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy8", x:600,  y:-970,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy9", x:475,  y:-920,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy10",x: 600, y: -920, w: 50, h: 30}),

        new enemyTemplate({id: "enemy1", x: 100, y: -1420, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy2", x: 225, y: -1420, w: 50, h: 30 }),
        new enemyTemplate({id: "enemy3", x: 350, y: -1420, w: 80, h: 30 }),
        new enemyTemplate({id: "enemy4", x:100,  y:-1470,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy5", x:225,  y:-1470,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy6", x:350,  y:-1470,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy7", x:475,  y:-1470,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy8", x:600,  y:-1470,  w:80,  h: 30}),
        new enemyTemplate({id: "enemy9", x:475,  y:-1420,  w:50,  h: 30}),
        new enemyTemplate({id: "enemy10",x: 600, y: -1420, w: 50, h: 30}),

        new enemyTemplate({id: "enemy1", x: 100, y: -1620, w: 90, h: 60 }),
        new enemyTemplate({id: "enemy2", x: 225, y: -1620, w: 90, h: 60 }),
        new enemyTemplate({id: "enemy3", x: 350, y: -1620, w: 90, h: 60 }),
        new enemyTemplate({id: "enemy4", x:100,  y:-1670,  w:90,  h: 60}),
        new enemyTemplate({id: "enemy5", x:225,  y:-1670,  w:90,  h: 60}),
        new enemyTemplate({id: "enemy6", x:350,  y:-1670,  w:90,  h: 60}),
        new enemyTemplate({id: "enemy7", x:475,  y:-1670,  w:90,  h: 60}),
        new enemyTemplate({id: "enemy8", x:600,  y:-1670,  w:90,  h: 60}),
        new enemyTemplate({id: "enemy9", x:475,  y:-1620,  w:90,  h: 60}),
        new enemyTemplate({id: "enemy10",x: 600, y: -1620, w: 90, h: 60}),


        new enemyTemplate({ id: "enemy11", x: 100, y: -1910, w: 150, h: 130, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy12", x: 225, y: -1900, w: 150, h: 130, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy13", x: 350, y: -1950, w: 180, h: 150, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy14", x: 100, y: -1960, w: 180, h: 150, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy15", x: 225, y: -1980, w: 150, h: 130, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy16", x: 350, y: -1910, w: 150, h: 130, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy17", x: 475, y: -1900, w: 150, h: 130, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy18", x: 600, y: -1980, w: 180, h: 150, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy19", x: 475, y: -1990, w: 150, h: 130, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy20", x: 600, y: -1920, w: 150, h: 130, image: enemiespic2 }),

       ];

    //RENDERIZAR ENEMIGOS
   let renderEnemies = function(enemyList){
    for(let i = 0; i < enemyList.length; i++){
        let enemy = enemyList[i];
        ctx.drawImage(enemy.image, enemy.x, enemy.y += .8, enemy.w, enemy.h );
        launcher.hitDetectLowerlever(enemy);
    }
   }

   function Launcher(){
    this.y = 500,
    this.x = cW*.5 -25,
    this.w = 100,
    this.h = 100,
    this.dirrecion,
    this.bg = 'white',
    this.misiles = [];

    // If you wanted to use different fonts or messages for the player losing you can change it accordingly.
    this.gameStatus = {
        over: false, 
        message: "",
        fillStyle: 'red',
        font: 'italic bold 36px Arial, sans-serif',
    }

    this.render = function(){
        if(this.dirrecion === 'left'){
            this.x -= 5;
        }
        else if(this.dirrecion === 'right'){
            this.x += 5;
        }
        else if(this.dirrecion === 'downArrow'){
            this.y += 5;
        }
        else if(this.dirrecion === 'upArrow'){
            this.y -= 5;
        }
        ctx.fillStyle = this.bg;
        ctx.drawImage(backgroundImage,10,10);
        ctx.drawImage(naveImage,this.x,this.y,100,90);

        //PARA DISPARAR MISILES
        for(let i=0; i<this.misiles.length; i++){
            let m = this.misiles[i];
            ctx.fillRect(m.x, m.y -= 5, m.w, m.h);
            this.hitDetect(m,i);
            if(m.y <= 0){
                this.misiles.splice(i,1);
            }
        }

        if(enemies.length === 0){
            clearInterval(animateInterval);
            ctx.fillStyle = this.gameStatus.font;
            ctx.fillText('YOU WIN!', cW * .5 - 80, 50);
        }
    }

    this.hitDetect = function(m,mi){
        for(let i = 0;i < enemies.length; i++){
            let e = enemies[i];

            if( m.x <= e.x + e.w && m.x + m.w >= e.x &&
                m.y >= e.y && m.y <= e.y +e.h){
                enemies.splice(i,1);
                document.querySelector('.barra').innerHTML = "Destroy" + e.id;
            }
        }
    }

    this.hitDetectLowerlever = function(enemy){
        if(enemy.y > 550){
            this.gameStatus.over = true;
            this.gameStatus.message = 'Enemy(S) have passed!';
        }

        if((enemy.y < enemy.y + 25 && enemy.y > this.y - 25) &&
        (enemy.x < this.x + 45 && enemy.x > this.x - 45)){
            this.gameStatus.over = true;
            this.gameStatus.message = 'You Died!';
        }

        if(this.gameStatus.over === true){
            clearInterval(animateInterval);
            ctx.fillStyle = this.gameStatus.fillStyle;
            ctx.font = this.gameStatus.font;

            ctx.fillText(this.gameStatus.message, cW*.5 - 80,50);
        }
    }

   }

   let launcher = new Launcher();

   function animate(){
    ctx.clearRect(0,0,cW,cH);
    launcher.render();
    renderEnemies(enemies);
   }

   let animateInterval = setInterval(animate, 6);

   let left_btn = document.getElementById('left_btn');
   let right_btn = document.getElementById('right_btn');
   let fire_btn = document.getElementById('fire_btn');


   //PARA MOVERSE
   document.addEventListener(('keydown'),(e)=>{
    if(e.keyCode === 37){
        launcher.dirrecion = 'left';
        if(launcher.x < cW*.2 - 130){
            launcher.x += 0;
            launcher.dirrecion = '';
        }
    }
   });

   //PARA QUE SE DEJE DE MOVER
   document.addEventListener(('keyup'),(e)=>{
    if(e.keyCode === 37){
        launcher.x += 0;
        launcher.dirrecion = '';
     }
   });

   document.addEventListener(('keydown'),(e)=>{
    if(e.keyCode === 39){
        launcher.dirrecion = 'right';
        if(launcher.x > cW - 110){
            launcher.x -= 0;
            launcher.dirrecion = '';
        }
    }
   });

   document.addEventListener(('keyup'),(e)=>{
    if(e.keyCode === 39){
            launcher.x -= 0;
            launcher.dirrecion = '';
    }
   });

   document.addEventListener(('keydown'),(e)=>{
    if(e.keyCode === 38){
       launcher.dirrecion = 'upArrow';
       if(launcher.y < cH*.2 - 80){
        launcher.y += 0;
        launcher.dirrecion = '';
       }
    }
   });

   document.addEventListener(('keyup'),(e)=>{
    if(e.keyCode === 38){
        launcher.y -= 0;
        launcher.dirrecion = ''; 
    }
   });

   document.addEventListener(('keydown'),(e)=>{
    if(e.keyCode === 40){
      launcher.dirrecion = 'downArrow';
      if(launcher.y >cH - 110){
        launcher.y -= 0;
        launcher.dirrecion = '';
      }
    }
   });

   document.addEventListener(('keyup'),(e)=>{
    if(e.keyCode === 40){
       launcher.y += 0;
       launcher.dirrecion = '';
    }
   });


   document.addEventListener(('keydown'),(e)=>{
    if(e.keyCode === 80){
        location.reload();
    }
   });

   //PARA MOVERSE CON LOS BOTONES

   left_btn.addEventListener(('mousedown'),()=>{
    launcher.dirrecion = 'left';
   });
   
   left_btn.addEventListener(('mouseup'),()=>{
    launcher.dirrecion = '';
   });

   right_btn.addEventListener(('mousedown'),()=>{
    launcher.dirrecion = 'right';
   });
   
   right_btn.addEventListener(('mouseup'),()=>{
    launcher.dirrecion = '';
   });

   //This code below fires bullets (balas)
   fire_btn.addEventListener('mousedown', function(event) {
    launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3, h: 10});
});
// This fires when clicking on space button from keyboard
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
       launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3,h: 10});
    }

    sound.play();
});
   
}



a.addEventListener(('click'),()=>{
    sound.play();
})

window.addEventListener('load', function(event){
    initCanvas();
});