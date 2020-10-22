<!DOCTYPE html>
<html>

<head>

<title>Search Results</title>
</head>

<body>
<h1>Kookie Klub Search Results</h1>
<img src="cookie monster4.jpg" height="300px" width="600px">

<br><br>

<p>The following Kookie Klub member(s) LOVE the same cookies as you!</p>
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
$favourite = $_GET['favourite'];


//create query to fetch member details from database
$query = "SELECT Firstname, Town FROM member WHERE Favourite='$favourite'";
//execute SQL query
$rows = mysqli_query($link, $query) or die(mysqli_error());


//display matching member details in table
//check that query has returned at least 1 result
if (mysqli_num_rows($rows)==0)													
	{
	//display error message
	echo "Sadly, there are no members who like the same cookies as you";
	}
else
	{ 			
	//display table headings
	echo '<table border="1"><tr><th>First Name</th><th>Town</th></tr>';
	//process each individual record retrieved from the member table
	while($member = mysqli_fetch_array($rows))
		{
	    //display each row retrieved from the member table
	    echo '<tr><td>'.$member['Firstname'].'</td><td>'.$member['Town'].'</td></tr>';
		} 
	echo "</table>";
	}


//close server connection
mysqli_close($link);

//exit PHP
?>


<br>
<p> <a href="home.html">Return to Home Page</a></p>

</body>

</html>
