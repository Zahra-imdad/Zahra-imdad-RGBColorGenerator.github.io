function rgbColor(){
    var red= document.getElementById('red');
    var green= document.getElementById('green');
    var blue= document.getElementById('blue');

    var color1 = 'rgb('+red.value+','+ green.value+','+ blue.value+')';
    document.body.style.backgroundColor = color1;
    document.getElementById('box').value =color1

    red.nextSibling.textContent = red.value
    green.nextSibling.textContent = green.value
    blue.nextSibling.textContent = blue.value
}
document.getElementById('red').addEventListener('input',rgbColor)
document.getElementById('green').addEventListener('input',rgbColor)
document.getElementById('blue').addEventListener('input',rgbColor)

