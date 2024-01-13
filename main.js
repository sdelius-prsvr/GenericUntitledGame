// rng function to be used by other functions

function rNG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// constants for page elements
const viewer = document.querySelector('#viewer');
const dialogueBox = document.querySelector('#dialogueBox');

// constants for menu buttons
const menuBtn1 = document.querySelector('#menuBtn1');
const menuBtn2 = document.querySelector('#menuBtn2');
const menuBtn3 = document.querySelector('#menuBtn3');
const menuBtn4 = document.querySelector('#menuBtn4');

// constants for action buttons
const actBtn1 = document.querySelector('#actBtn1');
const actBtn2 = document.querySelector('#actBtn2');
const actBtn3 = document.querySelector('#actBtn3');
const actBtn4 = document.querySelector('#actBtn4');


// constants for navigation buttons
const navBtn1 = document.querySelector('#navBtn1');
const navBtn2 = document.querySelector('#navBtn2');
const navBtn3 = document.querySelector('#navBtn3');
const navBtn4 = document.querySelector('#navBtn4');

// function to change background
// viewer.style.backgroundImage=`${obj.bgImgUrl}`;

forest1 = {}

forest2 = {}

forest3 = {}

let i = 0
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
    txt = "The forest path has brought you to a clearing where sits an old castle.  Its battlements are worn and it's a little overgrown, but it looks habitable, possibly even inhabited.";
    console.log(bgFunc('nMtn1',1,3));
    dialogueFunc(txt, 35);
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


let statueObj = {
    navBtnLabels : {
        1 : 'N: Mountains',
        2 : 'W: Forest',
        3 : 'S: Mountains',
        4 : ''
    },
    navBtnFuncs : {
        1 : 'nMtnFunc',
        2 : 'forest1Func',
        3 : 'sMtnFunc',
        4 : ''
    },
    dialogueTxt : 'You find yourself standing on a dirt road in front of an admittedly odd statue of an angel. The road heads into the mountains to the north and the south. Opposite the statue, a path leads into a large forest to the west.  The rest of this message is just for testing the size of this textbox.  Hopefully it will be large enough to contain everything I need to say.'

}

// const locaFunc = (obj) => {
//     for btn of obj.navBtnLabels {

//     }
// }

const statueFunc = () =>{
    for (let i = 1; i < 4; i++)
	navBtn${i}.innerHTML = statueObj.navBtnLabels[i];
    // navBtn1.innerHTML = statueObj.navBtnLabels[1];
    // navBtn1.onclick = statueObj.navBtnFuncs[1];
    // navBtn2.innerHTML = 'W. forest';
    // navBtn2.onclick = forest1Func;
    // navBtn3.innerHTML = 'S. mountains';
    // navBtn3.onclick = sMtnFunc;
    // navBtn4.innerHTML = '';
    i = 0;
    txt = statueObj.dialogueTxt;
    document.getElementById("dialogueBox").innerHTML = '';
    dialogueFunc();
}


document.onload = statueFunc();