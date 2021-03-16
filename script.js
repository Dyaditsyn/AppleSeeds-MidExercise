// script

function submitForm(){
    document.getElementById('myform').classList.add('form-submitted');
 } 


const images = ["img/baner1.jpg","img/baner2.jpg","img/baner3.jpg"];
let imgIndex = 1;

function changeImage() {
    document.getElementById('img').src = images[imgIndex];
    if (imgIndex == images.length-1) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
}


const titles = ["yellow click&pick;","שטחי מסחר פז סנטר","טיפז"];
let titleIndex = 1;
const element = document.getElementById('title');

function changeTitle() {
    element.innerHTML = titles[titleIndex];
    if (titleIndex == titles.length-1) {
        titleIndex = 0;
    } else {
        titleIndex++;
    }
}

setInterval(function() {

    changeTitle();
    changeImage();
}, 5000);