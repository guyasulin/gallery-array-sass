
var all_photo = document.getElementById("all_photo");

imageArr = [];

for (var i = 1; i < 17; i++){

    imageArr.push("image/pic"+i+".jpg");
}

for (var i = 0; i < imageArr .length; i++){
    var bord = document.createElement("img");
    bord.src = imageArr[i]; //0,1,2 ...
    bord.dataset.index = i;
    bord.className = "bord col-xl-3 col-sm-6";
    all_photo.appendChild (bord);

   bord.addEventListener('click',function(){
    document.querySelector('.gallery--model-img').src = this.src;
    document.querySelector('.gallery--model-img').dataset.index = this.dataset.index;
    console.log("myImage =>" , this);
    toggleModal(null);
   });
}

document.querySelector('.shadowing--model').addEventListener('click',
function(htmlElemntObj){
    toggleModal(htmlElemntObj);
});

function toggleModal(e){
 console.log(e);
 if( e !== null){
     console.log(e.target.className);
   if(e.target.className !== "but_rigth" && e.target.className !== "but_left"){
    console.log(document.querySelector('.shadowing--model').classList.contains("hide"));
    if(!document.querySelector('.shadowing--model').classList.contains("hide")){
        document.querySelector('.shadowing--model').classList.toggle('hide');
    }
  }    
 }
 else{
    document.querySelector('.shadowing--model').classList.toggle('hide');
 }
}

//Create buttons and icons

var shadowingModel = document.getElementById("shadowing--model hide");

function initGalleryButtons(){
    var but_rigth = document.createElement("img");
    var but_left = document.createElement("img");
    var close_cursor = document.createElement("img");

    but_rigth.src = "image/play-button.png";
    but_rigth.className = "but_rigth";

    but_left.src = "image/play-button (1).png";
    but_left.className = "but_left";

    close_cursor.src = "image/close-button.png";
    close_cursor.className = "close_cursor";

    shadowingModel.appendChild (but_rigth);
    shadowingModel.appendChild (but_left);
    shadowingModel.appendChild (close_cursor);

    initGalleryButtonsEvents(but_rigth, but_left);
}

function initGalleryButtonsEvents(but_rigth, but_left){
   but_rigth.addEventListener('click',function(event){
    //   if( but_left.src === imageArr[i]){
    //       console.log(rrr);
    //   }  
      document.querySelector('.gallery--model-img').dataset.index;
      var currentImageIndex = document.querySelector('.gallery--model-img').dataset.index;
      var nextImageIndex = parseInt(currentImageIndex) + 1;

      console.log(nextImageIndex)
       document.querySelector('.gallery--model-img').src = imageArr[nextImageIndex];
       document.querySelector('.gallery--model-img').dataset.index = nextImageIndex;
    });

but_left.addEventListener('click',function(event){

    document.querySelector('.gallery--model-img').dataset.index;
    var currentImageIndex = document.querySelector('.gallery--model-img').dataset.index;
    var nextImageIndex = parseInt(currentImageIndex) + 1;

    console.log(nextImageIndex)
     document.querySelector('.gallery--model-img').src = imageArr[nextImageIndex];
     document.querySelector('.gallery--model-img').dataset.index = nextImageIndex;

});        
}

 function init(){
    initGalleryButtons();
}   

init();