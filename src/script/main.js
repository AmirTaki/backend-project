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
const clickLeftSlider  = document.getElementById("clickLeftSlider")
const clickRightSlider  = document.getElementById("clickRightSlider")
const containerSliderImg = document.querySelector('.containerSliderImg')
const buttonClickOne = document.querySelectorAll(".itemButtonClickColumnOne")
const buttonClickTwo = document.querySelectorAll(".itemButtonClickColumnTwo")

containerSliderImg.addEventListener("wheel",(e)=>{
    // e.preventDefault()
})

const viewHideClickLeftRightSlider = () => {
    setTimeout(()=>{
        clickLeftSlider.style.display  = containerSliderImg.scrollLeft < 800 / 2 ? "none" : "block"
        clickRightSlider.style.display = containerSliderImg.scrollLeft >= Math.round(containerSliderImg.scrollWidth) - window.innerWidth  ? "none" : "block"
    }, 1000)
}
viewHideClickLeftRightSlider()

const selectSizeContainerSliderImg = () => {
if(window.innerWidth > 1200){
    return 900
}
else if(window.innerWidth <= 1200 && window.innerWidth > 500){
    return 700
}
else if (window.innerWidth <= 500)
    return 300
}

const changeBackGroundColorButton = (list, color, bg = null) => {
    list.forEach((item)=>{
        item.style.backgroundColor = color
    })
    if(bg){list[0].style.backgroundColor = bg}
}
buttonClickOne.forEach((button, index)=>{
    button.addEventListener("click", (e)=>{
        changeBackGroundColorButton(buttonClickOne, "rgb(198, 195, 195)")
        containerSliderImg.style.scrollBehavior = "smooth"
        containerSliderImg.scrollLeft = index * selectSizeContainerSliderImg()
        button.style.backgroundColor = "blue"
    })
})
buttonClickTwo.forEach((button, index)=>{
    button.addEventListener("click", (e)=>{
        changeBackGroundColorButton(buttonClickTwo, "rgb(198, 195, 195)")
        containerSliderImg.style.scrollBehavior = "smooth"
        containerSliderImg.scrollLeft = index * selectSizeContainerSliderImg()
        button.style.backgroundColor = "red"
    })
})
clickLeftSlider.addEventListener("click",(e)=> {
containerSliderImg.style.scrollBehavior = "smooth"
containerSliderImg.scrollLeft -= selectSizeContainerSliderImg()
viewHideClickLeftRightSlider()
})
clickRightSlider.addEventListener("click",(e)=> {
containerSliderImg.style.scrollBehavior = "smooth"
containerSliderImg.scrollLeft += selectSizeContainerSliderImg()
viewHideClickLeftRightSlider()
})
// FUNCTION SCROLL BEHAVIOR CONATINER SLIDER IMAGE
const scrollBehaviorContainerSliderImage = () => {
containerSliderImg.style.scrollBehavior = "smooth"
containerSliderImg.scrollLeft = 0  
}

/* ================================================== GRID BOX IMAGE  =========================================================== */
const leftBoxSlider = document.getElementById("leftBoxSlider")
const rightBoxSlider = document.getElementById('rightBoxSlider')
const containerBox = document.querySelector(".containerBoxSlider")
const itemClick = document.querySelectorAll(".itemClickBoxSlider")

containerBox.addEventListener("wheel", (e)=>{
    // e.preventDefault();
})
const changeBackgroundColorItemClick =  (optional = null) => {
    itemClick.forEach((item)=>{
        item.style.backgroundColor = "rgb(227, 227, 227)"
    })
    if(optional) itemClick[0].style.backgroundColor = "red";
}
itemClick.forEach((item, index) => {
    item.addEventListener("click", (e)=>{
        containerBox.style.scrollBehavior = "smooth"
        containerBox.scrollLeft = index * (window.innerWidth - 10) 
        changeBackgroundColorItemClick()
        itemClick[index].style.backgroundColor = "red"
    })
})
const viewHideClickLeftRight = () => {
    setTimeout(()=> {
        leftBoxSlider.style.display  = containerBox.scrollLeft < window.innerWidth / 2 ? "none" : "block"
        rightBoxSlider.style.display = containerBox.scrollLeft >= Math.round(containerBox.scrollWidth) - window.innerWidth  ? "none" : "block"
    },1000)
    
}
viewHideClickLeftRight()
leftBoxSlider.addEventListener("click", (e)=>{
    containerBox.style.scrollBehavior = "smooth"
    containerBox.scrollLeft -= window.innerWidth  - 10
    viewHideClickLeftRight()

})
rightBoxSlider.addEventListener("click", (e)=>{
    containerBox.style.scrollBehavior = "smooth"
    containerBox.scrollLeft += window.innerWidth - 10
    viewHideClickLeftRight()

})
const resizeContainerBox = () => {
    containerBox.style.scrollBehavior = "smooth"
    containerBox.scrollLeft = 0 
}
/*   ================================================== IMAGE ANIMATION SCROLL  ===========================================================  */
const containerImageAnimation = document.querySelector(".containerImageAnimation")
const itemImageAnimation = document.querySelectorAll(".itemImageAnimation")

containerImageAnimation.addEventListener("wheel", (e)=>{
    // e.preventDefault();
})

const sizeContainerImageAnimation = () => {
    return window.innerWidth <= 750 ? 330 : 600; 
}

const containerImageAnimationResize = () => {
    containerImageAnimation.style.scrollBehavior = "smooth"
    containerImageAnimation.scrollLeft  = 0
}

const changeImageMoveAnimation = () => {
    containerImageAnimation.style.scrollBehavior = "smooth"
    containerImageAnimation.scrollLeft += window.innerWidth - 10
    console.log(containerImageAnimation.scrollLeft)
    console.log(containerImageAnimation.scrollWidth)
    if(containerImageAnimation.scrollLeft  >= containerImageAnimation.scrollWidth  ){
        containerImageAnimationResize()
    }
}
setInterval(()=>{
    changeImageMoveAnimation()
}, 3000)

/*  ================================================== MENU MAIN COLUMN  ===========================================================   */
const itemContainerColumn = document.querySelectorAll(".itemContainerColumn")
const containerItem = document.querySelectorAll(".itemToItem")


const heightSizeItemToMenu = (index) => {
    const items =  containerItem[index].querySelectorAll(".itemToMenu")
    const hight = items.length * 40
    return hight;
}
 
const CheckHiehtContainerItem = (index) => {
    return containerItem[index].style.height >= "10px" ? true : false
}

const closeContainerItem = () => {
    containerItem.forEach(item=>{
        item.style.height = 0
    })
}


itemContainerColumn.forEach((column,index) => {
    column.addEventListener("click", (e)=>{
        if(window.innerWidth < 750){
            if(CheckHiehtContainerItem(index)){
            closeContainerItem()
            }
            else {
                closeContainerItem()
                containerItem[index].style.height = `${heightSizeItemToMenu(index)}px`
            }
        }
    })            
});
// WINDOW RESIZE EVENT LISTENER
window.addEventListener('resize', (e)=>{
   /* ==================================================  BOX SLIDER IMAGE  =========================================================== */
    scrollBehaviorContainerSliderImage()
    viewHideClickLeftRightSlider()
    changeBackGroundColorButton(buttonClickOne, "rgb(198, 195, 195)", "blue")
    changeBackGroundColorButton(buttonClickTwo, "rgb(198, 195, 195)", "red") 
    /* ================================================== GRID BOX IMAGE  =========================================================== */
    resizeContainerBox()
    viewHideClickLeftRight()
    changeBackgroundColorItemClick("optional")
    /*   ================================================== IMAGE ANIMATION SCROLL  ===========================================================  */
    containerImageAnimationResize()
    /*  ================================================== MENU MAIN COLUMN  ===========================================================   */
    closeContainerItem()


})