const boxColors = document.querySelectorAll('.box-color');

boxColors.forEach( box => {
  box.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'black';
  })
});