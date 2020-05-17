$(document).ready(pageReady);
let employeesEntered = [];

function pageReady() {
    $('.masterSubmit').on('click', inputCollect); //If we click masterSubmit class, run inputCollect function.  This is getting intuitive!  
}

function inputCollect() {
    let employeeUnit = {
        firstNameEntry: $('#firstName').val(), //these variables will allow us to acces our input.
        lastNameEntry: $('#lastName').val(),
        iDEntry: $('#iD').val(),
        jobTitleEntry: $('#jobTitle').val(),
        annualSalaryEntry: $('#annualSalary').val()

    }
    employeesEntered.push(employeeUnit);
}
//     $('.apenderOoo').children('tbody').append(`<tr>                            
// <td>${firstNameEntry}</td>   
// <td>${lastNameEntry}</td>
// <td>${iDEntry}</td>
// <td>${jobTitleEntry}</td>
// <td>${annualSalaryEntry}</td>
// <td><button class = "delete" >Delete</button></td>    
// </tr>`);
function appendEmployee(employeeUnit) {






    // if ($(".employeeInputFields").val() == '') { //the logic here is correct but we aren't linking the data fields to anything so it's always going to Bork!
    //     alert('Bork Bork Bork');
    // } else {
    //     alert('Your data is up to date an accurate');
    // }

    //I GOT IT TO WORK!  Nice. :].
    //   console.log("You must fill in all fields before continuing. SpLaT"); //trying to see if we can make a function to return splat if 
    //any of our input fields are empty.

}