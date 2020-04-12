<?
$nomcomerc = $_POST['nomcomerc'];
$mail = $_POST['mail'];
$telefon = $_POST['telefon'];
$tags = $_POST['tags'];
$serveis = $_POST['serveis'];
$adreca = $_POST['adreca'];
$ciutat = $_POST['ciutat'];
$CP = $_POST['CP'];
$info = $_POST['info'];

$socket = '/var/run/mysqld.sock';
$conn = new mysqli('localhost', 'upcoders_toti', 'ZKe3g^Ew#%ww', "botigues", 3306, $socket);;

if (mysqli_connect_error()) {
  die("Database connection failed: " . mysqli_connect_error());
} else{
  $stmt = $conn->prepare("insert into 'botigues'(nom,	ciutat,	adreca,	tags,	serveis, info,	telefon,	mail)
    values(?,?,?,?,?,?,?,?)");
  $stmt -> $bind_param("ssssssss",$nomcomerc, $mail, $telefon, $tags, $serveis, $adreca, $ciutat, $CP, $info);
  $stmt -> execute();
  echo "bieeen";
  $stmt -> close();
  $conn -> close();
}
?>
