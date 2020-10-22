//this is the main validation function that calls a number of subfunctions
//these functions individually check one aspect of the form input
function validateFormOnSubmit(theForm) {
var reason = "";

reason += validatebutton(theForm.A1, theForm.A2, theForm.A3);
reason += validatebutton1(theForm.A4, theForm.A5, theForm.A6);
reason += validatebutton2(theForm.A7, theForm.A8, theForm.A9);
  
      
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
function validatebutton(A1,A2,A3) {
var error="";

if ( (A1.checked==false) && (A2.checked==false) && (A3.checked==false) ) {
error="You did not answer Question 1\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton1(A4,A5, A6) {
var error="";

if ( (A4.checked==false) && (A5.checked==false) && (A6.checked==false) ) {
error="You did not answer Question 2\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton2(A7,A8,A9) {
var error="";

if ( (A7.checked==false) && (A8.checked==false) && (A9.checked==false) ) {
error="You did not answer Question 3\n";
}
return error;
}

function validatebutton3(A10, A11, A12) {
var error="";

if ( (A10.checked==false) && (A11.checked==false) && (A12.checked==false) ) {
error="You did not answer question 4\n"
}
return error;
}

function validatebutton4(A13, A14,A15) {
  var error;
  
if ( (A13.checked==false) && (A14.checked==false) && (A15.checked==false) ) {
error="You did not answer question 5\n"
}
return error;
}
