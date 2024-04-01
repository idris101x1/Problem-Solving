function checkNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);
    var sum = num1 + num2 + num3 + num4;
    var result = sum > 350;

    document.getElementById('result').innerHTML = 'The sum is: ' + sum + '. Result: ' + result;
}
