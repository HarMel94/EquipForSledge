

function chooseArm(arg1,arg2,arg3){
    let a1 = document.querySelector(arg1).addEventListener("click", () => {
        document.querySelector(arg2).innerHTML = arg3
    });
}

chooseArm(".pHeadBtn1",".pHead2",`<img src=armbody/head/h1.png>`)
chooseArm(".pHeadBtn2",".pHead2",`<img src=armbody/head/h2.png>`)
chooseArm(".pHeadBtn3",".pHead2",`<img src=armbody/head/h3.png>`)

chooseArm(".pBodyBtn1",".pBody2",`<img src=armbody/body/b1.png>`)
chooseArm(".pBodyBtn2",".pBody2",`<img src=armbody/body/b2.png>`)
chooseArm(".pBodyBtn3",".pBody2",`<img src=armbody/body/b3.png>`)

chooseArm(".pLegsBtn1",".pLegs2",`<img src=armbody/legs/l1.png>`)
chooseArm(".pLegsBtn2",".pLegs2",`<img src=armbody/legs/l2.png>`)
chooseArm(".pLegsBtn3",".pLegs2",`<img src=armbody/legs/l3.png>`)