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

let castle = ()=>{};
let forestDawn = ()=>{};
let forestDusk1 = ()=>{};
let forestDusk2 = ()=>{};
let forestHut1 = ()=>{};
let forestHut2 = ()=>{};
let forestLakeC = ()=>{};
let forestLakeN = ()=>{};
let forestLakeS = ()=>{};
let forestLostN1 = ()=>{};
let forestLostN2 = ()=>{};
let forestLostN3 = ()=>{};
let forestLostN4 = ()=>{};
let forestLostN5 = ()=>{};
let forestLostN6 = ()=>{};
let forestLostS1 = ()=>{};
let forestLostS2 = ()=>{};
let forestLostS3 = ()=>{};
let forestLostS4 = ()=>{};
let forestLostS5 = ()=>{};
let forestLostS6 = ()=>{};
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

let forestLostNR = ()=>{};
let forestLostSR = ()=>{};

let fullMoonHigh = ()=>{};
let fullMoonLow = ()=>{};
let newMoonHigh = ()=>{};
let newMoonLow = ()=>{};

let nMtns1 = ()=>{};
let nMtnsLake1 = ()=>{};
let nMtnsLake2 = ()=>{};
let nMtnsRiver1 = ()=>{};
let nMtnsRiver2 = ()=>{};
let tower = ()=>{};
let towerLibrary = ()=>{};

let lighthouse = ()=>{};
let sMtns1 = ()=>{};
let sMtnsLakeDay = ()=>{};
let sMtnsLakeDusk = ()=>{};
let sMtnsLakeNight = ()=>{};
let sMtnsRiver = ()=>{};

let search = ()=>{};

// initialize variables to be used by functions
let statue1VisitCount = 0;

let estateApproachVisitCount = 0;
let estateGarden1VisitCount = 0;
let estateGarden2VisitCount = 0;
let estateGarden3VisitCount = 0;
let estateGarden4VisitCount = 0;
let greenhouseExtVisitCount = 0;
let greenhouseIntVisitCount = 0;

let castleVisitCount = 0;
let forestDawnVisitCount = 0;
let forestDusk1VisitCount = 0;
let forestDusk2VisitCount = 0;
let forestHut1VisitCount = 0;
let forestHut2VisitCount = 0;
let forestLakeCVisitCount = 0;
let forestLakeNVisitCount = 0;
let forestLakeSVisitCount = 0;
let forestLostN1VisitCount = 0;
let forestLostN2VisitCount = 0;
let forestLostN3VisitCount = 0;
let forestLostN4VisitCount = 0;
let forestLostN5VisitCount = 0;
let forestLostN6VisitCount = 0;
let forestLostS1VisitCount = 0;
let forestLostS2VisitCount = 0;
let forestLostS3VisitCount = 0;
let forestLostS4VisitCount = 0;
let forestLostS5VisitCount = 0;
let forestLostS6VisitCount = 0;
let forestNight1VisitCount = 0;
let forestNight2VisitCount = 0;
let forestNight3VisitCount = 0;
let forestPath1VisitCount = 0;
let forestPath2VisitCount = 0;
let forestPath3VisitCount = 0;
let forestPath4VisitCount = 0;
let forestRiver1VisitCount = 0;
let forestRiver2VisitCount = 0;
let forestRiver3VisitCount = 0;

let forestLostNRVisitCount = 0;
let forestLostSRVisitCount = 0;

let fullMoonHighVisitCount = 0;
let fullMoonLowVisitCount = 0;
let newMoonHighVisitCount = 0;
let newMoonLowVisitCount = 0;

let nMtns1VisitCount = 0;
let nMtnsLake1VisitCount = 0;
let nMtnsLake2VisitCount = 0;
let nMtnsRiver1VisitCount = 0;
let nMtnsRiver2VisitCount = 0;
let towerVisitCount = 0;
let towerLibraryVisitCount = 0;

let lighthouseVisitCount = 0;
let sMtns1VisitCount = 0;
let sMtnsLakeDayVisitCount = 0;
let sMtnsLakeDuskVisitCount = 0;
let sMtnsLakeNightVisitCount = 0;
let sMtnsRiverVisitCount = 0;

let currentLostNum = 0;
let previousLostNum = 0;
let lostCount = 0;

let currentLocation = '';
let previousLocation = '';

//define functions for each in-game location
statue1 = ()=>{
    statue1VisitCount ++;
    previousLocation = currentLocation;
    currentLocation = 'statue1';
    dialogueHeader.innerHTML = 'Statue at the Crossroads';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/statue1.jpeg')`;
    navBtn1.innerHTML = 'N. Foothills';
    navBtn2.innerHTML = 'W. Forest Path';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = 'S. Mountains';
    navBtn1.onclick = nMtns1;
    navBtn2.onclick = forestPath1;
    navBtn3.onclick = '';
    navBtn4.onclick = sMtns1;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `You find yourself standing on a dirt road in front of an admittedly odd statue of an angel. The road heads into the foothills of the mountains to the North, while to the South it enters another range which rises sharply with imposing peaks. Opposite the statue, a path leads West into a large forest.`;
    dialogueFunc();
};

nMtns1 = ()=>{
    nMtns1VisitCount ++;
    previousLocation = currentLocation;
    currentLocation = 'nMtns1';
    dialogueHeader.innerHTML = 'The Northern Mountains: Foothills';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/nMtns/nMtns1.jpeg')`;
    navBtn1.innerHTML = 'N. Mountains';
    navBtn2.innerHTML = '';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = 'S. To Statue';
    navBtn1.onclick = nMtnsRiver1;
    navBtn2.onclick = '';
    navBtn3.onclick = '';
    navBtn4.onclick = statue1;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `After a long hike you are in the foothills of the sloping Northern Mountains.  The road continues away and to the North beyond your sight.  Behind you the road goes back to the crossroads and its uncanny statue.`;
    dialogueFunc();
};

nMtnsRiver1 = ()=>{
    nMtnsRiver1VisitCount++;
    previousLocation = currentLocation;
    currentLocation = 'nMtnsRiver1';
    dialogueHeader.innerHTML = 'River in the Northern Mountains';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/nMtns/nMtnsRiver1.jpeg')`;
    navBtn1.innerHTML = '';
    navBtn2.innerHTML = 'W. Riverbank';
    navBtn3.innerHTML = 'E. Riverbank';
    navBtn4.innerHTML = 'S. Foothills';
    navBtn1.onclick = '';
    navBtn2.onclick = nMtnsRiver2;
    navBtn3.onclick = nMtnsLake1;
    navBtn4.onclick = nMtns1;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `The road was rather winding, though you're not sure why - it seemed to go over every hill and around none of them.  Before you a river rages its way West with no crossings in sight.  You're at a T intersection: two branches follow the riverbank East and West, while one goes back South.`;
    dialogueFunc();
};

nMtnsRiver2 = ()=>{
    nMtnsRiver2VisitCount++;
    previousLocation = currentLocation;
    currentLocation = 'nMtnsRiver2';
    dialogueHeader.innerHTML = 'River in the Northern Mountains';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/nMtns/nMtnsRiver2.jpeg')`;
    navBtn1.innerHTML = '';
    navBtn2.innerHTML = 'W. Riverbank';
    navBtn3.innerHTML = 'E. Riverbank';
    navBtn4.innerHTML = '';
    navBtn1.onclick = '';
    navBtn2.onclick = forestLakeN;
    navBtn3.onclick = nMtnsRiver1;
    navBtn4.onclick = '';	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `You follow the riverbank west for some distance.  The river has become wide and deep, and as a result much calmer here.  There's a sheer cliff to the south, and the river is still too swift to cross.  You can go back east or continue west.`;
    dialogueFunc();
};

nMtnsLake1 = ()=>{
    nMtnsLake1VisitCount++;
    dialogueHeader.innerHTML = 'Lake in the Northern Mountains, South Shore';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/nMtns/nMtnsLake1.jpeg')`;
    navBtn1.innerHTML = '';
    navBtn2.innerHTML = 'W. Riverbank';
    navBtn3.innerHTML = 'E. Lakeshore';
    navBtn4.innerHTML = '';
    navBtn1.onclick = '';
    navBtn2.onclick = nMtnsRiver1;
    navBtn3.onclick = nMtnsLake2;
    navBtn4.onclick = '';	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `You've walked for quite some time, and come upon a lake which seems to be the source of the river.  The road, now more of a path, wends its way along the lakeshore to the East with a sheer cliff to the South and the lake itself to the North.  You can either go back West along the riverbank or carry on.`;
    dialogueFunc();
};

nMtnsLake2 = ()=>{
    nMtnsLake2VisitCount++;
    dialogueHeader.innerHTML = 'Lake in the Northern Mountains, East Shore';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/nMtns/nMtnsLake2.jpeg')`;
    navBtn1.innerHTML = 'N. Lakeshore';
    navBtn2.innerHTML = '';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = 'S. Lakeshore';
    navBtn1.onclick = tower;
    navBtn2.onclick = '';
    navBtn3.onclick = '';
    navBtn4.onclick = nMtnsLake1;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `The lakeshore has come around so that you are facing West now as you look out across it.  The sun is beginning to dip low towards the horizon.  While the cliff has given way, thick brambles block the way East.  Your only option is the road: continue to follow it North along the lakeshore, or turn back South.`;
    dialogueFunc();
};

tower = ()=>{
    towerVisitCount++;
    dialogueHeader.innerHTML = 'Tower along the Lake, Northern Mountains';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/nMtns/tower.jpeg')`;
    navBtn1.innerHTML = '';
    navBtn2.innerHTML = '';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = 'S. Lakeshore';
    navBtn1.onclick = '';
    navBtn2.onclick = '';
    navBtn3.onclick = '';
    navBtn4.onclick = nMtnsLake2;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = 'Enter';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = towerLibrary;
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `Following an inlet on the now convoluted North shoreline, you are amazed to see a tower.  You're amazed not only that you didn't see it sooner, but by its height and impossible architecture.  Still, there's something peaceful about the way the lights of the tower compete with the waning daylight behind it.`;
    dialogueFunc();
};

towerLibrary = ()=>{
    towerLibraryVisitCount++;
    dialogueHeader.innerHTML = 'Tower Library, Lake in Nothern Mountains';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/nMtns/towerLibrary.jpeg')`;
    navBtn1.innerHTML = '';
    navBtn2.innerHTML = '';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = '';
    navBtn1.onclick = '';
    navBtn2.onclick = '';
    navBtn3.onclick = '';
    navBtn4.onclick = '';
    actBtn1.innerHTML = 'Search';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = 'Leave';
    actBtn4.innerHTML = '';
    actBtn1.onclick = search;
    actBtn2.onclick = '';
    actBtn3.onclick = tower;
    actBtn4.onclick = '';
    i=0
    diaTxt = `You enter the tower and find yourself inside a grand library.  You're certain there were many other windows and rooms to this tower, but the only door is the one you entered by.`;
    dialogueFunc();
};

forestPath1 = ()=>{
    forestPath1VisitCount++;
    dialogueHeader.innerHTML = 'Forest Entrance';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/forest/forestPath1.jpeg')`;
    navBtn1.innerHTML = '';
    navBtn2.innerHTML = 'W. Forest Path';
    navBtn3.innerHTML = 'E. To Statue';
    navBtn4.innerHTML = '';
    navBtn1.onclick = '';
    navBtn2.onclick = forestPath2;
    navBtn3.onclick = statue1;
    navBtn4.onclick = '';	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `A brief walk has brought to the edge of the forest.  The path continues westward into the forest for some distance, winding away from your sight.  Behind you, the path goes East to the crossroad and its statue.`;
    dialogueFunc();
};

forestPath2 = ()=>{
    forestPath2VisitCount++;
    dialogueHeader.innerHTML = 'Forest Path';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/forest/forestPath2.jpeg')`;
    navBtn1.innerHTML = 'N. Forest Path';
    navBtn2.innerHTML = 'W. Enter Forest';
    navBtn3.innerHTML = 'E. Forest Path';
    navBtn4.innerHTML = 'S. Enter Forest';
    navBtn1.onclick = forestPath3;
    navBtn2.onclick = forestLostSR;
    navBtn3.onclick = forestPath1;
    navBtn4.onclick = forestLostSR;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `You've walked so far into the forest you can't see any sign of the edge or entrance but the path you came by. Here, that path has turned to the North - if you have your bearings right. You can also see what might be a trail through the trees to the West and South, though you can't be sure until you look.`;
    dialogueFunc();
};

forestPath3 = ()=>{
    forestPath3VisitCount++;
    dialogueHeader.innerHTML = 'Forest Path';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/forest/forestPath3.jpeg')`;
    navBtn1.innerHTML = 'N. Forest Path';
    navBtn2.innerHTML = 'W. Forest';
    navBtn3.innerHTML = 'E. Forest Path';
    navBtn4.innerHTML = 'S. Forest';
    navBtn1.onclick = forestPath3;
    navBtn2.onclick = forestLostSR;
    navBtn3.onclick = forestPath1;
    navBtn4.onclick = forestLostSR;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `You've walked so far into the forest you can't see any sign of the edge or entrance but the path you came by. Here, that path has turned to the North - if you have your bearings right. You can also see a way through the trees to the West and South, though the path is much less clear there.`;
    dialogueFunc();
};

forestRiver1 = ()=>{
    forestRiver1VisitCount++;
    dialogueHeader.innerHTML = 'Forest Path';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/forest/forestPath1.jpeg')`;
    navBtn1.innerHTML = 'N. Forest Path';
    navBtn2.innerHTML = 'W. Enter Forest';
    navBtn3.innerHTML = 'E. Forest Path';
    navBtn4.innerHTML = 'S. Leave Pathway';
    navBtn1.onclick = forestPath3;
    navBtn2.onclick = forestLostSR;
    navBtn3.onclick = forestPath1;
    navBtn4.onclick = forestLostSR;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `You've walked so far into the forest you can't see any sign of the edge or entrance but the path you came by. Here, that path has turned to the North - if you have your bearings right. You can also see a way through the trees to the West and South, though the path is much less clear there.`;
    dialogueFunc();
};

forestLostSR = ()=>{
    lostCount ++
    previousLostNum = currentLostNum;
    if (previousLostNum = 0) {
        currentLostNum = rNG(1, 6);
        switch(currentLostNum){
            case '1':
                forestLostS1;
                break;
            case '2':
                forestLostS2;
                break;
            case '3':
                forestLostS3;
                break;
            case '4':
                forestLostS4;
                break;
            case '5':
                forestLostS5;
                break;
            case '6':
                forestLostS6;
                break;
        }
    } else {
        currentLostNum = rNG (1, 11);
        switch(currentLostNum){
            case '1':
                forestLostS1;
                break;
            case '2':
                forestLostS2;
                break;
            case '3':
                forestLostS3;
                break;
            case '4':
                forestLostS4;
                break;
            case '5':
                forestLostS5;
                break;
            case '6':
                forestLostS6;
                break;
            case '7':
                lostCount = 0;
                currentLostNum = 0;
                forestPath2;
                break;
            case '8':
                lostCount = 0;
                currentLostNum = 0;
                forestRiver1;
                break;
            case '9':
                lostCount = 0;
                currentLostNum = 0;
                forestRiver2;
                break;
            case '10':
                lostCount = 0;
                currentLostNum = 0;
                forestRiver3;
                break;
            case '11':
                lostCount = 0;
                currentLostNum = 0;
                forestHut1;
                break;
        }
    }
};

sMtns1 = ()=>{
    dialogueHeader.innerHTML = 'Southern Mountains';
    dialogueText.innerHTML = '';
    viewer.style.backgroundImage = `url('assets/backgrounds/sMtns/sMtns1.jpeg')`;
    navBtn1.innerHTML = 'N. To Statue';
    navBtn2.innerHTML = '';
    navBtn3.innerHTML = '';
    navBtn4.innerHTML = 'S. Mountains';
    navBtn1.onclick = statue1;
    navBtn2.onclick = '';
    navBtn3.onclick = '';
    navBtn4.onclick = sMtnsLakeDay;	
    actBtn1.innerHTML = '';
    actBtn2.innerHTML = '';
    actBtn3.innerHTML = '';
    actBtn4.innerHTML = '';
    actBtn1.onclick = '';
    actBtn2.onclick = '';
    actBtn3.onclick = '';
    actBtn4.onclick = '';
    i=0
    diaTxt = `The sharp peaks of the Southern Mountains rise before you.  You're a bit tired from your long walk, but after a short rest you feel ready to go on. Ahead, the road goes around a hill and disappears.  Behind you the strange statue, long out of sight, stands sentinel over the crossroads.`;
    dialogueFunc();
};

document.onload = statue1();