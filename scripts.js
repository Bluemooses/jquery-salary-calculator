$(document).ready(pageReady);


function pageReady() {
    $('.masterSubmit').on('click', inputCollect); //If we click masterSubmit class, run inputCollect function.  This is getting intuitive!  











    // alert("jQuery init");
    // console.log("We are in jQuery");



}

function calculateMonthlyCost() {

}

function inputCollect() {
    // let firstName = $
    let firstNameEntry = $('#firstName')
    let lastNameEntry = $('lastName')
    let iDEntry = $('iDEntry')
    let jobTitleEntry = $('jobTitleEntry')
    let annualSalaryEntry = $('annualSalaryEntry')
    
    if ($(".employeeInputFields").val() != '') { //the logic here is correct but we aren't linking the data fields to anything so it's always going to Bork!
        alert('Bork Bork Bork');
    } else {
        alert('Your data is up to date an accurate');
    }


    //   console.log("You must fill in all fields before continuing. SpLaT"); //trying to see if we can make a function to return splat if 
    //any of our input fields are empty.
}

// function appenderoo() {

// }