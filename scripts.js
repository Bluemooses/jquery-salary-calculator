$(document).ready(pageReady);
let employeesEntered = [];


function pageReady() {
    $('.masterSubmit').on('click', inputCollect); //If we click masterSubmit class, run inputCollect function.  This is getting intuitive!  
    $('frameWork').on('click', appendEmployee);
}

function inputCollect() {
    let employeeUnit = { //An employee object.
        firstNameEntry: $('#firstName').val(), //these variables will allow us to acces our input.
        lastNameEntry: $('#lastName').val(),
        iDEntry: $('#iD').val(),
        jobTitleEntry: $('#jobTitle').val(),
        annualSalaryEntry: $('#annualSalary').val()
    }
    employeesEntered.push(employeeUnit); //we are pushing the employee on click as an object to a new array of objects.
    console.log("Thanks for logging your employee. Here is employeesEntered:", employeesEntered); //Nice.  This works and is super exciting.
    $('this').toggleClass('inputCollector');
}



function appendEmployee(employeeUnit) {
    console.log("In appendEmployee");
    if (employeeUnit.val() == ' ') {
        console.log("Please fill in all information about employee");
        alert("Bork bork bork")
    } else {
        for (let i = 0; i < employeesEntered; i++) {
            $('.frameWork').append(`
        <li>${employeeUnit[i].firstNameEntry}</li>
        <li>${employeeUnit[i].lastNameEntry}</li>
        <li>${employeeUnit[i].iDEntry}</li>
        <li>${employeeUnit[i].jobTitleEntry}</li>
        <li>${employteeUnit[i].annualSalaryEntry}</li>
        <button class ="deleteBtn">Delete</button>        
        `)
        }
        console.log("inside of appendEmployee");

    }
}

// function calculateMonthlyCosts(employeeUnit) {

// }