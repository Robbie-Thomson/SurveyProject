<html>

<head>
<title>Pupil Log-in Validation</title>
</head>

<body>

<?php

$servername="localhost";
$username="root";
$password="";
$database="pupil";

$link=mysql_connect ($servername, $username, $password);

if(! $link)
	{
	die('Connection Failed'.mysql_error());
	}
	
mysql_select_db($database, $link);

$userN=$_POST['userN'];
$pass=$_POST['pass'];

$query= "SELECT * FROM member WHERE Username='$userN'";

$rows = mysql_query($query) or die(mysql_error());

$count=mysql_num_rows($rows);

if($count==0)
	{
	echo'Sorry, this username is unregistered. Please go to the register page and enter your details there first by '<a href="pupilReg.html"></a>' clicking here</a>';
	}
	
while($info = mysql_fetcharray( $rows))
	{
	if ($pass == $info['Password'])
		{
		echo "<br>";
		echo "<href="Survey.html">Take the Survey</a><br>;
		echo "<br>";
		echo "Go back to the <a href="homePage.html">Home Page</a> to find out more information about the CAD packages";
		}
	else
		{
		echo 'Incorrect Password.' <a href="completeSurvey.html"></a>' Click here to try again.</a>';
		}
	}
	
mysql_close($link);

?>

</body>

</html>
