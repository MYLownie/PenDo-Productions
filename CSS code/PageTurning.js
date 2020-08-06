var img = document.getElementById('id1');
var newImg = new Image;
newImg.onload = function(){
    img.src= this.src;

}
newImg.src = "https://raw.githubusercontent.com/MYLownie/PenDo-Productions/master/images/Sample%20Page%20Crop.png" ;