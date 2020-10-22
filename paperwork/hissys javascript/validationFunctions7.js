//this is the main validation function that calls a number of subfunctions
//these functions individually check one aspect of the form input
function validateFormOnSubmit(theForm) {
var reason = "";

reason += validatebutton(theForm.Yes, theForm.No);
reason += validatebutton1(theForm.Yes1, theForm.No1);
reason += validatebutton2(theForm.Yes2, theForm.No2);
reason += validatebutton3(theForm.Yes3, theForm.No3);
  
      
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
function validatebutton(Y,N) {
var error="";

if ( (Y.checked==false) && (N.checked==false) ) {
error="You did not answer Question 1\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton1(Y1,N1) {
var error="";

if ( (Y1.checked==false) && (N1.checked==false) ) {
error="You did not answer Question 2\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton2(Y2,N2) {
var error="";

if ( (Y2.checked==false) && (N2.checked==false) ) {
error="You did not answer Question 3\n";
}
return error;
}

//this function is used to validate the radio buttons on the form
function validatebutton3(Y3,N3) {
var error="";

if ( (Y3.checked==false) && (N3.checked==false) ) {
error="You did not answer Question 4\n";
}
return error;
}

