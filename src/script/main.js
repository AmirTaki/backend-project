/* ==================================================  CLASSIFIEER CONTAINER : GRID IMAGE  =========================================================== */
let iconLeftScrollImg = document.querySelector(".iconLeftScrollImg")
let iconRigthtScrollImg = document.querySelector(".iconRigthtScrollImg")
let containerScroll = document.querySelector(".containerScroll")

// CONTAINER SCROLL IMAGE WHELL
containerScroll.addEventListener("wheel",(e)=>{
    if(window.innerWidth >=  750){
        e.preventDefault()
        containerScroll.scrollLeft += e.deltaY ;
    }
  
})
// CONTAINER SCROLL IMAGE CLICK LEFT
iconLeftScrollImg.addEventListener("click",(e)=>{
    containerScroll.style.scrollBehavior = "smooth";
    containerScroll.scrollLeft -= 600
})
// CONTAINER SCROLL IMAGE CLICK RIGHT
iconRigthtScrollImg.addEventListener("click",(e)=>{
    containerScroll.style.scrollBehavior = "smooth";
    containerScroll.scrollLeft += 600
})