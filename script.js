
class GuitarString {
    constructor(start, scale) {
        this.octave = makeOctave(start, scale);
    }
}

function reloadSelect(scale) {
    let options = "";
    for (let i = 0; i < scale.length; i++) {
        options += `<option value="${scale[i]}">${scale[i]}</option>`
    }
    notes.innerHTML = options;
}

function rewrite() {
    let note = guitarString.octave[randomNumber(0, guitarString.octave.length - 1)];
    let fret = guitarString.octave.indexOf(note);
    question.innerHTML = `Find ${note} on ${notes.value} string`;
    answer.innerHTML = `<p>${fret}. and ${fret + 12}. fret</p>`;
}

function makeOctave(start, scale) {
    let octave = [...scale];
    let index = octave.indexOf(start);
    for (let i = 0; i < index; i++) {
        octave.push(octave[0]);
        octave.splice(0, 1);
    }
    octave.push(start)
    return octave;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let sharps = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let flats = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
let signature = document.getElementById('signature');
let notes = document.getElementById('notes');
let question = document.getElementById('question');
let answer = document.getElementById('answer');

reloadSelect(sharps);

let guitarString = new GuitarString(notes.value, signature.value == "sharps" ? sharps : flats);

rewrite();

signature.addEventListener("change", e => {
    reloadSelect(signature.value == "sharps" ? sharps : flats);
    rewrite();
})

notes.addEventListener("change", e => {
    guitarString = new GuitarString(notes.value, signature.value == "sharps" ? sharps : flats);
    rewrite();
})

document.getElementById('showBttn').addEventListener("click", e => {
    answer.style.color = 'black';
})
document.getElementById('nextBttn').addEventListener("click", e => {
    answer.style.color = 'white';
    rewrite();
})






