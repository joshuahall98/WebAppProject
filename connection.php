<?

$inputuser = $_POST['user'];
$inputpass = $_POST['pass'];
$user = "root";
$password = "";
$database = "registration";


$connect = mysqli_connect("localhost",$user,$password);
@mysqli_select_db($database) or ("Database not found");

$query = "SELECT * FROM 'users' WHERE 'user' = '$inputuser'";
$querypass = "SELECT * FROM 'users' WHERE 'password' = '$inputpass'";

$result = mysqli_query($connect, $query)or die("Error: " . mysqli_error($connect));
$resultpass = mysqli_query($connect, $querypass)or die("Error: " . mysqli_error($con));

$row = mysqli_fetch_array($result);
$rowpass = mysqli_fetch_array($resultpass);

$serveruser = $row["user"];
$serverpass = $row["password"];

if($serveruser&&$serverpass){
	if(!$result){
		die("Username or password is invalid");
		
	}
	


	echo "<br><center>Database output</b></center><br><br>";
	mysqli_close();
	echo $inputpass;
	echo $serverpass;
	
	if($inputpass == $serverpass){
	
		header("Location: home.html");
	
	}
	else{
	
		header("Location: Fail.php");
	
	}
	}



?>
