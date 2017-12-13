var palette = document.getElementsByClassName('palette')[0];
var artArea = document.getElementsByClassName('artArea')[0];
var color = "";
var button = document.getElementsByTagName('button')[0];


artArea.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className = 'grid' && color === 'blue') {
    event.target.className = 'blue'
  } else if (event.target.className = 'grid' && color === 'red') {
    event.target.className = 'red'
  }
})

palette.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className === 'pallete_Blue') {
    color = 'blue';
  } else if (event.target.className === 'pallete_Red') {
    color = 'red';
  }
})

button.addEventListener('click', (event) => {
  event.preventDefault();
  var gridReset = artArea.children
  for (var i = 0; i < gridReset.length; i++) {
    gridReset[i].className = 'grid'

  }
})