<!DOCTYPE html>
<html>

<!--PHP code sgtarts here-->
<?php
// Initialise PHP variables
$nameError ="";
$emailError ="";
$genderError ="";
$websiteError ="";


if(isset($_POST['submit'])){
	if (empty($_POST["name"])) {
		$nameError = "Name is required";
	}
	else {
		$name = test_input($_POST["name"]);
		// check name only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			$nameError = "Only letters and white space allowed";
		}
	}
	if (empty($_POST["email"])) {
		$emailError = "Email is required";
	}
	else {
		$email = test_input($_POST["email"]);
		// check if e-mail address syntax is valid or not
		if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
			$emailError = "Invalid email format";
		}
	}
	if (empty($_POST["website"])) {
		$website = "";
	}
	else {
		$website = test_input($_POST["website"]);
		// check whether address is valid (the regular expression allows dashes)
		if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
			$websiteError = "Invalid URL";
		}
	}
	if (empty($_POST["comment"])) {
		$comment = "";
	}
	else {
	$comment = test_input($_POST["comment"]);
	}
	if (empty($_POST["gender"])) {
		$genderError = "Gender is required";
	}
	else {
		$gender = test_input($_POST["gender"]);
	}
}
header('Location: nextPage.php');
exit;

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
return $data;
}

echo '<p><a href="home.html">Click here to return to the Home Page</a></p>'
//php code ends here
?>

<!--HTML code starts here-->
<head>
<title>Form Validation with PHP</title>
<style> 
	.error{
	color:red
	}
</style>
</head>
<body>
<h2>Form Validation with PHP</h2>

<form method="POST" action="validation.php">
<p>Name:<br>
<input type="text" size="48" name="name">*Name is required</p>
<span class="error"><?php echo $nameError;?></span>

<p>Email:<br>
<input type="email" size="48" name="email">*Email is required</p>
<span class="error"><?php echo $emailError;?></span>

<p>Gender:<br>
<input type="radio" name="female">Female
<input type="radio" name="male">Male&nbsp;&nbsp;&nbsp;&nbsp;*Gender is required</p>
<span class="error"><?php echo $genderError;?></span>

<p>Website:<br>
<input type="text" size="48" name="website"></p>

<p>Comment:<br>
<textarea name="comment" cols="48" rows="8"></textarea></p>

<p><input type="submit" name="submit" value="Submit"></p>

</form>
</body>
</html>