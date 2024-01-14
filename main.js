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

const invArr = [
    invBtn1, invBtn2, invBtn3, invBtn4
]

// constants for action buttons
const actBtn1 = document.getElementById('actBtn1');
const actBtn2 = document.getElementById('actBtn2');
const actBtn3 = document.getElementById('actBtn3');
const actBtn4 = document.getElementById('actBtn4');

const actArr = [
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

let navLoc1 = '';
let navLoc2 = '';
let navLoc3 = '';
let navLoc4 = '';

const navLocArr = [
    navLoc1,
    navLoc2,
    navLoc3,
    navLoc4
]

// function

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

// initialize objects

let statue1 = {};

let castle = {};
let forestLakeA = {};
let forestLakeN1 = {};
let forestLakeN2 = {};
let forestLost1 = {};
let forestLost2 = {};
let forestLost3 = {};
let forestLost4 = {};
let forestLost5 = {};
let forestLost6 = {};
let forestNight1 = {};
let forestNight2 = {};
let forestNight3 = {};
let forestPath1 = {};
let forestPath2 = {};
let forestPath3 = {};
let forestPath4 = {};
let forestRiver1 = {};
let forestRiver2 = {};
let forestRiver3 = {};
let forestTwilight1 = {};
let forestTwilight2 = {};
let forestTwilight3 = {};
let nMtns1 = {};
let hut = {};
let hutA = {};

let navFunc = ()=>{};



// objects for navigation



statue1 = {
    locationName : 'Statue at the Crossroads',
    btnLabels : ['N: Mountains', 'W: Forest', 'S: Mountains', ''],
    navLocs : ['nMtns1', 'forestPath1', '', ''],
    locationTxt : 'You find yourself standing on a dirt road in front of an admittedly odd statue of an angel. The road heads into the mountains to the north and the south. Opposite the statue, a path leads into a large forest to the west.',
    bgImgUrl: `url('/assets/backgrounds/statue1.jpeg')`
};

forestPath1 = {
    locationName : 'Forest Entrance',
    btnLabels : ['W: Forest', 'E: Statue', '', ''],
    navLocs : [forestPath2, statue1, '', ''],
    locationTxt : 'A brief walk has brought to the edge of the forest.  The path continues westward into the forest for some distance, winding away from your sight.  Behind you, the path goes east to the crossroad and its statue.',
    bgImgUrl: `url('/assets/backgrounds/forest/forestPath1.jpeg')`
};

console.log(statue1.navLocs)

navFunc = function(place){
    console.log(place[2]);
    for (let i = 0; i < navLocArr.length-1; i++){
        navLocArr[i] = place.navLocs[i];
    };
    viewer.style.backgroundImage = place.bgImgUrl;
    diaHeader = place.locationName;
    dialogueHeader.innerHTML = diaHeader
    i = 0;
    diaTxt = place.locationTxt;
    dialogueText.innerHTML = '';
    dialogueFunc();
}

navBtn1.onclick = navFunc(navLoc1);
navBtn1.onclick = navFunc(navLoc2);
navBtn1.onclick = navFunc(navLoc3);
navBtn1.onclick = navFunc(navLoc4);

navFunc(statue1);