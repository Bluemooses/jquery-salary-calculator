$(document).ready(pageReady);
let employeesEntered = [];
let monthlyCost = 0;

function pageReady() {
    $('.masterSubmit').on('click', inputCollect); //If we click masterSubmit class, run inputCollect function.  This is getting intuitive!  
    $('#iAppend').on('click', '.deleteBtn', deleteField); //tells us that while targeting iAppend on HTML if deleteBtn gets "click"ed, we run function 
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

    $('#iAppend').empty(); //Nice this is super handy because we basically said look, I have this information on the DOM, if you want to use it in any efficient fashion you need to only look at one instance at a time.  How do we do that?  By emptying the datafields and only accessing the instance the button is clicked and the fields are full:]
    appendEmployee();
    // inputCollect(' '); //Making sure our value in inputCollect function which stores all of our cool variables which can let us target fun stuff clears out so we can do it again if we want.
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
            <td><button class = "deleteBtn">Delete</button></td> //APPENDS our variables ^ to their respective fields
        </tr>                                                 //Also creates a delete button to be displayed inline with other appendages. :]
    
        `);
    }
    calcMonthlyCost();

}

function calcMonthlyCost() {
    let annualLabor = 0;
    for (let i = 0; i < employeesEntered.length; i++) {
        annualLabor += Number(employeesEntered[i].annualSalaryEntry);
        let monthlyLabor = annualLabor / 12;
        console.log('annualLabor');
        if (monthlyLabor >= 20000) {
            $('.calculatorSalary').css("background-color", "red");
            alert("Caution, monthly cost is out of this world!", monthlyLabor);

        };
        $('.inlineCalculatorSalary').text(monthlyLabor);
    }
};
//     annualSalaryTotal += Number(employeesEntered[i].annualSalaryEntry << 0); //Adds all of the element annualSalaryEntry at index until for loop iterates through the entire array.
//     let monthlyCost = annualSalaryTotal / 12;
//     console.log("Monthly cost of employees on bankroll:", monthlyCost);
//     if (monthlyCost >= 20000) {
//         $('.calculatorSalary').css("background-color", "red");
//         console.log("You are spending far too much money", monthlyCost) //I tried a bunch to get it to target a # instead of a class.  Which just made for a bad time.
//         alert("Caution, monthly cost is astronomical!", monthlyCost)

//     }
// }







function deleteField() {
    console.log("Doing some deleting, I guess"); //this was at 3a.m., whoops.
    $(this).closest('tr').remove(); //a very clean, efficient solution to removing THIS button (which we can see in the ELEMENTS TAB) and the items on the tree closest to it.  Which would be our NEWLY CREATED employee.
    //     console.log('Here I am, trying to delete, I have not written anything else so I expect this just log this overly long piece of text which someone may find comical if they are looking hard enough and also I should have used double-quotes because now I have to spell out every word instead of using contractions.');
}