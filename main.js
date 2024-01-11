// rng function to be used by other functions

function rNG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// constants for page elements
const viewer = document.querySelector('#viewer');
const dialogueBox = document.querySelector('#dialogueBox');
const dialogueText = document.querySelector('#dialogueBox');

// constants for menu buttons
const cluesBtn = document.querySelector('#cluesBtn');
const itemsBtn = document.querySelector('#itemsBtn');
const notesBtn = document.querySelector('#notesBtn');

// constants for action buttons
const enterBtn = document.querySelector('#enterBtn');
const fleeBtn = document.querySelector('#fleeBtn');
const itemBtn = document.querySelector('#itemBtn');
const searchBtn = document.querySelector('#searchBtn');
const talkBtn = document.querySelector('#talkBtn');

// constants for location buttons
const castleBtn = document.querySelector('#castleBtn');
const churchBtn = document.querySelector('#churchBtn');
const estateBtn = document.querySelector('#estateBtn');
const forestBtn = document.querySelector('#forestBtn');
const gardenBtn = document.querySelector('#gardenBtn');
const greenhouseBtn = document.querySelector('#greenhouseBtn');
const hutBtn = document.querySelector('#hutBtn');
const lakeBtn = document.querySelector('#lakeBtn');
const libraryBtn = document.querySelector('#libraryBtn');
const lighthouseBtn = document.querySelector('#lighthouseBtn');
const mountainBtn = document.querySelector('#mountainBtn');
const riverBtn = document.querySelector('#riverBtn');
const towerBtn = document.querySelector('#towerBtn');

// function to change background
const bgFunc = (curLoc, min, max) => {
    let rNum = rNG(min,max);
    viewer.style.backgroundImage=`url(assets/backgrounds/${curLoc}/${curLoc}${rNum}.jpeg)`;
    return rNum;
}

const preNumSet =  []

const dialogueFunc = (curLoc) => {
    dialogueBox.innerText=`You stand before a${curLoc}.`;
}

// functions for location buttons
castleBtn.onclick = () => {
    dialogueFunc(' castle');
    console.log(bgFunc('castle',1,7));
}

churchBtn.onclick = () => {
    dialogueFunc(' church');
    bgFunc('church',1,3);
}

estateBtn.onclick = () => {
    dialogueFunc('n estate');
    bgFunc('estate',1,5);
}

forestBtn.onclick = () => {
    dialogueFunc(' forest');
    bgFunc('forest',1,8);
}

gardenBtn.onclick = () => {
    dialogueFunc(' garden');
    bgFunc('garden',1,6);
}

greenhouseBtn.onclick = () => {
    dialogueFunc(' greenhouse');
    bgFunc('greenhouse',1,6);
}

hutBtn.onclick = () => {
    dialogueFunc(' hut');
    bgFunc('hut',1,12);
}

lakeBtn.onclick = () => {
    dialogueFunc(' lake');
    bgFunc('lake',1,7);
}

libraryBtn.onclick = () => {
    dialogueFunc(' library');
    bgFunc('library',1,4);
}

lighthouseBtn.onclick = () => {
    dialogueFunc(' lighthouse');
    bgFunc('lighthouse',1,4);
}

mountainBtn.onclick = () => {
    dialogueFunc(' mountain');
    bgFunc('mountain',1,5);
}

riverBtn.onclick = () => {
    dialogueFunc(' river');
    bgFunc('river',1,13);
}

towerBtn.onclick = () => {
    dialogueFunc(' tower');
    bgFunc('tower',1,7);
}