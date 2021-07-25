//   UNITS

const mainArr = [ ]
const pistolArr = [ ]
const knifeArr = [ ]

function showArray(arr,elem) {
    let show = ""
    for(let i = 0; i < arr.length; i++ ) {
        if(arr[i] !== undefined) {
            show += `<div>
                        <img src="img02\\${arr[i]}.png">
                        <!--<span>${i}</span>-->
                    </div>`
        }
    }
    document.querySelector(elem).innerHTML = show
    // document.querySelector(".unitLength").innerHTML = "You choose " + arr.length + " units" //LENGTH
}

showArray(mainArr,".unitImg")
showArray(pistolArr,".unitImg2")
showArray(knifeArr,".unitImg3")

function addInMainArr() {
    let index = parseInt( document.querySelector(".MainIndex").value) 
    if(index >= 2){
        alert('Too match units')
        index = null
    }
    // index >= 2 ?  alert("Too match units") : false;
    mainArr[index] = document.querySelector(".mainArray").value
    showArray(mainArr,".unitImg")
}

function addInPistolArr() {
    let index = parseInt( document.querySelector(".pistolIndex").value) 
    if(index >= 3){
        alert('Too match units')
        index = null
    }  
    // index >= 1 ? alert("Too match units") : false; 
    pistolArr[index] = document.querySelector(".pistolArray").value 
    showArray(pistolArr,".unitImg2")
}

function addInKnifeArr() {
    let index = parseInt( document.querySelector(".knifeIndex").value)  
    if(index >= 3){
        alert('Too match units')
        index = null
    } 
    // index >= 2 ? alert("Too match units") : false;
    knifeArr[index] = document.querySelector(".knifeArray").value 
    showArray(knifeArr,".unitImg3")
}


document.querySelector(".addMainArr").addEventListener("click", addInMainArr)
document.querySelector(".addPistolArray").addEventListener("click", addInPistolArr)
document.querySelector(".adaKnifeArray").addEventListener("click", addInKnifeArr)


//  SLIDER


let sPx = 0
let sliderLine = document.querySelector(".slider-line")

document.querySelector(".slider-next").addEventListener("click", () => {
    sPx += 200        
    sPx > 600 ? sPx = 0 : false
    sliderLine.style.left = -sPx + "px"    
})


document.querySelector(".slider-prev").addEventListener("click", () => {
    sPx -= 200        
    sPx < 0 ? sPx = 600 : false;
    sliderLine.style.left = -sPx + "px"    
})

