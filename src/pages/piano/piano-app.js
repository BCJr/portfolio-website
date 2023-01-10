/* ----- Handle Key Clicks and Display buttons ----- */

const pianoKeys = document.querySelectorAll('.key')
const displayScreen = document.querySelector('p')
const displayResult = [];

for (let keyNote = 1; keyNote <= pianoKeys.length; keyNote++) {
        let pianoKey = document.getElementById(keyNote);

        pianoKey.addEventListener('click', () => runMachine(keyNote))
}

async function runMachine (keyNote) {
    
    await playSound(keyNote);
    updateDisplay(keyNote)

}

async function playSound (keyNote) {
    if (keyNote <= 9) {
        keyNote = '0' + keyNote
    }
    let audioUrl = 'keys/key' + keyNote + '.mp3'
    new Audio(audioUrl).play()
}

function updateDisplay (keyNote) {
    if (displayResult.length < 35) {
        displayResult.push(keyNote)
    } else {
        displayResult.shift()
        displayResult.push(keyNote)
    }
    displayScreen.innerText = '[ ' + displayResult.join(', ') + ' ]'
}

function clearDisplay () {
    let oldDisplay = document.querySelector('p')
    oldDisplay.innerText = 'Cleared'
    for (let index = 0; index < displayResult.length; index++) {
        displayResult.splice(index, 1)
    }
    displayResult.length = 0;

};

async function displayToggle() {

    if (displayScreen.style.visibility !== 'hidden') {
        displayScreen.style.visibility = 'hidden'
    } else {
        displayScreen.style.visibility = 'visible'
    }
}



