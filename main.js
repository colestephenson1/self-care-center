
// Now let's establish variables for querySelectors

var receiveMessageButton = document.querySelector('#receiveButton');
var clearButton = document.querySelector('.clear-button');
var affirmationRadio = document.querySelector('#affirmation');
var bigBox = document.querySelector('.big-box');

// Let's establish our arrays:
var affirmations = ['I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.',];

var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Dont let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.',];

var combinedArrays = affirmations.concat(mantras);

// Let's apply an event listener to the buttons

receiveMessageButton.addEventListener('click', showSelfCarePhrase);
clearButton.addEventListener('click', clearPhrase);

//Okay, now let's get into the JS

//First, our function to pull a random index position from the arrays
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

//Now our function to show a random affirmation or mantra when we hit the receive message button
function showSelfCarePhrase() {
  clearButton.classList.remove('hidden');
  bigBox.innerHTML ="";
  if(affirmationRadio.checked) {
    bigBox.innerHTML = `<p><em>${affirmations[getRandomIndex(affirmations)]}</em></p>`;
} else {
    bigBox.innerHTML = `<p><em>${mantras[getRandomIndex(mantras)]}</em></p>`;
  };
};

//Finally, let's clear the phrase and give an error message if there is no phrase currently present
function clearPhrase() {
  if(bigBox.innerHTML === `<img src="./assets/meditate.svg" alt="meditation icon">`) {
    bigBox.innerHTML = `<p><em>Error: Please select Affirmation or Mantra and hit Receive Message :)</em></p>`
    clearButton.classList.add('hidden');
} else {
    bigBox.innerHTML = `<img src='./assets/meditate.svg' alt='meditation icon'>`;
  };
};
