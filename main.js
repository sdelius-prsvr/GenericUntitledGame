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
const invBtn1 = document.querySelector('#invBtn1');
const invBtn2 = document.querySelector('#invBtn2');
const invBtn3 = document.querySelector('#invBtn3');
const invBtn4 = document.querySelector('#invBtn4');

const invArr = [
    invBtn1, invBtn2, invBtn3, invBtn4
]

// constants for action buttons
const actBtn1 = document.querySelector('#actBtn1');
const actBtn2 = document.querySelector('#actBtn2');
const actBtn3 = document.querySelector('#actBtn3');
const actBtn4 = document.querySelector('#actBtn4');

const actArr = [
    actBtn1, actBtn2, actBtn3, actBtn4
]

// constants for navigation buttons
const navBtn1 = document.querySelector('#navBtn1');
const navBtn2 = document.querySelector('#navBtn2');
const navBtn3 = document.querySelector('#navBtn3');
const navBtn4 = document.querySelector('#navBtn4');

const navArr = [
    navBtn1, navBtn2, navBtn3, navBtn4
]

// function to change background
// viewer.style.backgroundImage=`${obj.bgImgUrl}`;



let i = 0
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



// objects for navigation

let statueObj1 = {
    locationName : 'Statue at the Crossroads',
    navBtnLabels : [
        'N: Mountains',
        'W: Forest',
        'S: Mountains',
        ''
    ],
    navBtnFuncs : [
        'nMtnFunc',
        'navFunc(forestPathObj1)',
        'sMtnFunc',
        ''
    ],
    locationTxt : 'You find yourself standing on a dirt road in front of an admittedly odd statue of an angel. The road heads into the mountains to the north and the south. Opposite the statue, a path leads into a large forest to the west.',
    bgImgUrl: `url('/assets/backgrounds/statue1.jpeg')`

}

forestPathObj1 = {
    locationName : 'Forest Entrance',
    navBtnLabels : [
        'W: Forest',
        'E: Statue',
        '',
        ''
    ],
    navBtnFuncs : [
        'navFunc(forestPathObj2)',
        'navFunc(statueObj1)',
        '',
        ''
    ],
    locationTxt : 'A brief walk has brought to the edge of the forest.  The path continues westward into the forest for some distance, winding away from your sight.  Behind you, the path goes east to the crossroad and its statue.',
    bgImgUrl: `url('/assets/backgrounds/forest/forestPath1.jpeg')`
}

forestPathObj2 = {}

forestPathObj3 = {}

const navFunc = (obj) =>{
    for (let i = 0; i < 4; i++){
	navArr[i].innerHTML = obj.navBtnLabels[i];
    navArr[i].onclick = obj.navBtnFuncs[i];
    }
    viewer.style.backgroundImage = obj.bgImgUrl;
    diaHeader = obj.locationName;
    dialogueHeader.innerHTML = diaHeader
    i = 0;
    diaTxt = obj.locationTxt;
    dialogueText.innerHTML = '';
    dialogueFunc();
}


document.onload = navFunc(statueObj1);