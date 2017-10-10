var palette = document.getElementsByClassName('palette')[0];
var artArea = document.getElementsByClassName('artArea')[0];
var color = "";
var button = document.getElementsByTagName('button')[0];

artArea.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className = 'grid' && color === 'blue') {
    event.target.className = 'blue'
  }
  else if (event.target.className = 'grid' && color === 'red') {
    event.target.className = 'red'
  }
})

palette.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className === 'pblue') {
    color = 'blue';
  }
  else if (event.target.className === 'pred') {
    color = 'red';
  }
})

// button.addEventListener('click', (event) => {
//   event.preventDefault();
//   var butterflies = artArea.children.className
//   for (var i = 0; i < butterflies.length; i++) {
//     butterflies[i]
//   }
// })
