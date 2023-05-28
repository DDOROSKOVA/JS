let a = document.querySelector('a');

a.addEventListener('click', function () {

    console.log(document.querySelector('a'));

    const userText = prompt('Введите текс: задание выполнено');
    const userTextField = document.querySelector('a');
    userTextField.textContent = userText;
    console.log('Текст в a изменён на', userText);
})