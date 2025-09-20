
const list=document.querySelector(".list")
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
 const skillborder=document.querySelector(".skillborder");
const eduborder=document.querySelector(".eduborder");
const maincontainer=document.querySelector(".maincontainer");
const landingpage=document.querySelector(".landing-page");
const uparrow=document.querySelector(".scrolltotop");
window.addEventListener("DOMContentLoaded", () => {
    const uparrow = document.querySelector(".scrolltotop");
    gsap.registerPlugin(ScrollToPlugin);

    window.addEventListener("scroll", () => {
        const landingpage = document.querySelector(".landing-page");
        if(window.scrollY > landingpage.offsetHeight - 50){
            uparrow.style.display = "block";
        } else {
            uparrow.style.display = "none";
        }
    });

    uparrow.addEventListener("click", () => {
        gsap.to(window, { scrollTo:{y:0}, duration: 1 });
    });
});

// function updatemenu(){
// const list=document.querySelector(".list");
// const cross=document.querySelector(".cross");
// list.classList.toggle("active");
// cross.classList.toggle("active");

// }

function updatemenu() {
    const list = document.querySelector(".list");
    const cross = document.querySelector(".cross");
    const hamburger = document.querySelector(".hamburgerimg");

    if (!list.classList.contains("active")) {
        // Show menu with animation
        list.classList.add("active");
        cross.classList.add("active");
        hamburger.classList.add("hidden");
        cross.style.position="fixed";

        gsap.to(list, { duration: 0.5, x: 0, opacity: 1 });
        gsap.to(cross, { duration: 0.5, opacity: 1, rotation: 360 });
        gsap.to(hamburger, { duration: 0.3, opacity: 0 });
    } else {
        // Hide menu with animation
        gsap.to(list, { duration: 0.5, x: 50, opacity: 0, onComplete: () => list.classList.remove("active") });
        gsap.to(cross, { duration: 0.5, opacity: 0, rotation: 0, onComplete: () => cross.classList.remove("active") });
        gsap.to(hamburger, { duration: 0.3, opacity: 1, onComplete: () => hamburger.classList.remove("hidden") });
    }
}

let skills=true;
function updatebutton(){
    if(skills==true){
       skillborder.style.borderColor="#08D3FF"
        skill.style.color="#08D3FF"
        edu.style.color="white"
        eduborder.style.borderColor="white"
        skills=false;
      animateText(uiuxHeading, defaultuiuxheading);
        animateText(uiuxDescription, defaultuiuxdescription);
        animateText(webHeading, defaultwebheading);
        animateText(webDescription, defaultwebdescription);
    }else{
        skillborder.style.borderColor="#08D3FF"
        edu.style.color="#08D3FF"
        eduborder.style.borderColor="#08D3FF"
        skill.style.color="white"
        skillborder.style.borderColor="white"
        skills=true;
         animateText(uiuxHeading, "+2");
        animateText(uiuxDescription, "Oxford college butwal,2022 passout");
        animateText(webHeading, "Bachelor's");
        animateText(webDescription, "Bim, Oxford college, Currently running");
    }
}
updatebutton();
skill.addEventListener('click',()=>{
    skills=true;
    updatebutton();
})
edu.addEventListener('click',()=>{
    skills=false;
    updatebutton();
});
// gsap for changing content in about section
function animateText(element, newText) {
    gsap.to(element, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
            element.textContent = newText;
            gsap.fromTo(element, 
                { opacity: 0, y: 10 }, 
                { opacity: 1, y: 0, duration: 0.3 }
            );
        }
    });
}

// form validation
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
