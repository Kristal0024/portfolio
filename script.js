// const menu=document.querySelector(".menu")
const list=document.querySelector(".list")
// const cross=document.querySelector(".cross")
const skill=document.querySelector(".skill-btn")
const edu=document.querySelector(".edu-btn")
const uiuxHeading=document.querySelector(".uiux h4")
const uiuxDescription=document.querySelector(".uiux p")
const defaultuiuxheading=uiuxHeading.textContent;
const defaultuiuxdescription=uiuxDescription.textContent;
const webHeading=document.querySelector(".web-dev h4")
const webDescription=document.querySelector(".web-dev p")
const defaultwebheading=webHeading.textContent;
const defaultwebdescription=webDescription.textContent;

let skills=true;
 skill.style.color="#08D3FF"
// if(menu){
//     menu.addEventListener('click',()=>{
//     list.style.display="contents";
//     list.style.opacity="0"
//     list.style.transition="opacity 0.5s ease"
//     setTimeout(()=>{
//         list.style.opacity="1";
//     },0);
// })
// }
// cross.addEventListener('click',()=>{
//     list.style.display="none";
// })
function updatebutton(){
    if(skills==true){
        skill.style.color="#08D3FF"
        edu.style.color="white"
        skills=false;
        uiuxHeading.textContent=defaultuiuxheading;
        uiuxDescription.textContent=defaultuiuxdescription;
        webHeading.textContent=defaultwebheading;
        webDescription.textContent=defaultwebdescription;

    }else{
        edu.style.color="#08D3FF"
        skill.style.color="white"
        skills=true;
    }
}
skill.addEventListener('click',()=>{
    skills=true;
    updatebutton();
})
edu.addEventListener('click',()=>{
    skills=false;
    updatebutton();
    uiuxHeading.textContent="+2"
    uiuxDescription.textContent="Oxford college butwal,2022 passout"
    webHeading.textContent="Bachelor's"
    webDescription.textContent="Bim, Oxford college, Currently running"
});
document.querySelector(".form").addEventListener("submit",function(event){
    console.log("form submited");
    let name=document.querySelector(".name").value.trim();
    let email=document.querySelector(".mail").value.trim();
    let message=document.querySelector(".message").value.trim();
    console.log("Email entered:", email); 
    let emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("Regex result:", emailpattern.test(email));
    if(name===""){
        alert("please enter your name");
        event.preventDefault();
        return;
    }
    if(!emailpattern.test(email)){
        alert("please enter a valid email");
        event.preventDefault();
        return;
    }
    if(message===""){
        alert("message field cannot be empty");
        event.preventDefault();
        return;
    }
});

//Gsap
var tl=gsap.timeline();

tl.from(".list a",{
    opacity:0,
    duration:1,
    stagger:0.3,
    delay:0.5
})
let locoScroll
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();
// @keyframes appear{
//     from{
//         opacity: 0;
//         scale: 0.5;
//     }
//     to{
//         opacity: 1;
//         scale: 1;
//     }
// }
// .service,.about,.contact,.landing-page{
//     animation: appear linear;
//     animation-timeline: view();
//     animation-range: entry 0 cover 50%;
// }
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute("href"));
        if(target){
            locoScroll.scrollTo(target);
        }
    })
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
gsap.to("#landing-page",{
    opacity:0,
    scale:0.5,
    duration:2,
    scrollTrigger:{
        trigger:"#service",
        scroller:"#main",
        start:"top 75%",
        end:"top 20%",
        scrub:1
    }
})
gsap.to("#service",{
    opacity:0,
    scale:0.5,
    duration:2,
    scrollTrigger:{
        trigger:"#about",
        scroller:"#main",
        start:"top 75%",
        end:"top 20%",
        scrub:1
    }
})
gsap.to("#about",{
    opacity:0,
    scale:0.5,
    duration:2,
    scrollTrigger:{
        trigger:"#contact",
        scroller:"#main",
        start:"top 75%",
        end:"top 20%",
        scrub:1
    }
})
function splittedtext(){
    let h1=document.querySelector(".nav h1");
    var h1text=h1.textContent;
let text=h1text.split("");
let content="";
text.forEach(function(elem){
    content+=`<span>${elem}</span>`;
})
h1.innerHTML=content
}

splittedtext();
gsap.from("#text span",{
    y:10,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.15
})
function anothersplittedtext(){
    let h3=document.querySelector(".colorfont")
    let h3text=h3.textContent;
    let h3split=h3text.split("")
    let content=""
    h3split.forEach(function(elem){
        content+=`<span>${elem}<span>`
    })
    h3.innerHTML=content
}
anothersplittedtext();
gsap.from(".colorfont span",{
    opacity:0,
    duration:0.2,
    delay:2.5,
    stagger:0.15,
})
let glow=document.querySelector(".glow")
glow.addEventListener("mouseenter",function(){
    gsap.to(".glow",{
        scale:1.05,
        duration:0.5,
        delay:0.2
    })
       gsap.to(".glow img",{
        boxShadow: "0 0 10px 10px rgba(137, 137, 137, 0.5)",
        duration:0.5
    })
})
glow.addEventListener("mouseleave",function(){
    gsap.to(".glow",{
        scale:1,
        duration:0.5,
    })
    gsap.to(".glow img",{
        boxShadow: "0 0 5px 5px rgba(137, 137, 137, 0.5)",
        duration:0.5
    })
})
function addHoverEffect(element){
element.addEventListener("mouseenter",function(){
    console.log("mouse entered")
    gsap.to(element,{
    scale:1.05,
    duration:0.5,
    ease:"power2.out"
})
})
element.addEventListener("mouseleave",function(){
    gsap.to(element,{
        scale:1,
        duration:0.5,
        ease:"power2.out"
    })
})
}
let download=document.querySelector(".download")
addHoverEffect(download);

