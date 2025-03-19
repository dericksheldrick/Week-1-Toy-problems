function calculateGrade(){
    let marks = parseInt(document.getElementById("marksInput").value);
    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';    
    } else if (marks >= 50){
        grade = 'C';
    }else if (marks >= 40){
        grade = 'D';
    } else {
        grade = 'E';
    }
    document.getElementById("gradeResult").innerHTML= `Grade: ${grade}`;
}
function checkSpeed() {
    let speed = parseInt(document.getElementById("speedInput").value);
    if (isNaN(speed) || speed < 0) {
        document.getElementById("speedResult").innerText = "Please enter a valid speed.";
        return;
    }
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed <= speedLimit) {
        document.getElementById("speedResult").innerText = "Ok";
        return;
    }
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    document.getElementById("speedResult").innerText = points > 12 ? "License suspended!" : `Points: ${points}`;
}
function calculateNetSalary(){
    let basicSalary = parseFloat(document.getElementById("salaryInput").value);
    let benefits = parseFloat(document.getElementById("benefitInput").value);
    if (isNaN(basicSalary) || basicSalary < 0 || isNaN(benefits) || benefits < 0) {
        document.getElementById("salaryOutput").innerText = "Please enter valid salary and benefit";
        return;
    }
    let grossSalary = basicSalary + benefits;
    let payee = grossSalary * 0.1;
    let nhifDeduction = grossSalary * 0.02;
    let nssfDeduction = grossSalary * 0.06;
    let netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
    document.getElementById("salaryResult").innerText = `Net Salary: ${netSalary.toFixed(2)}`;
}
function bubbleSort(){
    let arrayNumber = document.getElementById("numberInput").value.split(',').map(Number);
    
    if(arrayNumber.some(isNaN)){
        document.getElementById("arrayResult").innerText = "Please enter a valid number separated with a comma";
        return;
    }

    let len = arrayNumber.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arrayNumber[j] > arrayNumber[j + 1]) {
                [arrayNumber[j], arrayNumber[j + 1]] = [arrayNumber[j + 1], arrayNumber[j]];
            }  
        }
        
    }
    document.getElementById("arrayResult").innerText = `The new array: ${arrayNumber.join(',')}`;
    // console.log(arrayNumber)
    // console.log(len)

}
function calculateVolume(){
    let radius = parseFloat(document.getElementById("radiusInput").value);
    let height = parseFloat(document.getElementById("heightInput").value);
    if (isNaN(radius) || radius <= 0|| isNaN(height) || height <= 0){
        document.getElementById("volumeResult").innerText = "Please enter valid radius and height ";
        return;
    }
    let volume = Math.PI * Math.pow(radius, 2) * height;
    document.getElementById("volumeResult").innerText = `Volume: ${volume.toFixed(4)}`;
}
function generateStaircase(){
    let n = parseInt(document.getElementById("stairInput").value);
    if (isNaN(n) || n <= 0){
        document.getElementById("stairResult").innerText = "Please enter a valid positive number.";
        return;  
    }
    let result = '';
    for (let i = 0; i <= n; i++) {
        result += '#'.repeat(i) + '\n';
        
    }
    document.getElementById("stairResult").innerText = result;
}