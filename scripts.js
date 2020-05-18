let employeesEntered = [];
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

function pageReady() {
    $('.masterSubmit').on('click', inputCollect); //If we click masterSubmit class, run inputCollect function.  This is getting intuitive!  
    $('.gulliverMcFuzzBottom').on('click', '#deleteBtn', deleteField); //tells us that while targeting gulliverMcFuzzBottom id if deleteBtn gets "click"ed, we run function 
};

function inputCollect() {
    event.preventDefault();
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
    laborOnAnnum();
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
        <td id ="theId">${employeesEntered[i].iD}</td>
        <td>${employeesEntered[i].jobTitle}</td>
        <td>$${parseInt(employeesEntered[i].annualSalary).toLocaleString()}</td> 
        <td><button id = "deleteBtn">Delete</button></td>
        </tr>`);
    } //added inline parseInt on the annualSalary for entire array.

}

function laborOnAnnum() {
    let annualLabor = 0;
    let salary;

    for (let i = 0; i < employeesEntered.length; i++) {
        salary = parseInt(employeesEntered[i].annualSalary);
        annualLabor = annualLabor + salary;
    }
    monthlyLabor = (annualLabor / 12).toFixed(2);
    monthlyOutput = parseFloat(monthlyLabor).toLocaleString(undefined, {
        'minimumFractionDigits': 2,
        'maximumFractionDigits': 2
    })

    let costPerMonth = $('.costPerMonth');
    costPerMonth.empty();
    costPerMonth.append(`<h2>Total: $${monthlyOutput}</h2`);

    console.log(monthlyLabor);
    if (monthlyLabor >= 20000) {
        costPerMonth.addClass('badNewsBears');
    } else {
        costPerMonth.removeClass('badNewsBears');
    }
}

function clearValues() { //playing with functionality and ease of accessibility.
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function deleteField() {
    let getTheId = Number($('this').attr('class'));
    employeesEntered.splice(getTheId, 1);
    $(this).closest('tr').remove();
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
// function laborOnAnnum() {
//     let annualLabor = 0;
//     let salary; //salary exists, and in this case we assign it to look through our array and parse the Int of our constructed EMPLOYEE 
//     for (let i = 0; i < employeesEntered[i].length; i++) { //here we say the 1st iteration, it's just salary because annualLabor is 0.  The next time we run this function, it will add our new annualLabor of (salary) giving us a value that persists and adds up through the array.
//         salary = parseInt(employeesEntered[i].annualSalary);
//         annualLabor = annualLabor + salary;
//     }
//     monthlyLabor = Math.round(annualLabor / 12); //using my MATH skills
//     monthlyOutput = parseFloat(monthlyLabor).toLocaleString(undefined, { //floating monthlyLabor to be accesed through monthlyOutput. 
//         'minimumFractionDigits': 0,
//         'maximumFractionDigits': 0
//     });
//     let costPerMonth = $('.inlineCalculatorSalary');
//     costPerMonth.empty(); //If we don't empty here it will Add the previous values as well as the input value.
//     costPerMonth.append(`<h2>Spent this month: $${monthlyOutput}</h2>`);

//     console.log("costPerMonth", costPerMonth);

// }


// function calcMonthlyCost() {
//     let annualLabor = 0;
//     let monthlyLabor = annualLabor / 12;
//     $('.inlineCalculatorSalary').text(monthlyLabor);
//     // console.log('annualLabor'); //functions as intended.
//     if (monthlyLabor >= 20000) {
//         $('.calculatorSalary').css("background-color", "red"); //this visual alert works so I am commenting out my alert for debugging.
//     } // alert("Caution, monthly cost is out of this world!", monthlyLabor);            


// calcCostHelper(); artifact of old ideas.
// // console.log("Doing some deleting, I guess"); //this was at 3a.m., whoops.
// //I need to remove the same line as the button while also subtracting the data from our employee array. 
// let getTheId = $(this).closest('tr').find('#theId').text();
// // console.log(getTheId);

// for (let i = 0; i < employeesEntered.length; i++) {
//     if (getTheId.includes(employeesEntered[i].iD)) {
//         // console.log("Check 1, 2");
//         employeesEntered.splice(i, 1);
//         $(this).closest('tr').remove(); //a very clean, efficient solution to removing THIS button (which we can see in the ELEMENTS TAB) and the items on the tree closest to it.  Which would be our NEWLY CREATED employee.
//         laborOnAnnum();
//         return;
//     }

// }