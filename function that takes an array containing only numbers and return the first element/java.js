function findFirstElement() {
    var numberArray = document.getElementById('numberArray').value.split(',').map(Number);
    var firstElement = numberArray[0];
    document.getElementById('result').innerHTML = 'The first element is: ' + firstElement;
}
