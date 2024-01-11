// rng function to be used by other functions

function rNG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// constants for page elements
const viewer = document.querySelector('#viewer');
const dialogueBox = document.querySelector('#dialogueBox')

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

const dialogueFunc = (curLoc, curNum) => {

}

// functions for location buttons
castleBtn.onclick = () => {
    dialogueBox.innerHTML='<p>A castle rises before you.</p>';
    console.log(bgFunc('castle',1,7));
    dialogueBox.p.innerText='You stand before a castle.';
}

churchBtn.onclick = () => {
    bgFunc('church',1,3);
}

estateBtn.onclick = () => {
    bgFunc('estate',1,5);
}

forestBtn.onclick = () => {
    bgFunc('forest',1,8);
}

gardenBtn.onclick = () => {
    bgFunc('garden',1,6);
}

greenhouseBtn.onclick = () => {
    bgFunc('greenhouse',1,6);
}

hutBtn.onclick = () => {
    bgFunc('hut',1,12);
}

lakeBtn.onclick = () => {
    bgFunc('lake',1,7);
}

libraryBtn.onclick = () => {
    bgFunc('library',1,4);
}

lighthouseBtn.onclick = () => {
    bgFunc('lighthouse',1,4);
}

mountainBtn.onclick = () => {
    bgFunc('mountain',1,5);
}

riverBtn.onclick = () => {
    bgFunc('river',1,13);
}

towerBtn.onclick = () => {
    bgFunc('tower',1,7);
}