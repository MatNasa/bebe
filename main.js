var status = "" ;
var objects = [] ;
var img = "" ;
var sound = "music.mp3" ;
var bebe = "" ;

 function setup () {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector( 'cocossd', modelLoaded );
    document.getElementById("status").innerHTML = "status detectando objetos" ;
    video = createCapture(VIDEO);
    video.size( 380, 380 );
    video.hide();
   }

function modelLoaded () {
   console.log("modelo cargado");
   status = true ;
   objectDetector.detect( video, gotResult );
}

function gotResult ( error, results ) {
   if (error) {
      console.error( error );
   }

   else{
      console.log( results );
      objects = results ;
   }
}

 function draw () {
   image( video, 0, 0, 380, 380 );
   r = random(255);
   g = random(255);
   b = random(255);
   if (status != "" ) {
      for (index = 0 ; index < objects.length; index++) {
         document.getElementById("status").innerHTML = "status : objeto detectado";
         fill( r, g, b ) ;
         percent = floor( objects[index].confidence*100 );
         text( objects[index].label +" "+ percent + "%", objects[index].x + 15 , objects[index].y + 15  );
         noFill();
         stroke( r, g, b );
         rect( objects[index].x, objects[index].y, objects[index].width, objects[index].height );
         console.log( index );
         bebe = objects ;
         if (bebe = "person") {
            document.getElementById("bebe").innerHTML = " bebe identificado " ;
         }
         else {
         sound.play()
         document.getElementById("bebe").innerHTML = " no hay bebe " ;
      }
   }
}
 }