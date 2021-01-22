// let vh = window.innerHeight; //  Hauteur du viewport
// let nav = document.querySelector("nav");
// let hNav=nav.offsetHeight; //  Hauteur de la navigation
// let scroll= vh-hNav; 
// console.log(scroll);

// window.addEventListener('scroll', function(){
//     let alreadyScrolled= window.pageYOffset; // Position (en cours) du scrol
//     if (alreadyScrolled > scroll){
//         nav.classList.add("fixed");
       
//     } else{
//         nav.classList.remove("fixed");
//     }
// })

let vh = window.innerHeight; //  Hauteur du viewport
let nav = document.querySelector("nav");
let stop= vh/2;
let lastScroll = 0;

window.addEventListener('scroll', function(){
   
        let alreadyScrolled= window.pageYOffset; // Position (en cours) du scrol
        console.log(alreadyScrolled);
        
        if (alreadyScrolled > stop)  {
            nav.classList.add("bye");  
           
        }else{
           nav.classList.remove("bye");
        }

        if (alreadyScrolled < lastScroll){
                nav.classList.remove("bye");
                
        }
            lastScroll= alreadyScrolled; // stocker la derniere valeur du scroll
            console.log(lastScroll); 
    })