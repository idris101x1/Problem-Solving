function calculateAverage() {
    
    var numbersInput = document.getElementById('numbers').value;
    
    
    var numbersArray = numbersInput.split(',').map(Number);
    
    
    if (numbersArray.length < 10) {
        alert('Please enter at least 10 numbers.');
        return;
    }
    
    
    var sum = numbersArray.reduce(function(a, b) { return a + b; }, 0);
    
    
    var average = sum / numbersArray.length;
    
    
    document.getElementById('result').innerHTML = 'The average is: ' + average.toFixed(2);
}
