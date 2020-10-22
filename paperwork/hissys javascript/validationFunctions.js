//this is the main validation function that calls a number of subfunctions
//these functions individually check one aspect of the form input
function validateFormOnSubmit(theForm) {
var reason = "";

  reason += validateUsername(theForm.username);
  reason += validatePassword(theForm.pwd);
  //reason += scorePassword(theForm.pwd);
  //reason += checkPassStrength(theForm.pwd);

      
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }
  return true;
}





//this function checks the username is not blank and contains between 5 and 15 characters
//it uses the JavaScript regular expression /\W/ to restrict input characters
function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/; // only allow letters, numbers, and underscores
 
    if (fld.value =="") {
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

//this function checks the strength of the password
//function scorePassword(fld) {
   // var score = 0;
   // if (!pwd)
       // return score;

    // award every unique letter until 5 repetitions
    //var letters = new Object();
    //for (var i=0; i<pwd.length; i++) {
      //  letters[pwd[i]] = (letters[pwd[i]] || 0) + 1;
      //  score += 5.0 / letters[pwd[i]];
    //}

    // bonus points for mixing it up
   // var variations = {
       // digits: /\d/.test(pwd),
        //lower: /[a-z]/.test(pwd),
        //upper: /[A-Z]/.test(pwd),
        //nonWords: /\W/.test(pwd),
  //  }

   // variationCount = 0;
    //for (var check in variations) {
      //  variationCount += (variations[check] == true) ? 1 : 0;
   // }
    //score += (variationCount - 1) * 10;

    //return parseInt(score);
//}

//Good passwords start to score around 60 or so, here's function to translate that in words:
//function checkPassStrength(fld) {
    //var score = scorePassword(pwd);
    //if (score > 80)
      //  return "strong";
   // if (score > 60)
       // return "good";
   // if (score >= 30)
       // return "weak";

   // return "";
//}







