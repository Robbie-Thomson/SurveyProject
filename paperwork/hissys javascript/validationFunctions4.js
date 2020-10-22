//this is the main validation function that calls a number of subfunctions
//these functions individually check one aspect of the form input
function validateFormOnSubmit(theForm) {
var reason = "";

  reason += validatename(theForm.username);
  reason += validateEmail(theForm.email);
  reason += validatePassword(theForm.pwd);
  

  
      
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
        fld.style.background = 'blue';
        error = "You didn't enter a username.\n";
    } else if ((fld.value.length < 5) || (fld.value.length > 15)) {
        fld.style.background = 'blue';
        error = "The username is the wrong length.\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'blue';
        error = "The username contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

//this function checks the password is not empty and restricts permissible characters
//it uses the JavaScript /[\W_]/ expression to restrict input to numbers and letters
//it also uses the JavaScript search method with the regular expressions /(a-z)+/ and /(0-9)+/
function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // only allow letters and numbers, no underscores permitted
 
    if (fld.value == "") {
        fld.style.background = 'blue';
        error = "You didn't enter a password.\n";
    } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "The password is the wrong length. \n";
        fld.style.background = 'blue';
    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'blue';
    } else if (!((fld.value.search(/(a-z)+/)) && (fld.value.search(/(0-9)+/)))) {
        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'blue';
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
    
    if (fld.value =="") {
        fld.style.background = 'blue';
        error = "You didn't enter an email address.\n";
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.background = 'blue';
        error = "Please enter a valid email address.\n";
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = 'blue';
        error = "The email address contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}