//this is the main validation function that calls a number of subfunctions
//these functions individually check one aspect of the form input
function validateFormOnSubmit(theForm) {
var reason = "";

  reason += validatename(theForm.name);
  reason += validateEmail(theForm.email);
  
      
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }
  return true;
}

//this function checks the username is not blank and contains between 5 and 15 characters
//it uses the JavaScript regular expression /\W/ to restrict input characters
function validatename(fld) {
    var error = "";
    var illegalChars = /\W/; // only allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.background = 'Red'; 
        error = "You didn't enter a username.\n"; 
    } else if ((fld.value.length < 5) || (fld.value.length > 15)) {
        fld.style.background = 'Red'; 
        error = "The username is the wrong length.\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Red'; 
        error = "The username contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    } 
    return error;
}



//this function removed leading white space from the input
//it uses the JavaScript replace function to clear out any spacer characters
function trim(s) {
  return s.replace(/^\s+|\s+$/, '');
} 


//this function checks that the email address contains a @ and a full stop
//the function applies the trim function
function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
    
    if (fld.value == "") {
        fld.style.background = 'Red';
        error = "You didn't enter an email address.\n";
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.background = 'Red';
        error = "Please enter a valid email address.\n";
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = 'Red';
        error = "The email address contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
} 