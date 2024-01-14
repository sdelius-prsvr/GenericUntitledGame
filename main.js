// rng function to be used by other functions
function rNG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// constants for page elements
const viewer = document.getElementById('viewer');
const dialogueBox = document.getElementById('dialogueBox');
const dialogueHeader = document.getElementById('dialogueHeader')
const dialogueText = document.getElementById('dialogueText')

// constants for inventory buttons
const invBtn1 = document.getElementById('invBtn1');
const invBtn2 = document.getElementById('invBtn2');
const invBtn3 = document.getElementById('invBtn3');
const invBtn4 = document.getElementById('invBtn4');

const invBtnArr = [
    invBtn1, invBtn2, invBtn3, invBtn4
]

// constants for action buttons
const actBtn1 = document.getElementById('actBtn1');
const actBtn2 = document.getElementById('actBtn2');
const actBtn3 = document.getElementById('actBtn3');
const actBtn4 = document.getElementById('actBtn4');

const actBtnArr = [
    actBtn1, actBtn2, actBtn3, actBtn4
]

// constants and variables for navigation buttons
const navBtn1 = document.getElementById('navBtn1');
const navBtn2 = document.getElementById('navBtn2');
const navBtn3 = document.getElementById('navBtn3');
const navBtn4 = document.getElementById('navBtn4');

const navBtnArr = [
    navBtn1, navBtn2, navBtn3, navBtn4
]


// let i = 0
let diaHeader = '';
let diaTxt = '';
let speed = 35;

const dialogueFunc = () => {
    if (i < diaTxt.length) {
        dialogueText.innerHTML += diaTxt.charAt(i);
        i++;
        setTimeout(dialogueFunc, speed);
      }
}

//initialize all function variables
let statue1 = ()=>{};

let estateApproach = ()=>{};
let estateGarden1 = ()=>{};
let estateGarden2 = ()=>{};
let estateGarden3 = ()=>{};
let estateGarden4 = ()=>{};
let greenhouseExt = ()=>{};
let greenhouseInt = ()=>{};

let forestCastle = ()=>{};
let forestHut1 = ()=>{};
let forestHut2 = ()=>{};
let forestLakeA = ()=>{};
let forestLakeN1 = ()=>{};
let forestLakeN2 = ()=>{};
let forestLost1 = ()=>{};
let forestLost2 = ()=>{};
let forestLost3 = ()=>{};
let forestLost4 = ()=>{};
let forestLost5 = ()=>{};
let forestLost6 = ()=>{};
let forestNight1 = ()=>{};
let forestNight2 = ()=>{};
let forestNight3 = ()=>{};
let forestPath1 = ()=>{};
let forestPath2 = ()=>{};
let forestPath3 = ()=>{};
let forestPath4 = ()=>{};
let forestRiver1 = ()=>{};
let forestRiver2 = ()=>{};
let forestRiver3 = ()=>{};
let forestTwilight1 = ()=>{};
let forestTwilight2 = ()=>{};
let forestTwilight3 = ()=>{};

let fullMoonHigh = ()=>{};
let fullMoonLow = ()=>{};
let newMoonHigh = ()=>{};
let newMoonLow = ()=>{};

let nMtns1 = ()=>{};
let nMtnsRiver = ()=>{};
let nMtnsLakeDay = ()=>{};
let nMtnsLakeDusk = ()=>{};
let nMtnsLakeNight = ()=>{};
let tower = ()=>{};
let towerLibrary = ()=>{};

let lighthouse = ()=>{};
let sMtns1 = ()=>{};
let sMtnsLakeDay = ()=>{};
let sMtnsLakeDusk = ()=>{};
let sMtnsLakeNight = ()=>{};
let sMtnsRiver = ()=>{};


//define functions for each in-game location
statue1 = ()=>{
    dialogueHeader.innerHTML = 'Statue at the Crossroads';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/statue1.jpeg')`;
    navBtn1.innerHTML = 'N: Mountains';
    navBtn2.innerHTML = 'W: Forest';
    navBtn3.innerHTML = 'S: Mountains';
    navBtn4.innerHTML = '';
    navBtn1.onclick = nMtns1;
    navBtn2.onclick = forestPath1;
    navBtn3.onclick = sMtns1;
    navBtn4.onclick = '';
    i=0
    diaTxt = 'You find yourself standing on a dirt road in front of an admittedly odd statue of an angel. The road heads into the mountains to the north and the south. Opposite the statue, a path leads into a large forest to the west.';
    dialogueFunc();
};

nMtns1 = ()=>{
    dialogueHeader.innerHTML = 'The Northern Mountains';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/nMtns/nMtns1.jpeg')`;
    navBtn1.innerHTML = 'N: Mountains';
    navBtn2.innerHTML = 'S: Statue';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = '';
    navBtn1.onclick = nMtnsRiver;
    navBtn2.onclick = statue1;
    navBtn3.onclick = '';
    navBtn4.onclick = '';
    i=0
    diaTxt = 'After a long hike you are in the foothills of the sloping Northern Mountains.  The road continues away and to the north beyond your sight.  Behind you the road goes back to the crossroads and its uncanny statue.';
    dialogueFunc();
};

forestPath1 = ()=>{
    dialogueHeader.innerHTML = 'Forest Entrance';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/forest/forestPath1.jpeg')`;
    navBtn1.innerHTML = 'W: Forest';
    navBtn2.innerHTML = 'E: Statue';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = '';
    navBtn1.onclick = forestPath2;
    navBtn2.onclick = statue1;
    navBtn3.onclick = '';
    navBtn4.onclick = '';
    i=0
    diaTxt = 'A brief walk has brought to the edge of the forest.  The path continues westward into the forest for some distance, winding away from your sight.  Behind you, the path goes east to the crossroad and its statue.';
    dialogueFunc();
};

sMtns1 = ()=>{
    dialogueHeader.innerHTML = 'Southern Mountains';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/sMtns/sMtns1.jpeg')`;
    navBtn1.innerHTML = 'N: Statue';
    navBtn2.innerHTML = 'S: Mountains';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = '';
    navBtn1.onclick = statue1;
    navBtn2.onclick = sMtnsLakeDay
    navBtn3.onclick = '';
    navBtn4.onclick = '';
    i=0
    diaTxt = `The sharp peaks of the Southern Mountains rise before you.  You're a bit tired from your long walk, but after a short rest you feel ready to go on. Ahead, the road goes around a hill and disappears.  Behind you the strange statue, long out of sight, stands sentinel over the crossroads.`;
    dialogueFunc();
};

document.onload = statue1();