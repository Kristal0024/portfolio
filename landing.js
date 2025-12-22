const hamburger=document.querySelector(".menu");
const list=document.querySelector(".nav ul");
const facebook=document.getElementById("fbimage");
const insta=document.getElementById("insta");
const youtube=document.getElementById("youtube");
const twitter=document.getElementById("twitter");

hamburger.addEventListener("click",()=>{
    if(list.style.display==="none"){
        list.style.display="block";
    }else{
        list.style.display="none";
    }
});
facebook.addEventListener("click",()=>{
    window.open("https://www.facebook.com/wiped.person.3");
});
insta.addEventListener("click",()=>{
    alert("didn't have instagram account");
});
youtube.addEventListener("click",()=>{
    alert("didn't have youtube");
});
twitter.addEventListener("click",()=>{
    alert("didn't have twitter");
})
