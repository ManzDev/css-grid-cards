import displacejs from 'displacejs';

document.querySelectorAll('.card').forEach(e => {

  // At first, flip all cards
  e.classList.add('flipped');

  // on DoubleClick, flip card
  e.addEventListener('dblclick', c => c.currentTarget.classList.toggle('flipped'));
  
  // on mouseWheel, rotate card
  e.addEventListener('wheel', c => c.currentTarget.style.transform = `rotate(${c.deltaY / 10}deg)`);

  // enable drag and drop
  displacejs(e);
});