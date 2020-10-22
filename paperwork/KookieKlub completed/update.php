<!DOCTYPE html>
<html>

<head>

<title>Update Confirmation</title>
</head>

<body>
<h1>Kookie Klub Update Confirmation</h1>
<p>Thank for updating your password</p>
<img src="cookie monster4.jpg" height="300px" width="500px">

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
$email =  $_POST['email'];							             //assign email address submitted to PHP variable
$userPassword =  $_POST['userPassword'];					     //assign password submtted to PHP variable


//create query to update member password
$query = "UPDATE member SET password = '$userPassword' WHERE email = '$email'" ;		
//execute SQL query
$data = mysqli_query($link, $query)or die(mysqli_error());


//check that query has returned at least 1 result
if($data)
	{
	//display message to notify user that password has been updated
	echo "Your password has been updated";
	}


//close server connection
mysqli_close($link);

//exit PHP
?>


<br>
<p><a href="home.html">Click here to return to the Home Page</a></p>
</body>

</html>
