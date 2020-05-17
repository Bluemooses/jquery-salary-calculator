$(document).ready(pageReady);
let employeesEntered = [];
let annualLabor = 0;


function pageReady() {
    $('.masterSubmit').on('click', inputCollect); //If we click masterSubmit class, run inputCollect function.  This is getting intuitive!  
    $('#iAppend').on('click', '.deleteBtn', deleteField); //tells us that while targeting iAppend id if deleteBtn gets "click"ed, we run function 
};

function inputCollect() {
    let employeeUnit = { //An employee object.
        firstNameEntry: $('#firstName').val(), //these variables will allow us to acces our input.
        lastNameEntry: $('#lastName').val(),
        iDEntry: $('#iD').val(),
        jobTitleEntry: $('#jobTitle').val(),
        annualSalaryEntry: $('#annualSalary').val()
    };
    employeesEntered.push(employeeUnit); //we are pushing the employee on click as an object to a new array of objects.
    console.log("Thanks for logging your employee. Here is employeesEntered:", employeesEntered); //Nice.  This works and is super exciting.
    // $('this').toggleClass(inputCollector);
    // $('#iAppend').empty(); //Nice this is super handy because we basically said look, I have this information on the DOM, if you want to use it in any efficient fashion you need to only look at one instance at a time.  How do we do that?  By emptying the datafields and only accessing the instance the button is clicked and the fields are full:]
    appendEmployee(); //running our really cool appendEmployee function.
}

function appendEmployee() {
    // console.log("In appendEmployee");
    $('#iAppend').empty();
    annualLabor = 0;
    for (let i = 0; i < employeesEntered.length; i++) {
        annualLabor += Number(employeesEntered[i].annualSalaryEntry);
        // console.log('annualLabor', annualLabor); //Functions as intended.

        $('#iAppend').append(`
        <tr>  
            <td>${employeesEntered[i].firstNameEntry}</td>
            <td>${employeesEntered[i].lastNameEntry}</td>
            <td>${employeesEntered[i].iDEntry}</td>  
            <td>${employeesEntered[i].jobTitleEntry}</td>
            <td>${employeesEntered[i].annualSalaryEntry}</td>
            <td><button class = "deleteBtn">Delete</button></td> //APPENDS our variables ^ to their respective fields
        </tr>                                                 //Also creates a delete button to be displayed inline with other appendages. :]
    
        `);
    }
    calcMonthlyCost(); //calling our new function calcMonthlyCost which we will use to help us put an inline "counter" on monthlyLabor
}

function calcMonthlyCost() {

    let monthlyLabor = annualLabor / 12;
    // console.log(monthlyLabor); //this logs the proper value from our previous function.  We can now use this data in our helper function to achieve our goals.
    if (monthlyLabor >= 20000) {
        $('.calculatorSalary').addClass("badNewsBears"); //we target our class in <html> calculatorSalary and we tack on the badNewsBears class.  Being in the red is bad! 
        // console.log("You're overbudget.");
        alert("As the late Jon Jacklin would have said: You're blowing it!");
    }
    console.log("monthlyLabor", monthlyLabor);
}









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





///////////////////////////////////////////////That works so stay down there.


function deleteField() {
    console.log("Doing some deleting, I guess"); //this was at 3a.m., whoops.
    $(this).closest('tr').remove();
    $() //a very clean, efficient solution to removing THIS button (which we can see in the ELEMENTS TAB) and the items on the tree closest to it.  Which would be our NEWLY CREATED employee.
    //     console.log('Here I am, trying to delete, I have not written anything else so I expect this just log this overly long piece of text which someone may find comical if they are looking hard enough and also I should have used double-quotes because now I have to spell out every word instead of using contractions.');
}