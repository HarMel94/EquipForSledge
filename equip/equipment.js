const mainArr = [ ]
const pistolArr = [ ]
const knifeArr = [ ]

function showArr(arr,elem) {
    let out = ""
    for(let i = 0; i < arr.length; i++ ) {
        if(arr[i] !== undefined) {
            out += `<div>
                        <img src="img02\\${arr[i]}.png">
                        <!--<span>${i}</span>-->
                    </div>`
        }
    }
    document.querySelector(elem).innerHTML = out
    // document.querySelector(".unitLength").innerHTML = "You choose " + arr.length + " units" //LENGTH
}

showArr(mainArr,".unitImg")
showArr(pistolArr,".unitImg2")
showArr(knifeArr,".unitImg3")

function addInMainArr() {
    let index = parseInt( document.querySelector(".MainIndex").value)  
    mainArr[index] = document.querySelector(".mainArray").value
    showArr(mainArr,".unitImg")
}

function addInPistolArr() {
    let index = parseInt( document.querySelector(".pistolIndex").value)    
    pistolArr[index] = document.querySelector(".pistolArray").value 
    showArr(pistolArr,".unitImg2")
}

function addInKnifeArr() {
    let index = parseInt( document.querySelector(".knifeIndex").value)   
    knifeArr[index] = document.querySelector(".knifeArray").value 
    showArr(knifeArr,".unitImg3")
}


document.querySelector(".addMainArr").addEventListener("click", addInMainArr)
document.querySelector(".addPistolArray").addEventListener("click", addInPistolArr)
document.querySelector(".adaKnifeArray").addEventListener("click", addInKnifeArr)




// if(index > 50) {             //  STUGUM
//     console.log("Shata")
// } else if(index < 0) {
//     console.log("qica")
// }



let slidePx = 0
const sliderLine = document.querySelector(".slider-line")

document.querySelector(".slider-next").addEventListener("click", () => {
    slidePx += 200
        if(slidePx > 600){
            slidePx = 0
        }
    sliderLine.style.left = -slidePx + "px"    
})

document.querySelector(".slider-prev").addEventListener("click", () => {
    slidePx -= 200
        if(slidePx < 0){
            slidePx = 600
        }
    sliderLine.style.left = -slidePx + "px"    
})

//  WRITE FUNCTION FOR SLIDER  BUTTONS