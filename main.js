// constants for menu buttons
const cluesBtn = document.querySelector('#cluesBtn');
cluesBtn.onclick = cluesFunc
const itemsBtn = document.querySelector('#itemsBtn');
itemsBtn.onclick = itemsFunc
const notesBtn = document.querySelector('#notesBtn');
notesBtn.onclick = notesFunc

// constants for action buttons
const enterBtn = document.querySelector('#enterBtn');
enterBtn.onclick = enterFunc
const fleeBtn = document.querySelector('#fleeBtn');
fleeBtn.onclick = fleeFunc
const itemBtn = document.querySelector('#itemBtn');
itemBtn.onclick = itemFunc
const searchBtn = document.querySelector('#searchBtn');
searchBtn.onclick = searchFunc
const talkBtn = document.querySelector('#talkBtn');
talkBtn.onclick = talkFunc

// constants for location buttons
const castleBtn = document.querySelector('#castleBtn');
castleBtn.onclick = bgFunc(castle)
const churchBtn = document.querySelector('#churchBtn');
churchBtn.onclick = churchFunc
const estateBtn = document.querySelector('#estateBtn');
estateBtn.onclick = estateFunc
const forestBtn = document.querySelector('#forestBtn');
forestBtn.onclick = forestFunc
const gardenBtn = document.querySelector('#gardenBtn');
gardenBtn.onclick = gardenFunc
const greenhouseBtn = document.querySelector('#greenhouseBtn');
greenhouseBtn.onclick = greenhouseFunc
const hutBtn = document.querySelector('#hutBtn');
hutBtn.onclick = hutFunc
const lakeBtn = document.querySelector('#lakeBtn');
lakeBtn.onclick = lakeFunc
const libraryBtn = document.querySelector('#libraryBtn');
libraryBtn.onclick = libraryFunc
const lighthouseBtn = document.querySelector('#lighthouseBtn');
lighthouseBtn.onclick = lighthouseFunc
const mountainBtn = document.querySelector('#mountainBtn');
mountainBtn.onclick = mountainFunc
const riverBtn = document.querySelector('#riverBtn');
riverBtn.onclick = riverFunc
const towerBtn = document.querySelector('#towerBtn');
towerBtn.onclick = towerFunc

// rng function to be used by other functions

function rNG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// location function to change background to random image of type

const bgFunc(loc) {
    
}