<!DOCTYPE html>
<html>

<head>
<title>Membership Services</title>
</head>

<body>
<h1>Membership Services Page</h1>


<?php
//assign connection details to PHP variables
$servername="localhost"; 									           //use default server name
$username="root";        									           //use defualt user name
$password="";            									           //no password has been set
$database="kookieklub";  									           //database name
//connect to the database server and select Kookieklub database
$link=mysqli_connect($servername,$username,$password,$database);
//check for successful connection
if (mysqli_connect_error())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  

//assign values submitted by HTML form to PHP variables
$email = $_POST['email'];							               //assign email address submitted to PHP variable
$userPassword = $_POST['userPassword'];					           //assign password submtted to PHP variable


//create query to check email address exists in the member table
$query = "SELECT * FROM member WHERE Email='$email'";
//execute SQL query
$rows = mysqli_query($link, $query) or die(mysqli_error());


//count number of rows returned by query
$count = mysqli_num_rows($rows);
//check that query has returned at least 1 result
if($count==0)
	{
	//display unregistered email message
	echo 'Sorry, email address is unregistered. <a href="registration.php">Click here to register</a>';
	}
//process each row returned by query
while($info = mysqli_fetch_array( $rows))
	{
	//check whether user password entered is correct
	if ($userPassword == $info['Password'])
		{ 
	  	//display links for member services
	  	echo "<br>";
	  	echo '<a href="update.html">Update Membership Details here</a><br>';
	  	echo '<a href="delete.html">Cancel your membership here</a><br>';
	  	echo "<br>";
	  	//this button will only work once phase 4 has been completed
	  	echo '<form name="view" action="view.php" method="get"><input type="submit" value="View member details" name="view"<br></form>';
		echo '<br>';
		echo '<a href="search.html">Search for members here</a><br>';
		}
	else
		{
		//display error message when user password entered is incorrect and return to Login Page
		echo 'Incorrect password. <a href="login.html"> Click here to return to Login Page</a>';
		}
	}


//close server connection
mysqli_close($link);

//exit PHP
?>


</body>

<br>
<p> <a href="home.html">Return to Home Page</a></p>
</html>
