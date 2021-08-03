var PLAY=1;
var End=0;
var gameState=1;

var Homemenu,HomemenuImage;
var play,playImage;
var quit,quitImage;
var options,optionsImage;
var highScore,highScoreImage;
var question,questionImage;
var back,backImage;
var settingsBanner,settingsBannerImage;
var rocket1,rocket2,rocket3,rocket4;
var rocket1Image,rocket2Image,rocket3Image,rocket4Image;
var lock2,lock3,lock4;
var lock2Image,lock3Image,lock4Image;
var coin,coinImage;
var gamebg, gamebgImage;
var FortuneX,FortuneXImage;
var pause,pauseImage;
var obstacle;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;
var Meteors;
var Meteor1,Meteor2,Meteor3,Meteor4;
var Meteor1Image,Meteor2Image,Meteor3Image,Meteor4Image;
var obstaclesGroup;
var Huracan,HuracanImage;
var FireBlaze,FireBlazeImage;
var Jaguar,JaguarImage;
var Start,StartImage;
var Resume,ResumeImage;
var Point;
var Points,PointImage;
var point;
var Point2,Point2Image;
var notice,noticeImage;
var right,rightImage;
var pauseBanner,pauseBannerImage;
var restart,restartImage;
var home,homeImage;
var settings,settingsImage;
var sound,soundImage;
var music,musicImage;
var animatedCoin;
var Scene1group;
var Scene2group;


function preload(){

  HomemenuImage=loadImage("Images/HomeMenuBG.png");
  playImage= loadImage("Images/play.png");
  quitImage=loadImage("Images/Quit.png");
  optionsImage=loadImage("Images/Option.png");
  highScoreImage=loadImage("Images/highscore.png");
  questionImage=loadImage("Images/Question.png");
  backImage=loadImage("Images/back.png");
  settingsBannerImage=loadImage("Images/Settings Banner.png");
  rocket1Image=loadImage("Images/rocket1.png");
  rocket2Image=loadImage("Images/rocket2.png");
  rocket3Image=loadImage("Images/rocket3.png");
  rocket4Image=loadImage("Images/rocket4.png");
  lock2Image=loadImage("Images/lock.png");
  lock3Image=loadImage("Images/lock.png");
  lock4Image=loadImage("Images/lock.png");
  coinImage= loadImage("Images/Coin.png ");
  gamebgImage= loadImage("Images/gamebg.jpg");
  FortuneXImage= loadImage("Images/Fortune.png");
  obstacle1= loadImage("Images/Obstacle1.png");
  obstacle2= loadImage("Images/Obstacle2.png");
  obstacle3= loadImage("Images/Obstacle3.png");
  obstacle4= loadImage("Images/Obstacle4.png");
  HuracanImage= loadImage("Images/Huracan.png");
  FireBlazeImage= loadImage("Images/Fireblaze.png");
  JaguarImage= loadImage("Images/Jaguar.png");
  pauseImage= loadImage("Images/pause.png");
  StartImage= loadImage("Images/Start.png");
  ResumeImage= loadImage("Images/Resume.png");
  Meteor1Image= loadImage("Images/Meteor1.png");
  Meteor2Image= loadImage("Images/Meteor2.png");
  Meteor3Image= loadImage("Images/Meteor3.png");
  Meteor4Image= loadImage("Images/Obstacle5.png");
  PointImage= loadImage("Images/Points.png");
  Point2Image= loadImage("Images/Points.png");
  rightImage= loadImage("Images/right.png");
  noticeImage=loadImage("Images/EarnPoints!.png");
  pauseBannerImage= loadImage("Images/PausedBanner.png");
  soundImage=loadImage("Images/Sound.png");
  musicImage=loadImage("Images/music.png");
  restartImage=loadImage("Images/restart.png");
  homeImage=loadImage("Images/Home.png");
  settingsImage=loadImage("Images/SETTINGS.png");
  animatedCoin = loadAnimation("assets/coin1.png","assets/coin2.png","assets/coin3.png"
  ,"assets/coin4.png","assets/coin5.png","assets/coin6.png","assets/coin7.png");
 
  


}
function setup(){
  var canvas = createCanvas(1050,625);

  Homemenu=createSprite(500,300);
  Homemenu.addImage("HomeMenuBG.png",HomemenuImage);
  Homemenu.scale=0.53;
  Homemenu.visible=true;
  


  settingsBanner=createSprite(500,300);
  settingsBanner.addImage("Settings Banner.png",settingsBannerImage);
  settingsBanner.scale=0.45;
  settingsBanner.visible=false;

  notice=createSprite(500,300);
  notice.addImage("EarnPoints!.png",noticeImage);
  notice.scale=0.53;
  notice.visible=false;

  pauseBanner=createSprite(500,300);
  pauseBanner.addImage("PausedBanner.png", pauseBannerImage);
  pauseBanner.scale=0.53;
  pauseBanner.visible=false;

  gamebg=createSprite(500,300);
  gamebg.addImage("gamebg.jpg",gamebgImage);
  gamebg.scale=0.75;
  gamebg.velocityY=2;
  gamebg.visible= false;

  quit= createSprite(859,500,50,50);
  quit.addImage("Quit.png",quitImage);
  quit.scale=0.30;
  quit.visible= false;

  Resume= createSprite(520,430,50,50);
  Resume.addImage("Resume.png",ResumeImage);
  Resume.scale=0.55;
  Resume.visible= false;

  Start= createSprite(900,50,50,50);
  Start.addImage("Start.png",StartImage);
  Start.scale=0.42;
  Start.visible= false;

  right= createSprite(160,482);
  right.addImage("right.png",rightImage);
  right.scale=0.50;
  right.visible= false;

  restart= createSprite(380,300);
  restart.addImage("restart.png",restartImage);
  restart.scale=0.50;
  restart.visible= false;

  home= createSprite(520,300);
  home.addImage("Home.png",homeImage);  
  home.scale=0.50;
  home.visible= false;

  sound= createSprite(620,275);
  sound.addImage("Sound.png", soundImage);  
  sound.scale=0.45;
  sound.visible= false;

  music= createSprite(620,370);
  music.addImage("music.png",musicImage);
  music.scale=0.45;
  music.visible= false;

  settings= createSprite(650,298);
  settings.addImage("SETTTINGS.png",settingsImage);
  settings.scale=0.50;
  settings.visible= false;

  coin= createSprite(80,50,50,50);
  coin.addAnimation("running", animatedCoin);
  coin.addImage("Coin.png",coinImage);
  coin.scale=0.49;
  
  FortuneX= createSprite(550,500);
  FortuneX.addImage("Fortune.png",FortuneXImage);
  FortuneX.scale=0.12;
  FortuneX.visible= false;

  Huracan= createSprite(550,500);
  Huracan.addImage("Huracan.png",HuracanImage);
  Huracan.scale=0.30;
  Huracan.visible= false;

  FireBlaze= createSprite(550,500);
  FireBlaze.addImage("FireBlaze.png",FireBlazeImage);
  FireBlaze.scale=0.18;
  FireBlaze.visible= false;

  Jaguar= createSprite(550,500);
  Jaguar.addImage(" Jaguar.png", JaguarImage);
  Jaguar.scale=0.30;
  Jaguar.visible= false;

  Scene1group= new Group();
  Scene2group= new Group();
  obstaclesGroup = new Group();
  MeteorsGroup= new Group();
  PointsGroup= new Group();
}

function draw() {
    background(0);
   
    

    if(gameState===PLAY){
    
     if(gamebg.y > 400 ){
       gamebg.y = height/2;
     }
      
      if(keyDown("left")){
        FortuneX.x =  FortuneX.x-5;
        
      }
      if(keyDown("right")){
        FortuneX.x =  FortuneX.x+5;
        
      }

      if(keyDown("left")){
        Huracan.x =  Huracan.x-5;
        
      }
      if(keyDown("right")){
        Huracan.x =  Huracan.x+5;
        
      }

      if(keyDown("left")){
        FireBlaze.x =  FireBlaze.x-5;
        
      }
      if(keyDown("right")){
        FireBlaze.x =  FireBlaze.x+5;
        
      }

      if(keyDown("left")){
        Jaguar.x =  Jaguar.x-5;
        
      }
      if(keyDown("right")){
        Jaguar.x =  Jaguar.x+5;
        
      }
      
    }

    if(mousePressedOver(Resume)){

      coin.visible=true;
      Huracan.visible= false;
      Homemenu.visible = false;
      quit.visible = false;
      gamebg.visible= true;
      FortuneX.visible=true;
      pauseBanner.visible=false;
      restart.visible=false;
      home.visible=false;
      settings.visible=false;
      Resume.visible=false;
      
      Start.visible= false;
    }

    if(mousePressedOver(home)){

      Homemenu.visible= true;
      coin.visible=true;
      quit.visible = false;
      gamebg.visible= false;
      FortuneX.visible=false;
      Huracan.visible= false;
      Start.visible= false;
      pauseBanner.visible=false;
      restart.visible=false;
      home.visible=false;
      settings.visible=false;
      Resume.visible=false;

    }

    if(mousePressedOver(settings)){

      settingsBanner.visible=true;
      sound.visible=true;
      music.visible=true;

    }

    if(mousePressedOver(settings)){

      pauseBanner.visible=false;
      restart.visible=false;
      home.visible=false;
      settings.visible=false;
      Resume.visible=false;
      Homemenu.visible= true;
      pauseBanner.visible=false;
      settingsBanner.visible=true;
      sound.visible=true;
      music.visible=true;
    }

    if(mousePressedOver(quit)) {
    
      Homemenu.visible = true;
  
    }
    
    
    Play();
    Question();
    Options();
    HighScore();
    Obstacles();
    SpawnMeteors();
    Scene1();
    right.display();
    Homemenu.display();
    quit.display();
    coin.display();
    gamebg.display();
    FortuneX.display();
    Huracan.display();
    FireBlaze.display();
    Jaguar.display();
    Start.display();
    Resume.display();
    notice.display();
    pauseBanner.display();
    restart.display();
    home.display();
    settings.display();
    settingsBanner.display();
    sound.display();
    music.display();
    
  drawSprites();
}

function Scene1(){

  Play();
  Question();
  Options();
  HighScore();



}

function Scene2(){

  Question();
  Options();
  HighScore();
  Rockets();
  Back();


}



function Play (){

  play= createSprite(857,400,10,10);
  play.addImage("play.png",playImage);
  play.scale=0.30;
  Scene1group.add(play);

  if(mousePressedOver(play)) {
    
  
    Options();
    Question();
    Rockets();
    HighScore();
    Back();
    Homemenu.visible=true;
    quit.visible = false;
    gamebg.visible= false;
    FortuneX.visible= false;
    Start.visible= false;
  }
  
}

function  Question(){

  question= createSprite(800,50,50,50);
  question.addImage("Question.png",questionImage);
  question.scale=0.43;
  Scene1group.add(question);
  Scene2group.add(question);

}

function HighScore(){

  highScore= createSprite(900,50,50,50);
  highScore.addImage("highscore.png",highScoreImage);
  highScore.scale=0.30;
  Scene1group.add(highScore);
  Scene2group.add(highScore);

}



function Options(){

  options= createSprite(1000,50,50,50);
  options.addImage("Option.png",optionsImage);
  options.scale=0.43;
  Scene1group.add(options);
  Scene2group.add(options);

  if(mousePressedOver(options)){

    settingsBanner.visible=true;
    sound.visible=true;
    music.visible=true;

  }
}


function Rockets(){

  rocket1= createSprite(300,370);
  rocket1.addImage("rocket1.png",rocket1Image);
  rocket1.scale=0.20;
  Scene2group.add(rocket1);

  rocket2= createSprite(500,370);
  rocket2.addImage("rocket2.png",rocket2Image);
  rocket2.scale=0.20;
  Scene2group.add(rocket2);


  rocket3= createSprite(700,370);
  rocket3.addImage("rocket3.png",rocket3Image);
  rocket3.scale=0.23;
  Scene2group.add(rocket3);


  rocket4= createSprite(900,370);
  rocket4.addImage("rocket4.png",rocket4Image);
  rocket4.scale=0.20;
  Scene2group.add(rocket4);


  lock2= createSprite(500,370);
  lock2.addImage("lock.png",lock2Image);
  lock2.scale=0.28;
  Scene2group.add(lock2);


  lock3= createSprite(700,370);
  lock3.addImage("lock.png",lock3Image);
  lock3.scale=0.28;
  Scene2group.add(lock3);

  lock4= createSprite(900,370);
  lock4.addImage("lock.png",lock4Image);
  lock4.scale=0.28;
  Scene2group.add(lock4);

  if(mousePressedOver(rocket1)) {     
    gameState=PLAY;

    Huracan.visible= false;
    Homemenu.visible = false;
    quit.visible = false;
    gamebg.visible= true;
    FortuneX.visible=true;
    Start.visible= false;
  }

  if(mousePressedOver(rocket2)) {
    
    gameState=PLAY;
    Huracan.visible= true;
    obstaclesGroup.visible= false; 
    Homemenu.visible = false;
    quit.visible = false;
    gamebg.visible= true;
    FortuneX.visible=false;
    Start.visible= false;
  }

  if(mousePressedOver(rocket3)) {
    
    gameState=PLAY;
    Huracan.visible= false;
    Homemenu.visible = false;
    quit.visible = false;
    gamebg.visible= true;
    FortuneX.visible=false;
    FireBlaze.visible= true;
    Start.visible= false;
    
  }

  if(mousePressedOver(rocket4)) {
    
    gameState=PLAY;
    Huracan.visible= false;
    Homemenu.visible = false;
    quit.visible = false;
    gamebg.visible= true;
    FortuneX.visible=false;
    FireBlaze.visible= false;
    Jaguar.visible= true;
    Start.visible= false;
    
  }

  if(mousePressedOver(lock2)){

    notice.visible=true;
    right.visible=true;
    coin.visible=false;
    obstacle.visible= false;
    Huracan.visible= false;
    obstaclesGroup.visible= false; 
    Homemenu.visible = false;
    quit.visible = false;
    back.visible = false;
    gamebg.visible= false;
    FortuneX.visible=false;
    Start.visible= false;
  
  } 
}

function Pause(){

  pause= createSprite(900,50,50,50);  
  pause.addImage("pause.png",pauseImage);
  pause.scale=0.42;

  if(mousePressedOver(pause)) {

    pauseBanner.visible=true;
    restart.visible=true;
    home.visible=true;
    settings.visible=true;
    Resume.visible=true;
    right.visible=false;
    coin.visible=false;
    obstacle.visible= false;
    Huracan.visible= false;
    obstaclesGroup.visible= false; 
    Homemenu.visible = false;
    quit.visible = false;
    back.visible = false;
    gamebg.visible= false;
    FortuneX.visible=false;
    Start.visible= false;

  }
}

function Back(){


  back= createSprite(150,525);
  back.addImage("back.png",backImage);
  back.scale=0.43;
  Scene2group.add(back);

      
  if(mousePressedOver(back)) {
        
    Scene1();
    back.visible = false;
    rocket1.visible = false;
    rocket1.visible = false;
    rocket2.visible = false;
    rocket3.visible = false;
    rocket4.visible = false;
    lock2.visible= false;
    lock3.visible= false;
    lock4.visible= false;
  }



  
}

function SpawnPoints(){

  if (World.frameCount % 130 ===0){
    position = Math.round(random(1050,500));
    Point= createSprite(random(200,600));
    Point.scale= 0.1;
    Point.velocityY = 4;
    Point.visible=false;
    PointsGroup.add(Point);

    x = Math.round(random(1,4));
    if(x == 1){
      Point.addImage(PointImage);
    } else if (x==2){
      Point.addImage(PointImage);
    } else if (x == 3){
      Point.addImage(PointImage);  
    }else if (x== 4){
      Point.addImage(PointImage);
   }
 }
}

function SpawnCoins(){

if (World.frameCount % 140 ===0){
  position = Math.round(random(1050,500));
  point= createSprite(random(150,400));
  point.scale= 0.1;
  point.velocityY = 4;
  point.visible= false;
  PointsGroup.add(point);

  x = Math.round(random(1,4));
  if(x == 1){
    point.addImage(PointImage);
  } else if (x==2){
    point.addImage(PointImage);
  } else if (x == 3){
    point.addImage(PointImage);  
  }else if (x== 4){
    point.addImage(PointImage);
   }
 }
}

function SpawnMeteors(){

  if (World.frameCount % 150 ===0){
    position = Math.round(random(1050,700));
    Meteors= createSprite(random(500,400));
    Meteors.scale= 0.2;
    Meteors.velocityY = 6;
    Meteors.visible=false;
   MeteorsGroup.add(Meteors);
    
    x = Math.round(random(8,11));
    if(x == 8){
      Meteors.addImage(Meteor1Image);
    } else if (x==9){
      Meteors.addImage(Meteor2Image);
    } else if (x == 10){
      Meteors.addImage(Meteor3Image);  
    }else if (x== 11){
      Meteors.addImage(Meteor4Image);
    }
  }
}

function Obstacles(){

  if (World.frameCount % 60 ===0){
    position = Math.round(random(1050,625),0, 10, 10);
    obstacle = createSprite(random(100,500),0, 10, 10);
    obstacle.scale= 0.5;
    obstacle.velocityY = 5;
    obstacle.lifetime = 800;
    obstacle.visible=false;
    obstaclesGroup.add(obstacle);
    
    x = Math.round(random(8,11));
    if(x == 8){
      obstacle.addImage(obstacle1);
    } else if (x==9){
      obstacle.addImage(obstacle2);
    } else if (x == 10){
      obstacle.addImage(obstacle3);
    }else if (x== 11){
      obstacle.addImage(obstacle4);
    }
  } 
}