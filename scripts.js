$(document).ready(pageReady);
class Employee { //after complete base goals am striving for more efficiency while using a constructor function.
    constructor(firstName, lastName, iD, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.iD = iD;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}

let employeesEntered = [];
let annualLabor = 0;

function pageReady() {
    $('.masterSubmit').on('click', inputCollect); //If we click masterSubmit class, run inputCollect function.  This is getting intuitive!  
    $('#iAppend').on('click', '.deleteBtn', deleteField); //tells us that while targeting iAppend id if deleteBtn gets "click"ed, we run function 
};

function inputCollect() {

    let firstName = $('#firstName').val(); //these variables will allow us to acces our input.
    let lastName = $('#lastName').val();
    let iD = $('#iD').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();
    let employeeInput = new Employee(firstName, lastName, iD, jobTitle, annualSalary); //creates a NEW class EMPLOYEE with 5 different params which we linked to the dom ^ above.

    employeesEntered.push(employeeInput); //now we push our variable employeeInput which tells our constructor function to print a new Employee for us to use.
    // console.log("Thanks for logging your employee. Here is employeesEntered:", employeesEntered); //Nice.  This works and is super exciting.
    // $('this').toggleClass(inputCollector);
    // console.log(employeesEntered); //I can see we successfully printed our DOM, now we need to work on functionality to apppend.
    clearValues();
    calcMonthlyCost();
    appendEmployee(); //running our really cool appendEmployee function.

}

function appendEmployee() {
    // console.log("In appendEmployee"); //I just wanted to create a function to handle each step of the logic only.
    $('#iAppend').empty(); //emptying so we don't get 1+1+2+3+5+8+...;
    for (i = 0; i < employeesEntered.length; i++) {
        // console.log("in for loop");
        $('#iAppend').append(`<tr>
        <td>${employeesEntered[i].firstName}</td>
        <td>${employeesEntered[i].lastName}</td>
        <td>${employeesEntered[i].iD}</td>
        <td>${employeesEntered[i].jobTitle}</td>
        <td>$$$${parseInt(employeesEntered[i].annualSalary).toLocaleString()}</td>
        <td><button id = "deleteBtn">Delete</button></td>
        </tr>`);
    }

}

function calcMonthlyCost() {


}



// function calcMonthlyCost() {
//     annualLabor = 0;
//     for (let i = 0; i < employeesEntered.length; i++) {
//         annualLabor += Number(employeesEntered[i].annualSalaryEntry);
//     } // console.log('annualLabor', annualLabor); //Functions as intended.

//     $('.inlineCalculatorSalary').empty();

//     let monthlyLabor = annualLabor / 12;
//     // console.log(monthlyLabor); //this logs the proper value from our previous function.  We can now use this data in our helper function to achieve our goals.
//     if (monthlyLabor >= 20000) {
//         $('.calculatorSalary').addClass("badNewsBears");
//         // console.log("You're overbudget.");
//         alert("As the late Jon Jacklin would have said: You're blowing it!"); //He was the GM of Smack Shack and a very nice person!  He took a chance on me when I wasn't sure if I would get one.  I have much gratitude for that man & continued support & love from the Shack Family :].
//     }
//     // console.log("monthlyLabor", monthlyLabor); //functions as intended.



function clearValues() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function deleteField() {

    // console.log("Doing some deleting, I guess"); //this was at 3a.m., whoops.
    //I need to remove the same line as the button while also subtracting the data from our employee array. 

    $(this).closest('tr').remove(); //a very clean, efficient solution to removing THIS button (which we can see in the ELEMENTS TAB) and the items on the tree closest to it.  Which would be our NEWLY CREATED employee.

}



///////////////////////////////////////////////////Scrap work



// function calcMonthlyCost() {
//     let annualLabor = 0;
//     let monthlyLabor = annualLabor / 12;
//     $('.inlineCalculatorSalary').text(monthlyLabor);
//     // console.log('annualLabor'); //functions as intended.
//     if (monthlyLabor >= 20000) {
//         $('.calculatorSalary').css("background-color", "red"); //this visual alert works so I am commenting out my alert for debugging.
//     } // alert("Caution, monthly cost is out of this world!", monthlyLabor);            


// calcCostHelper(); artifact of old ideas.




// function calcCostHelper() {

//     console.log("Is this my helper function now?")
//     let monthlyLabor = annualLabor / 12;
//     $('.inlineCalculatorSalary').text(monthlyLabor);
// }


//     annualSalaryTotal += Number(employeesEntered[i].annualSalaryEntry << 0); //Adds all of the element annualSalaryEntry at index until for loop iterates through the entire array.
//     let monthlyCost = annualSalaryTotal / 12;
//     console.log("Monthly cost of employees on bankroll:", monthlyCost);
//     if (monthlyCost >= 20000) {
//         $('.calculatorSalary').css("background-color", "red");
//         console.log("You are spending far too much money", monthlyCost) //I tried a bunch to get it to target a # instead of a class.  Which just made for a bad time.
//         alert("Caution, monthly cost is astronomical!", monthlyCost)

//     }
// }