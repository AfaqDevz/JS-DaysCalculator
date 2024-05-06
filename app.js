//Made by Afaq
let dategiven = prompt('Put a date in this format (14 August 2024)')
let daysfinder = new Date(dategiven);
let today = new Date();
let diff = daysfinder - today
let remain = Math.round(diff/ (1000 * 60 * 60 * 24));

alert(`Days left: ${remain}`)