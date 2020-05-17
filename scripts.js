$(document).ready(pageReady);
let employeesEntered = [];
// let monthlyCosts = []; Revist later.
let monthlyCost = 0;

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
    // $('this').toggleClass(inputCollector);
    appendEmployee();
    calcMonthlyCost();

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
            <td><button id = "deleteBtn">Delete</button></td> //APPENDS our variables ^ to their respective fields
        </tr>                                                 //Also creates a delete button to be displayed inline with other appendages. :]
    
        `)
    }
}

function calcMonthlyCost() {
    let annualSalaryTotal = 0;
    for (let i = 0; i < employeesEntered.length; i++) {
        annualSalaryTotal += employeesEntered[i].annualSalaryEntry << 0; //Adds all of the element annualSalaryEntry at index until for loop iterates through the entire array.
        let monthlyCost = annualSalaryTotal / 12;
        console.log("Monthly cost of employees on bankroll:", monthlyCost);
        if (monthlyCost > 20000) {
            $('.calculatorSalary').css("background-color", "red"); //this is a really good example of making sure you know what you're targeting.
            console.log("You are spending far too much money", monthlyCost) //I tried a bunch to get it to target a # instead of a class.  Which just made for a bad time.
            return monthlyCost;
        } else {
            return monthlyCost;
        }
    }
};

function deleteField() {

}

// 