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
    employeesEntered.push(employeeUnit); //we are pushing the employee on click as an object to a new array of objects.
    console.log("Thanks for logging your employee. Here is employeesEntered:", employeesEntered);//Nice.  This works and is super exciting.
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

}




    //I GOT IT TO WORK!  Nice. :].
    //   console.log("You must fill in all fields before continuing. SpLaT"); //trying to see if we can make a function to return splat if 
    //any of our input fields are empty.

