// Array of emojis  ----->
const emojis = ["🌎", "🌎", "🏈", "🏈", "🌟", "🌟", "❤️", "❤️", "🍕", "🍕","🎸", "🎸", "🎮", "🎮", "🚀", "🚀"];

// Shuffle the emojis array ----->
let shuffleEmojis = emojis.sort(() => (Math.random() > .5) ? 2: -1);

// Loop through the shuffled emojis to create card elements ----->
for (let i =0; i<emojis.length; i++){
  let box = document.createElement('div')
  box.className = 'item';
  box.innerHTML = shuffleEmojis[i]

  // Add click event listener to each card----->
  box.onclick = function(){
    this.classList.add('boxOpen')
    setTimeout(function(){
      if(document.querySelectorAll('.boxOpen').length > 1) {
        if (document.querySelectorAll('.boxOpen')[0].innerHTML ==
        document.querySelectorAll('.boxOpen')[1].innerHTML){
         document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch') 
         document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

         document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
         document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

         // Check if all cards are matched----->
         if(document.querySelectorAll('.boxMatch').length == emojis.length ){
          alert('You win!')
         }
        }else {
          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
         document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
        }
        }
  
    }, 500);
  }

   // Append each card to the game container----->
   document.querySelector('.game').appendChild(box);
  }
  document.querySelector('.reset').addEventListener('click', function() {
    window.location.reload();
  });
   