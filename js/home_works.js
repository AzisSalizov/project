document.getElementById("gmail_button").addEventListener('click', function () {
    const gmailInp = document.getElementById('gmail_input').value;
    const gmailResult = document.getElementById('gmail_result');

    const gmailReg = /^[a-zA-Z0-9._%+-]{5,}@gmail\.com$/;

    if (gmailReg.test(gmailInp)) {
        gmailResult.textContent = 'Вы успешно прошли проверку!';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'Вы ввели не корректное значение!';
        gmailResult.style.color = 'red';
    }
})
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let position = 0;

function moveBlock() {
    position += 0.4;
    if (position >= parentBlock.clientWidth - childBlock.clientWidth) {
        position = 0;
    }
    childBlock.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(moveBlock);
}

requestAnimationFrame(moveBlock);
