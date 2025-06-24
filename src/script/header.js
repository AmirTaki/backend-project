let header = document.querySelector(".header")
let iconMenu = document.querySelector('.iconMenu')
let menuContainer = document.querySelector(".menuContainer")
let itemTitle = document.querySelectorAll(".itemTitle")
let listContainer = document.querySelectorAll('.listContainer')
let crossSideBar = document.querySelector(".crossSideBar")
let listTitle = document.querySelectorAll('.listTitle')
let pageContainer = document.querySelectorAll('.pageContainer')
let backCountaienr = document.querySelectorAll(".backCountaienr")
let crossContainerSidebar = document.querySelectorAll('.crossContainer-sidebar')
let searchInputIcon = document.querySelector("#searchIcon")
let InputSearchHeader = document.querySelector(".InputSearchHeader")
let menuTitle = document.querySelectorAll(".menuItem")



// MOVE ANIMATION SIDEBAR
iconMenu.addEventListener("click", (e)=>{
    
    header.style.animation = 'none'
    menuContainer.style.display = "flex"
    menuContainer.style.animation = "moveSidebar .5s linear forwards"
})
// REVERSE MOVE ANIMATIO SIDEBAR
crossSideBar.addEventListener("click", (e)=>{
    menuContainer.style.animation = "moveReverseSidebar .5s linear forwards"
})
// ClosePageContainer & changaBackground listTitle
function ClosePageContainer () {
    for (let i = 0; i < pageContainer.length ; i++){
        pageContainer[i].style.display = "none"
        listTitle[i].style.backgroundColor = "transparent"
    }
}
// THOUCH MOVE LIST TITLE & BACKGROUND COLOR LIST TITLE
for(let i = 0; i < listTitle.length; i++){
    listTitle[i].addEventListener("mousemove",(e)=>{
        if(window.innerWidth >= 750){
            ClosePageContainer()
            pageContainer[i].style.display = "flex"
            listTitle[i].style.backgroundColor = "rgb(226, 226, 226)"
        }
    })
}
// PAGE CONTAINER TOUCH MOVE ITEM TITLE & COLOR BACKGROUND ITEM
for(let i = 0; i < itemTitle.length ;i++){
    itemTitle[i].addEventListener("mousemove",(e)=>{
        if(window.innerWidth >= 750){
            ClosePageContainer()
            // PAGE CONTAINER
            let x = listContainer[i].querySelectorAll(".pageContainer")
            x[0].style.display = "flex"
            // COLOR BACKGROUND ITEM
            let color = listContainer[i].querySelectorAll(".listTitle")
            color[0].style.backgroundColor = "rgb(226, 226, 226)"
        }
    })
}
// MOVE ANIMATION CONATAINER PAGE SIDEBAR
for(let i = 0; i < listTitle.length; i++){
    listTitle[i].addEventListener("click", (e)=>{
        if(window.innerWidth < 750){
            pageContainer[i].style.display = 'flex'
            pageContainer[i].style.animation = "movePageContainer .5s linear forwards"
        }
    })
}
// MOVE REVERSE ANIMATION CONATAINER PAGE SIDEBAR
for(let i = 0; i < backCountaienr.length; i++){
    backCountaienr[i].addEventListener("click", (e)=>{
        pageContainer[i].style.animation = "moveReversePageContainer .5s linear forwards"  
        setTimeout(() => {
            pageContainer[i].style.display = 'none'
        }, 500);
       
    })
}
// FUNCTION DISPLAY NONE PAGECONTAINER
const closePageContainerSidebar = () => {
    for(let i = 0; i < pageContainer.length; i++){
    pageContainer[i].style.display = "none"
    }
}
// CLOSE CONTAINER SIDEBAR AND CLOSE PAGE CONTAINER
for(let i = 0; i < crossContainerSidebar.length; i++){
    crossContainerSidebar[i].addEventListener("click", (e)=>{
        pageContainer[i].style.animation = "moveReversePageContainer .2s linear forwards"  
        setTimeout(() => {
            pageContainer[i].style.display = 'none'
        },200);
        menuContainer.style.animation = "moveReverseSidebar .5s linear forwards"
    })
}
//
InputSearchHeader.style.display = "none" 
searchInputIcon.addEventListener("click", (e)=>{
    if(InputSearchHeader.style.display == "none"){
        InputSearchHeader.style.display = "block"
        InputSearchHeader.style.animation = "moveInput .5s linear forwards"
    }
    else{
        InputSearchHeader.style.animation = "moveReverseInput .5s linear forwards"
        setTimeout(() => {
            InputSearchHeader.style.display = "none"
        },500);
   }
})
//   FOCUS INPUT SEARCH HIDE ICON SEARCH
InputSearchHeader.addEventListener("focus", (e)=>{
    searchInputIcon.style.display = "none" 
})
//   FOCUS OUT INPUT SEARCH DISPLAY ICON SEARCH
InputSearchHeader.addEventListener("focusout", (e)=>{
    searchInputIcon.style.display = "block" 
})

// 
itemTitle.forEach((title, index) => {
    title.addEventListener("mousemove", (e)=>{
        if (window.innerWidth < 750){
           let list =  document.querySelectorAll(".listContainer")[index]
           let size = list.querySelectorAll(".listTitle").length
           size *= 35;
           list.style.height =  `${size}px`
        }
    })
});
menuTitle.forEach((title, index) => {
    title.addEventListener("mouseleave", (e)=>{
        if (window.innerWidth < 750){
           let list =  document.querySelectorAll(".listContainer")[index]
           list.style.height =  0
        }
    })
});
const sizeHeaderListContanier = (height) => {
    listContainer.forEach(list => {
        list.style.height =  height
    });
}


// WINDOW ADD EVENET RESIZE 
window.addEventListener('resize', (e)=>{
    if(window.innerWidth < 750){
        sizeHeaderListContanier(0) 
        menuContainer.style.display = "none"
        closePageContainerSidebar()//
    }
    else {
        sizeHeaderListContanier("600px")
        menuContainer.style.display = "flex"
        // pageContainer[0].style.display = "block"//

    }
})
const scrollHeader =  () => {
    header.style.animation = document.documentElement.scrollTop > 100 ? "upHeader .5s linear forwards" : "downHeader .5s linear forwards"   
}
scrollHeader()

window.addEventListener('scroll', (e)=> {
    scrollHeader()
})