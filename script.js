const cont1 = document.querySelector('#container1');
const cont2 = document.querySelector('#container2');
const tableSize = document.querySelector('#table-select');
const ground = document.querySelector('#ground');
const gameClock = document.querySelector('#game-clock');

const htplink = document.querySelector('.htplink');


var audio = new Audio("../audio/audio.wav");
var wrongAudio= new Audio("../audio/wrong-ans.mp3");
var uiClick = new Audio("../audio/ui-click.mp3");







let val = 0;
let boxes = 0;
let tableWidth = 0;

let sec = 1;












// On clicking "Start Challenge" button
cont2.addEventListener('click', () => {
    uiClick.play();

    cont1.style.display = "none";
    cont2.style.display = "none";
    gameClock.style.visibility = "visible";

    gameClock.style.position = "absolute";
    gameClock.style.top = "5px";
    gameClock.style.fontSize = "large";


    val = tableSize.value;
    boxes = val * val;

    if (val == 3) {
        tableWidth = (val * 100) + (val * 2);
    }

    else if (val == 4) {
        tableWidth = (val * 80) + (val * 2);
    }

    else if (val == 5) {
        tableWidth = (val * 60) + (val * 2);
    }


    let arr = [];

    for (let i = 1; i <= boxes; i++) {
        arr.push(i);
    }

    let ran_arr = arr.sort(() => Math.random() - 0.5);

    const schulteTable = document.createElement('div');
    schulteTable.classList.add('.schulte');
    ground.appendChild(schulteTable);

    schulteTable.style.visibility = "visible";
    schulteTable.style.width = tableWidth + "px";
    schulteTable.style.display = "flex";
    schulteTable.style.flexWrap = "wrap";

    for (let i = 0; i < boxes; i++) {
        const box = document.createElement('div');
        box.classList.add('.box');
        schulteTable.appendChild(box);

        box.innerHTML = arr[i];

        if (val == 3) {
            box.style.width = "100px";
            box.style.height = "100px";
        }

        else if (val == 4) {
            box.style.width = "80px";
            box.style.height = "80px";
        }

        else if (val == 5) {
            box.style.width = "60px";
            box.style.height = "60px";
        }




        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";
        box.style.border = "1px solid black";
        box.style.fontSize = "x-large";
        box.style.fontWeight = "bold";

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = "rgba(255, 255, 255, 0.575)";
            box.style.cursor = "default";
        });

        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = "rgba(255, 255, 255, 0)";
        });

        box.onclick = function alertOnClick() {
            gameLogic(this);
        }

    }


    setInterval(function clockRun() {
        let gameClock = document.getElementById('game-clock');
        gameClock.innerHTML = "Time: " + sec + " secs";

        gameClock.style.fontSize = "x-large";
        gameClock.style.fontWeight = "bold";

        if (num <= boxes) {
            sec++;
        }

    }, 1000);

}, { once: true });















// GAME LOGIC
let num = 1;
function gameLogic(obj) {
    if (obj.innerHTML == num) {
        audio.play();
        obj.style.backgroundColor = "#06fc6d62"; //green

        obj.addEventListener('mouseleave', () => {
            obj.style.backgroundColor = "#06fc6d62";
        });

        obj.addEventListener('mouseenter', () => {
            obj.style.backgroundColor = "#06fc6d62";
        });

        obj.onclick = null;
        num++;
    }
    else {
        toggle_color(obj, "indianred", "rgba(255, 255, 255, 0)", 1, 400);
        wrongAudio.play();
    }

    if (num == boxes + 1) {
        alertEndGame();
    }
}
















// extra needed functions amd events
function alertEndGame() {
    setTimeout(function () {

        alert("Schulte Table cracked!\n" + "Time Taken: " + sec + " secs" + "\nlightning fast huh !?");
        window.location = 'index.html';

    }, 300);
}

function toggle_color(divObj, color1, color2, cycle_time, wait_time) {

    setTimeout(function first_color() {
        divObj.style.backgroundColor = color1;
        setTimeout(change_color, wait_time);
    }, cycle_time);

    function change_color() {
        divObj.style.backgroundColor = color2;
    }
}

tableSize.addEventListener('click', ()=>{
    uiClick.play();
});

htplink.addEventListener('click', () => {
    uiClick.play();
});


