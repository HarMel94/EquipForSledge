 "use strict"


//ADD BUTTON 

const btnArr = []

function hammerBtn(unicId){
    const bot = document.querySelector(`${unicId}`).addEventListener(
        "click", () => {
            console.log("add")
    })
}

hammerBtn("#hambtn1")
hammerBtn("#hambtn2")
hammerBtn("#hambtn3")
hammerBtn("#hambtn4")
hammerBtn("#hambtn5")



//MESSAGE FROM INPUT

function idea() {
    const inputMess = document.querySelector(".message"),
      messageBtn = document.querySelector(".mesBtn"),
      messageVal = document.querySelector(".inputValue")
    
    messageBtn.addEventListener("click", () => {
        setTimeout(() => {
            messageVal.innerHTML = "<div>You're massage is:</div>"
             + inputMess.value.split('').reverse().join('') 
             + "<div>Is this some kinde joke.Type normal text.</div>"
        },1000)        
    })    
}

idea()


//TIMER

const lastDay = '2021-10-11';

    function takeTime(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor( (total/(1000*60*60*24)) ),
              seconds = Math.floor( (total/1000) % 60 ),
              minutes = Math.floor( (total/1000/60) % 60 ),
              hours = Math.floor( (total/(1000*60*60) % 24) );
        return {
            total,days,hours,minutes,seconds
        };
    }

    function pluseZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const num = takeTime(endtime);

                days.innerHTML = pluseZero(num.days);
                hours.innerHTML = pluseZero(num.hours);
                minutes.innerHTML = pluseZero(num.minutes);
                seconds.innerHTML = pluseZero(num.seconds);

            if (num.total <= 0) {
                clearInterval(timeInterval);
            }
        }   
            updateClock();
    }

    setClock('.timer', lastDay);


