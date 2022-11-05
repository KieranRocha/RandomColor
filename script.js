const hex = [0,1,2,3,4,5,6,7,8,9,"A","B",'C','D','E','F']

const btn = document.querySelector('.botao');
const colorName = document.querySelector('.colorName');
const random = document.querySelector('.change');
const hexRandom = document.querySelector('.change1');
btn.addEventListener("click", function() {

    let hexColor = "#"
    for (i = 0; i<6; i++) {         // i < 6 hex maximum nunber of elements is six
        hexColor += hex[randomColor()] 
    }  


    document.body.style.backgroundColor = hexColor;
    colorName.textContent = hexColor;
    colorName.style.color = hexColor;
    random.style.color = hexColor;
    hexRandom.style.color = hexColor;
})

function randomColor() {
    return Math.floor(Math.random()* hex.length);
}