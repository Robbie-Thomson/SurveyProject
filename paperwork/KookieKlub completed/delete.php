<!DOCTYPE html>
<html>

<head>

<title>Cacellation Confirmation</title>
</head>

<body>
<h1>Kookie Klub Cancellation Confirmation</h1>
<p>We are sorry that you want to cancel your membership of the Kookie Klub</p>
<img src="cookies2.jpg" height="200px" width="400px">

<br>
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


//assign value submitted by HTML form to PHP variable	
$email = $_POST['email'];


//create query to delete member details
$query = "DELETE FROM member WHERE email = '$email'" ;
//execute SQL query
$data = mysqli_query($link, $query)or die(mysqli_error());


//check that query has been successful
if($data)
	{
	//display message to notify user that details have been deleted
	echo "Your details have been removed from our database";
	}


//close server connection
mysqli_close($link);

//exit PHP
?>


<br>
<p><a href="home.html">Click here to return to the Home Page</a></p>
</body>

</html>
