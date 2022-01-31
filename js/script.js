
$(document).ready(function(){

    const date = document.getElementById('date'); 
    date.innerHTML = new Date().getFullYear(); 

    const btnHamburger = document.querySelector('#btnHamburger'); 
    const body = document.querySelector('body'); 
    const header = document.querySelector('.header'); 
    const overlay = document.querySelector('.overlay'); 
    const fadeElems = document.querySelectorAll('.has-fade'); 
    const links = document.querySelector('.header__menu');
    const topLink = document.querySelector(".top-link"); 

    //to show back up button once you scroll a certain distance down
    window.addEventListener('scroll', function(){
        const scrollHeight  = window.pageYOffset; 
        console.log(scrollHeight); 
        if (scrollHeight>400){
            console.log("reached 100");  
            topLink.classList.add("show-link"); 
        }
        else{
            topLink.classList.remove("show-link"); 
        }
    });
    
    //menu bar open and fading 
    [btnHamburger, links].forEach(item => {
        item.addEventListener('click', event => {
          
          body.classList.toggle('noscroll');

        if(header.classList.contains('open')){//close ham menu
            header.classList.remove('open'); 
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in'); 
                element.classList.add('fade-out'); 
            });
        }
        else{//open ham menu
            header.classList.add('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-out');  
                element.classList.add('fade-in'); 
            }); 
        }
        }); 
      }); 
   
});

    //preloader
    const preloader = document.querySelector(".preloader"); 

    window.addEventListener("load", function() {
        preloader.classList.add("hide-preloader");
    }); 

    //video switch
    const btn = document.querySelector(".switch-btn");
    const video = document.querySelector(".video-container");

    btn.addEventListener("click", function () {
        if (!btn.classList.contains("slide")) {
            btn.classList.add("slide");
            video.pause();
        } else {
            btn.classList.remove("slide");
            video.play();
        }
    });




