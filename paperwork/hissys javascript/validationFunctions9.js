//this is the main validation function that calls a number of subfunctions
//these functions individually check one aspect of the form input
function validateFormOnSubmit(theForm) {
var reason = "";

reason += validatebutton(theForm.q1);
reason += validatebutton1(theForm.q2);
reason += validatebutton2(theForm.q3);
reason += validatebutton3(theForm.q4);
reason += validatebutton4(theForm.q5);
  
      
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }
  return true;
}

//this function removed leading white space from the input
//it uses the JavaScript replace function to clear out any spacer characters
function trim(s) {
  return s.replace(/^\s+|\s+$/, '');
}

//this function is used to validate the radio buttons on the form
function validatebutton(fld) {
var error="";

if ( (q1.checked==false) ) {
error="You did not answer Question 1\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton1(fld) {
var error="";

if ( (q2.checked==false) ) {
error="You did not answer Question 2\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton2(fld) {
var error="";

if ( (q3.checked==false) ) {
error="You did not answer Question 3\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton3(fld) {
var error="";

if ( (q4.checked==false) ) {
error="You did not answer Question 4\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton4(fld) {
var error="";

if ( (q5.checked==false) ) {
error="You did not answer Question 5\n";
}
return error;
}
