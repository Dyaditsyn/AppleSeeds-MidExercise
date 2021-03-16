// script
function submitForm(){
    document.getElementById('myform').classList.add('form-submitted');
 } 

const images = ["img/baner1.jpg","img/baner2.jpg","img/baner3.jpg"];
let imgIndex = 0;

function changeImage() {
    document.getElementById("img").src = images[imgIndex];
    if (imgIndex == images.length-1) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }

    setInterval("changeImage()", 5000);
}


// const titles = ["yellow click&pick;","שטחי מסחר פז סנטר","טיפז"];
// let titleIndex = 0;
// const title = document.getElementById("title");

// function changeTitle() {
//     title.innerText = titles[titleIndex];
//     if (titleIndex == titles.length-1) {
//         titleIndex = 0;
//     } else {
//         titleIndex++;
//     }

//     setInterval("changeTitle()", 5000);
// }

