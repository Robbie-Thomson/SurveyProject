<!DOCTYPE html>
<html>

<head>

<title>Membership Confirmation</title>
</head>

<body>
<h1>Kookie Klub Registration Confirmation</h1>
<p>Thank for your membership support!</p>
<img src="cookie monster1.jpg" height="200px" width="400px">

<br>


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
$firstname = $_POST['firstname'];							//assign firstname submitted to PHP variable
$surname = $_POST['surname'];								//assign surname submitted to PHP variable
$email = $_POST['email'];								    //assign email address submitted to PHP variable
$town =	$_POST['town'];						                //assign town submitted to PHP variable
$userPassword =	$_POST['userPassword'];						//assign password submitted to PHP variable
$favourite = $_POST['favourite'];							//assign favourite submitted to PHP variable


//create query to add member details to database
$query = "INSERT INTO member (firstname,surname,email,town,password,favourite) VALUES ('$firstname','$surname','$email','$town','$userPassword','$favourite')";
//execute SQL query to add details to the member table
$data = mysqli_query($link, $query)or die(mysqli_error());


//check that query has been successful
if($data)
	{
	//display message to notify user that details have been added to the table
	echo "Your registration has been successful";
	}


//close server connection
mysqli_close($link);

//exit PHP
?>


<br>
<p><a href="home.html">Click here to return to the Home Page</a></p>
</body>

</html>
