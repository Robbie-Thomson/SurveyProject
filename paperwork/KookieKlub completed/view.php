<!DOCTYPE html>
<html>

<head>
<title>View Member Details</title>
</head>

<body>
<h1>Kookie Klub Member Details</h1>
<img src="cookie monster4.jpg" height="300px" width="500px">
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


//create query to fetch member details from database
$query = "SELECT * FROM member";
//execute SQL query
$rows = mysqli_query($link, $query) or die(mysqli_error());


//display matching member details in table
//start by displaying table headings
echo '<table border="1"><tr><th>First Name</th><th>Email Address</th><th>Town</th></tr>';
//display each individual record retrieved from the memebr table
while($member = mysqli_fetch_array($rows))
	{
    echo '<tr><td>'.$member['Firstname'].'</td><td>'.$member['Email'].'</td><td>'.$member['Town'].'</td></tr>';
	} 
echo "</table>";


//close server connection
mysqli_close($link);

//exit PHP
?>

</body>

<br>
<p> <a href="home.html">Return to Home Page</a></p>
</html>
