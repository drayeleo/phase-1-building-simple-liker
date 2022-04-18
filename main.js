// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach(heart => {
  heart.addEventListener('click', (event) => likeHandler(event))
});

function likeHandler(event) {
  // console.log("Clicked");
  // console.log(event.target.textContent);
  //console.log(mimicServerCall());
  if (event.target.textContent === EMPTY_HEART) {
    mimicServerCall()
    .then( () => {
      console.log("Contacted Server");
      event.target.textContent = FULL_HEART;
      event.target.classList.add('activated-heart');
    })
    .catch( () => {
      console.log("Error");
      const errorMessage = document.querySelector('#modal');
      //console.log(errorMessage);
      errorMessage.classList.remove('hidden');
      setTimeout( () => errorMessage.classList.add('hidden'), 3000);
    })
  } else {
    event.target.textContent = EMPTY_HEART;
    event.target.classList.remove('activated-heart');
  }
  
  
  
  //event.target.textContent === EMPTY_HEART ? event.target.textContent = FULL_HEART : event.target.textContent = EMPTY_HEART;
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
