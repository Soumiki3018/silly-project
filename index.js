'use strict';
// const userName = sessionStorage.getItem('userName');
// console.log(userName);

const params = new URLSearchParams(window.location.search);
const userName = params.get('nameInput');

window.addEventListener('scroll', function() {
    let top = this.scrollY;
    let bgs = document.querySelectorAll('.parallax .bg');
    bgs.forEach((bg, index) => {
        switch (index) {
            case 0:
                bg.style.transform = `translateY(${top / 3}px)`; 
                break;
            case 1:
                bg.style.transform = `translateY(${top * 0.3}px)`; 
                break;
            case 2:
                bg.style.transform = `translateY(${top * 0.7}px)`; 
                break;
            case 3:
                bg.style.transform = `translateY(${top * 0.5}px)`; 
                break;
            case 4:
                bg.style.transform = `translateY(${top / 3}px)`;
                break;
        }
    });
});

document.querySelector('.bunnies').addEventListener("mouseover", (event)=>{
    // alert("hi");
    document.getElementById("hearts").classList.remove("hidden");
    document.querySelector('.bunnies').addEventListener("mouseout", (event)=>{
        // alert("hi");
        document.getElementById("hearts").classList.add("hidden");
    });
});

document.addEventListener('DOMContentLoaded', (event)=>{
    document.querySelector('.user-name').textContent = userName.toUpperCase();
    
    setTimeout(function(){
        const h1 = document.querySelector('.parallax h1');
        const h2 = document.querySelector('.parallax h2');
        if(h1 && h2){
            h2.classList.add('glow');
            h1.classList.add('glow');
        }
    }, 2000);
        
});

//play on lopp until clicked on again

document.addEventListener('DOMContentLoaded', function() {
    var song = new Audio('audio/Ghost-Duet.mp3');
    song.loop = true;

    var audioControls = document.getElementsByClassName("audio");
    for (var i = 0; i < audioControls.length; i++) {
        audioControls[i].addEventListener('click', function() {

            document.querySelector("#sound-logo").src = "images/sound.png";
            if (song.paused) {
                song.play();
            } else {
                document.querySelector("#sound-logo").src = "images/mute.png";
                song.pause();
            }
        });
    }
});

function enlarge(element) {
    element.style.width = '450px';
    element.style.height = '450px';
    element.style.borderRadius = '20px';
    element.style.transition = '1s ease';
}


function reset(element) {
    element.style.width = '400px';
    element.style.height = '400px';
    element.style.borderRadius = '0px';
    element.style.transition = '1s ease';
}

// document.querySelectorAll('.animation').forEach(element => {
//     element.addEventListener("mouseover", (
//         enlarge(element);
//         if(element==document.querySelectorAll('.animation')[0]){
//             document.getElementsByClassName('txt_display').textContent='Visit a funny website!';
//         }
//     ));
//     element.addEventListener("mouseout", () => reset(element));
// });

document.querySelectorAll('.animation').forEach(element => {
    element.addEventListener("mouseover", () => {
        enlarge(element);  
        
        if (element === document.querySelectorAll('.animation')[0]) {
            document.getElementsByClassName('txt_display')[0].textContent = 'Visit a funny website!';
        } else if(element === document.querySelectorAll('.animation')[1]){
            document.getElementsByClassName('txt_display')[0].textContent = 'Play a game';
        }
    });

    element.addEventListener("mouseout", () => {
        reset(element);
        document.getElementsByClassName('txt_display')[0].textContent = 'Choose one';

    });
    
});
// console.log(document.querySelectorAll('.animation'));