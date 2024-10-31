let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
var navList = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navList.forEach(Liks => {
                Link.classList.remove('active');
                document.querySelector('header nav a [herf*=' + id + ' ]').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


var modal = document.getElementById("myModal");
var images = document.getElementsByClassName("certificates-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

// var videoBtns = document.querySelectorAll(".video-btn");
// var popups = document.querySelectorAll(".video-popup");
// var closeBtns = document.querySelectorAll(".close-vid");

// videoBtns.forEach(function(btn) {
//     btn.addEventListener('click', function(event) {
//         event.preventDefault();
//         var videoClass = btn.getAttribute('data-video');
//         var popup = document.querySelector('.video-popup[data-popup="' + videoClass + '"]');
//         var video = popup.querySelector('video');

//         popup.style.display = "flex";
//         video.play();
//     });
// });

// closeBtns.forEach(function(closeBtn) {
//     closeBtn.addEventListener('click', function() {
//         var popup = closeBtn.closest('.video-popup');
//         var video = popup.querySelector('video');

//         popup.style.display = "none";
//         video.pause();
//         video.currentTime = 0; 
//     });
// });

// window.onclick = function(event) {
//     popups.forEach(function(popup) {
//         if (event.target === popup) {
//             var video = popup.querySelector('video');
//             popup.style.display = "none";
//             video.pause();
//             video.currentTime = 0;
//         }
//     });
// };

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots"); 
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});


const serviceItems = document.querySelector(".articale-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        const item =event.target.parentElement;
        const h3 = item.querySelector("h3").innerHTML;
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;
        popupBox();
    }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
    if(event.target == popup){
        popupBox();
    }
})

function popupBox(){
    popup.classList.toggle("open");
}




let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.articales .row .item')];
    let maxItems = boxes.length;

    for (var i = currentItem; i < currentItem + 3 && i < maxItems; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem += 3;

    if (currentItem >= maxItems) {
        loadMoreBtn.style.display = 'none';
    }
}







var videoBtns = document.querySelectorAll(".video-btn");
var popups = document.querySelectorAll(".video-popup");
var closeBtns = document.querySelectorAll(".close-vid");

videoBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        var videoClass = btn.getAttribute('data-video');
        var popup = document.querySelector('.video-popup[data-popup="' + videoClass + '"]');
        
        popup.style.display = "flex";
    });
});

closeBtns.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        var popup = closeBtn.closest('.video-popup');
        popup.style.display = "none";
    });
});

window.onclick = function(event) {
    popups.forEach(function(popup) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
};


