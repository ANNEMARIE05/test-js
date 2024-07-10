let myHeading = document.querySelector("h1");
let myinput = document.querySelector("#lettre");

function recupLettre(lettre) {
    myHeading.textContent += lettre
}

document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault
    myHeading.textContent = ""
    timeOut(0)
});


function recupTemps() {
    mytime = document.querySelector("#temps").value
    return parseInt(mytime)
}

function recupCouleurs() {
    myCouleur = document.querySelector("#couleur").value
    myHeading.style.color=myCouleur
}


function timeOut(index) {
    lettre = myinput.value
    if (index<=lettre.length-1) {
        return setTimeout(() => {
            recupCouleurs()
            recupLettre(lettre[index])
            timeOut(index+1)
        }, recupTemps());
    } else {
        
    }
}