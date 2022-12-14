/* let ready = document.querySelector('.inner-accordion');
function loop() {
    console.log(ready)
}

let b = 6;
for(let i = 0; i<b; i++) {
    if (i == 5) {
        break;
    }
    loop();
}
*/
/* let accordion = document.getElementById('new').className.replace = "" */


function dropdown() {
    let displayed = document.querySelector(".accordion-dropdown").style.display;
    if (displayed == "block") {
        document.querySelector(".accordion-dropdown").style.display = "none";
        document.getElementById("icon-dropdown").className = "icofont-plus";
    }
    else {
        document.querySelector(".accordion-dropdown").style.display = "block";
        document.getElementById("icon-dropdown").className = "icofont-close-line";
    }
}
function dropdown1() {
    let displayed1 = document.querySelector(".accordion-dropdown1").style.display;
    if (displayed1 == "block") {
        document.querySelector(".accordion-dropdown1").style.display = "none";
        document.getElementById("icon-dropdown1").className = "icofont-plus";
    }
    else {
        document.querySelector(".accordion-dropdown1").style.display = "block";
        document.getElementById("icon-dropdown1").className = "icofont-close-line";
    }
}
function dropdown2() {
    let displayed1 = document.querySelector(".accordion-dropdown2").style.display;
    if (displayed1 == "block") {
        document.querySelector(".accordion-dropdown2").style.display = "none";
        document.getElementById("icon-dropdown2").className = "icofont-plus";
    }
    else {
        document.querySelector(".accordion-dropdown2").style.display = "block";
        document.getElementById("icon-dropdown2").className = "icofont-close-line";
    }
}
function dropdown3() {
    let displayed1 = document.querySelector(".accordion-dropdown3").style.display;
    if (displayed1 == "block") {
        document.querySelector(".accordion-dropdown3").style.display = "none";
        document.getElementById("icon-dropdown3").className = "icofont-plus";
    }
    else {
        document.querySelector(".accordion-dropdown3").style.display = "block";
        document.getElementById("icon-dropdown3").className = "icofont-close-line";
    }
}
function dropdown4() {
    let displayed1 = document.querySelector(".accordion-dropdown4").style.display;
    if (displayed1 == "block") {
        document.querySelector(".accordion-dropdown4").style.display = "none";
        document.getElementById("icon-dropdown4").className = "icofont-plus";
    }
    else {
        document.querySelector(".accordion-dropdown4").style.display = "block";
        document.getElementById("icon-dropdown4").className = "icofont-close-line";
    }
}
function dropdown5() {
    let displayed1 = document.querySelector(".accordion-dropdown5").style.display;
    if (displayed1 == "block") {
        document.querySelector(".accordion-dropdown5").style.display = "none";
        document.getElementById("icon-dropdown5").className = "icofont-plus";
    }
    else {
        document.querySelector(".accordion-dropdown5").style.display = "block";
        document.getElementById("icon-dropdown5").className = "icofont-close-line";
    }
}