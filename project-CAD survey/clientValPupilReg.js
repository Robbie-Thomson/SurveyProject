//this is the main validation function that calls a number of subfunctions
//these functions individually check one aspect of the Pupil Registration form input
function validatePupilRegOnSubmit(theForm) {
var reason = "";
  reason += validateFname(theForm.Fname);
  reason += validateLname(theForm.Lname);
  //reason += validateDate(theFrom.DofB);
  reason += validateUserN(theForm.UserN);
  reason += validatepass(theForm.pass);
  reason += validateconfirm(theForm.confirm);

  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }
  return true;
}

//checks the FIRST NAME field is not empty
function validateFname(fld) {
    var error = "";
  
    if (fld.value.length == "") {
        fld.style.background = 'Yellow'; 
        error = "No value has been provided for the First Name input\n"
    } else {
        fld.style.background = 'White';
    }
    return error;   
}

//checks the LAST NAME field is not empty
function validateLname(fld) {
    var error = "";
  
    if (fld.value.length == "") {
        fld.style.background = 'Yellow'; 
        error = "No value has been provided for the Last Name input\n"
    } else {
        fld.style.background = 'White';
    }
    return error;   
}


//this function validates that a value is entered into the DATE OF BIRTH field
function validateDate(fld) {
    var error = "";
  
    if (fld.value.length == "") {
        fld.style.background = 'Yellow'; 
        error = "No value has been provided for the Date of Birth input field\n"
    } else {
        fld.style.background = 'White';
    }
    return error;   
}

//this function checks the USERNAME is not blank and contains between 6 and 14 characters
//it uses the JavaScript regular expression /\W/ to restrict input characters
function validateUserN(fld) {
    var error = "";
    var illegalChars = /\W/; // only allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.background = 'Yellow'; 
        error = "You didn't enter a Username.\n";
    } else if ((fld.value.length < 6) || (fld.value.length > 14)) {
        fld.style.background = 'Yellow'; 
        error = "The Username is the wrong length, it must be more than 5 and less than 15 characters.\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow'; 
        error = "The username contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    } 
    return error;
}

//this function checks the PASSWORD is not empty and restricts permissible characters
//this function checks the PASSWORD is not blank and contains between 8 and 12 characters
//it uses the JavaScript /[\W_]/ expression to restrict input to numbers and letters
//it also uses the JavaScript search method with the regular expressions /(a-z)+/ and /(0-9)+/
function validatepass(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // only allow letters and numbers, no underscores permitted
 
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
    } else if ((fld.value.length < 8) || (fld.value.length > 12)) {
        error = "The password is the wrong length, it must be more than 7 and less than 13 characters.\n";
        fld.style.background = 'Yellow';
    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'Yellow';
    } else if (!((fld.value.search(/(a-z)+/)) && (fld.value.search(/(0-9)+/)))) {
        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
    } else {
        fld.style.background = 'white';
    }
   return error;
} 

//this function removed leading white space from the input
//it uses the JavaScript replace function to clear out any spacer characters
//function trim(s) {
  //return s.replace(/^\s+|\s+$/, '');
//} 

function validateconfirm(fld){
    var error = "";
  
    if (fld.value.length == "") {
        fld.style.background = 'Yellow'; 
        error = "You have not entered anything to confirm your password\n"
    } else {
        fld.style.background = 'White';
    }
    return error;   
}