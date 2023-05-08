const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', function(event) {
  // тело обработчика 1
  this.textContent = 'Это событие:' + event.type;
  console.log('x' + event.clientX, 'y' + event.clientY);
  // конец тела обработчика 1
})

  
