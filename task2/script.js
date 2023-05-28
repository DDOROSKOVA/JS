const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', function () {
   alert('Метод для вывода сообщения в веб-консоль');
})

const alertMsg = document.querySelector('#alert');

alertMsg.addEventListener('click', function () {
   alert('Позволяет вывести какую-либо информацию во всплывающем окне в браузере');
})

const promptDg = document.querySelector('#prompt');

promptDg.addEventListener('click', function () {
   alert('Служит для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена»');
})



console.log(document.querySelector('a'));

const userText = prompt('Введите текс: задание выполнено');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст в a изменён на', userText);