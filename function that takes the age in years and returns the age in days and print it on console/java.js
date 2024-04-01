function convertAge() {
    var ageInYears = parseFloat(document.getElementById('age').value);
    var ageInDays = ageInYears * 365;
    console.log('Age in days:', ageInDays);
}