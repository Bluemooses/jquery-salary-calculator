$(document).ready(pageReady);
let employeesEntered = [];


function pageReady() {
    $('.masterSubmit').on('click', inputCollect); //If we click masterSubmit class, run inputCollect function.  This is getting intuitive!  
    $('#iAppend').on('click', appendEmployee);
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
    appendEmployee();
}


function appendEmployee() {
    console.log("In appendEmployee");

    for (let i = 0; i < employeesEntered.length; i++) {
        // if ($('this'.val() = ' ')) { //Here we have an array of objects. I want to cycle through.  If any elements are empty we will bork. (hopefully???)
        //     console.log("Please fill in all information about employee");
        //     alert("Bork bork bork")
        // } else {

        $('#iAppend').append(`
        <tr>
            <td>${employeesEntered[i].firstNameEntry}</td>
            <td>${employeesEntered[i].lastNameEntry}</td>
            <td>${employeesEntered[i].iDEntry}</td>  
            <td>${employeesEntered[i].jobTitleEntry}</td>
            <td>${employeesEntered[i].annualSalaryEntry}</td>
           
        </tr>
    
        `)
    }
}




// function calculateMonthlyCosts(employeeUnit) {

// }