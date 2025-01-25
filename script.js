const menu=document.querySelector(".menu")
const list=document.querySelector(".list")
const cross=document.querySelector(".cross")

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