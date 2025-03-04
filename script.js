const menu=document.querySelector(".menu")
const list=document.querySelector(".list")
const cross=document.querySelector(".cross")
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
menu.addEventListener('click',()=>{
    list.style.display="contents";
    list.style.opacity="0"
    list.style.transition="opacity 0.5s ease"
    setTimeout(()=>{
        list.style.opacity="1";
    },0);
})
cross.addEventListener('click',()=>{
    list.style.display="none";
})
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