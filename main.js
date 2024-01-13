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

// constants for navigation buttons
const navBtn1 = document.querySelector('#navBtn1');
const navBtn2 = document.querySelector('#navBtn2');
const navBtn3 = document.querySelector('#navBtn3');
const navBtn4 = document.querySelector('#navBtn4');

// const castleBtn = document.querySelector('#castleBtn');
// const churchBtn = document.querySelector('#churchBtn');
// const estateBtn = document.querySelector('#estateBtn');
// const forestBtn = document.querySelector('#forestBtn');
// const gardenBtn = document.querySelector('#gardenBtn');
// const greenhouseBtn = document.querySelector('#greenhouseBtn');
// const hutBtn = document.querySelector('#hutBtn');
// const lakeBtn = document.querySelector('#lakeBtn');
// const libraryBtn = document.querySelector('#libraryBtn');
// const lighthouseBtn = document.querySelector('#lighthouseBtn');
// const mountainBtn = document.querySelector('#mountainBtn');
// const riverBtn = document.querySelector('#riverBtn');
// const towerBtn = document.querySelector('#towerBtn');

// function to change background
const bgFunc = (curLoc, min, max) => {
    let rNum = rNG(min,max);
    viewer.style.backgroundImage=`url(assets/backgrounds/${curLoc}/${curLoc}${rNum}.jpeg)`;
    return rNum;
}

const preNumSet =  []

let i = 0;
let txt = '';
let speed = 35;

const dialogueFunc = () => {
    if (i < txt.length) {
        document.getElementById("dialogueBox").innerHTML += txt.charAt(i);
        i++;
        setTimeout(dialogueFunc, speed);
      }
}


// functions for navigation buttons
const nMtnFunc = () => {
    document.getElementById("dialogueBox").innerHTML = '';
    i = 0
    txt = "The forest path has brought you to a clearing where sits an old castle.  Its battlements are worn and it's a little overgrown, but it looks habitable, possibly even inhabited.";
    console.log(bgFunc('nMtn1',1,3));
    dialogueFunc();
}

const forest1Func = () => {
    document.getElementById("dialogueBox").innerHTML = '';
    i = 0
    txt = "The forest path has brought you to a clearing where sits an old castle.  Its battlements are worn and it's a little overgrown, but it looks habitable, possibly even inhabited.";
    console.log(bgFunc('castle',1,3));
    dialogueFunc();
}

const sMtnFunc = () => {
    document.getElementById("dialogueBox").innerHTML = '';
    i = 0
    txt = "The forest path has brought you to a clearing where sits an old castle.  Its battlements are worn and it's a little overgrown, but it looks habitable, possibly even inhabited.";
    console.log(bgFunc('castle',1,3));
    dialogueFunc();
}

// null.onclick = () => {
//     document.getElementById("dialogueBox").innerHTML = '';
//     i = 0
//     txt = "The forest path has brought you to a clearing where sits an old castle.  Its battlements are worn and it's a little overgrown, but it looks habitable, possibly even inhabited.";
//     console.log(bgFunc('castle',1,3));
//     dialogueFunc();
// }


const statueFunc = () =>{
    navBtn1.innerHTML = 'N. mountains';
    navBtn1.onclick = nMtnFunc;
    navBtn2.innerHTML = 'W. forest';
    navBtn2.onclick = forest1Func;
    navBtn3.innerHTML = 'S. mountains';
    navBtn3.onclick = sMtnFunc;
    navBtn4.innerHTML = '';
    i = 0;
    txt = 'You find yourself standing on a dirt road in front of an admittedly odd statue of an angel. The road heads into the mountains to the north and the south. Opposite the statue, a path leads into a large forest to the west.  The rest of this message is just for testing the size of this textbox.  Hopefully it will be large enough to contain everything I need to say.';
    document.getElementById("dialogueBox").innerHTML = '';
    dialogueFunc();
}


document.onload = statueFunc();


// churchBtn.onclick = () => {
//     dialogueFunc(' church');
//     bgFunc('church',1,2);
// }

// estateBtn.onclick = () => {
//     dialogueFunc('n estate');
//     bgFunc('estate',1,3);
// }

// forestBtn.onclick = () => {
//     dialogueFunc(' forest');
//     bgFunc('forest',1,6);
// }

// gardenBtn.onclick = () => {
//     dialogueFunc(' garden');
//     bgFunc('garden',1,6);
// }

// greenhouseBtn.onclick = () => {
//     dialogueFunc(' greenhouse');
//     bgFunc('greenhouse',1,3);
// }

// hutBtn.onclick = () => {
//     dialogueFunc(' hut');
//     bgFunc('hut',1,3);
// }

// lakeBtn.onclick = () => {
//     dialogueFunc(' lake');
//     bgFunc('lake',1,7);
// }

// libraryBtn.onclick = () => {
//     dialogueFunc(' library');
//     bgFunc('library',1,3);
// }

// lighthouseBtn.onclick = () => {
//     dialogueFunc(' lighthouse');
//     bgFunc('lighthouse',1,2);
// }

// mountainBtn.onclick = () => {
//     dialogueFunc(' mountain');
//     bgFunc('mountain',1,4);
// }

// riverBtn.onclick = () => {
//     dialogueFunc(' river');
//     bgFunc('river',1,6);
// }

// towerBtn.onclick = () => {
//     dialogueFunc(' tower');
//     bgFunc('tower',1,4);
// }