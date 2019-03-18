/* SCRIPT FOR GREAT SPEECHES PAGE
  - creates interactivity for donation and nav buttons based on speech data
*/

// variables and arrays
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt,
    consoleDisplay = document.getElementById('ConsoleDisplay');


/* getAuthorAndYearString
  - generates string based on current speech author and year
*/
function getAuthorAndYearString(speech){
  return 'This speech was written by ' + speech.author + ' in ' + speech.year + '. <br><br>';
};


/* displayBCEString
  - compares BCE data and returns appropriate string
*/
function displayBCEString(speech){
  if(speech.yearIsBCE === true){
  consoleDisplay.innerHTML += 'This speech took place before the common era. <br><br>';
  } else {
    consoleDisplay.innerHTML += 'This speech took place during the common era. <br><br>';
  }
  };


/* getOldestOrYoungestString
  - finds oldest and newest speech years
  - compares current speech to find if it is either oldest or newest
*/
function getOldestOrYoungestString(speech){
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;
  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  };
  if(speech.year === oldest){
    consoleDisplay.innerHTML += 'This is the oldest speech on the page. <br><br>';
  } else if(speech.year === newest){
    consoleDisplay.innerHTML += 'This is the most recent speech on the page. <br><br>';
  } else {
    consoleDisplay.innerHTML += 'This speech is neither the most recent nor the oldest on the page. <br><br>';
  }
};


/* CODE FOR DONATE BUTTON
  - creates new h3
  - generates window prompt for donation amount
  - populates h3 with string according to donation level
*/
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});


/* CODE FOR NAV BUTTONS
  uses pre-identified functions to do the following when clicked:
  - finds and displays author data in console display
  - displays BCE data
  - compares date of speech with other speeches
*/
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  let results = getAuthorAndYearString(speechesArray[0]);
  consoleDisplay.innerHTML = results;

  displayBCEString(speechesArray[0]);

  getOldestOrYoungestString(speechesArray[0]);
});


document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  let results = getAuthorAndYearString(speechesArray[1]);
  consoleDisplay.innerHTML = results;

  displayBCEString(speechesArray[1]);

  getOldestOrYoungestString(speechesArray[1]);
});


document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  let results = getAuthorAndYearString(speechesArray[2]);
  consoleDisplay.innerHTML = results;

  displayBCEString(speechesArray[2]);

  getOldestOrYoungestString(speechesArray[2]);
});
