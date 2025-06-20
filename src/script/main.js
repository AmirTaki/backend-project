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


/* ==================================================   BOX SLIDER IMAGE  =========================================================== */
const clickLeftSlider =  document.getElementById("clickLeftSlider")
const clickRightSlider = document.getElementById("clickRightSlider")
const containerSliderImg = document.querySelector('.containerSliderImg')
const itembutton = document.querySelectorAll(".itembutton")
const itembuttonclick = document.querySelectorAll(".itembuttonclick")
const containerItemColumnOne  = document.querySelectorAll(".containerItemColumnOne")

// HIDEEN SHOW ICON CLICK LEFT RIGHT SLIDER
const hideShowClickLeftRigth = () => {
    clickLeftSlider.style.display = containerSliderImg.scrollLeft <= 150 ? "none" : "block"
    clickRightSlider.style.display = containerSliderImg.scrollLeft >= containerSliderImg.scrollWidth - 1330   ? "none" : "block"
}
hideShowClickLeftRigth()

// CONTAINER SLIDER IMAGE WHEEL
containerSliderImg.addEventListener("wheel", (e)=>{
    e.preventDefault()
})
// CLICK LEFT SLIDER
clickLeftSlider.addEventListener("click", (e)=> {
    containerSliderImg.style.scrollBehavior = "smooth"
    containerSliderImg.scrollLeft -= 1130
    setTimeout(()=>{
        hideShowClickLeftRigth()
    }, 500)
})
// CLICK RIGHT SLIDER
clickRightSlider.addEventListener("click", (e)=> {

    containerSliderImg.style.scrollBehavior = "smooth"
    containerSliderImg.scrollLeft += 1130
    setTimeout(()=>{
        hideShowClickLeftRigth()
    }, 500)
   
})
// FUNCTION CHANGE BACK GRAND COLOR BUTTON
const changeBackGroundColorButton = (buttons, option = null, color = null) => {
    buttons.forEach(button => {
        button.style.backgroundColor = "rgb(230, 230, 230)"    
    });
    if(option) buttons[0].style.backgroundColor = color
}
// BUTTON CLCIK CONTAINER
for (let i = 0; i < itembutton.length ; i ++){
    itembutton[i].addEventListener("click", e=>{
        containerSliderImg.style.scrollBehavior = "smooth"
        containerSliderImg.scrollLeft = (i * 760 )
        changeBackGroundColorButton(itembutton)
        itembutton[i].style.backgroundColor = "blue"
    })
}
// BUTTON CLICK CONTAINER
for (let i = 0; i < itembuttonclick.length; i++){
    itembuttonclick[i].addEventListener("click", e => {
        containerSliderImg.style.scrollBehavior = "smooth"
        containerSliderImg.scrollLeft =  ( i * 390)
        changeBackGroundColorButton(itembuttonclick)
        itembuttonclick[i].style.backgroundColor = " rgba(252, 5, 5, 0.655)"
       
    })
}
// FUNCTION SCROLL BEHAVIOR CONATINER SLIDER IMAGE
const scrollBehaviorContainerSliderImage = () => {
   containerSliderImg.style.scrollBehavior = "smooth"
   containerSliderImg.scrollLeft = 0  
}

// WINDOW RESIZE EVENT LISTENER
window.addEventListener('resize', (e)=>{
   /* ==================================================  CONTAINER SLIDER IMAGE  =========================================================== */
    hideShowClickLeftRigth() 
    scrollBehaviorContainerSliderImage()
    changeBackGroundColorButton (itembutton, option = "first", color = "blue")
    changeBackGroundColorButton (itembuttonclick, option = 'first', color = " rgba(252, 5, 5, 0.655)" )
  

    
})