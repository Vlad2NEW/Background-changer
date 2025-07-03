const button = document.getElementById('btn');
const color = document.querySelector('.color');

const colors = ['#ff5733', '#f9ff33', '#3371ff', 'red', 'green', 'rgb(85, 255, 51)'];

const hex = [
   '0',  '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
]

button.addEventListener('click', () => {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

});

function generateHex(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
