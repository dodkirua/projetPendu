let words = [
    "chatoyant",
    "conspirateur",
    "redondant",
    "peremptoire",
    "redingotte",
    "ostentatoire",
    "salsifis",
    "fromage",
    "assiette",
    "corbeau",
    "marron"
]
let alphaB ="abcdefhhijklmnopqrstuvwxyz";
let remain = document.getElementById("remain").getElementsByTagName("p")[1];
remain.innerHTML = alphaB;
let find = randomWord();
init();



function randomWord(){
    return words[Math.floor(Math.random()*words.length)];
}

function init(){
    let word = document.getElementById("word");
    let newDiv;
    for (let i = 0 ; i < find.length ; i++){
        newDiv = document.createElement("div");
        newDiv.style.width = Math.floor(100/ find.length)-0.1+"%";
        console.log(newDiv.style.width)
        word.append(newDiv);

    }
}