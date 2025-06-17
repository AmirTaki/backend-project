<?php 
require_once "./functions/helprs.php";
require_once "./functions/pdo_connection.php";
$TablesMenu = readTable ("asus", "SELECT * FROM asus.menu WHERE status = 10", $single = false, $execute = null);
$TableMegaMenu =  readTable ("asus", "SELECT * FROM  asus.megamenu WHERE status = 10", $single = false, $execute = null);
$TableCategory =  readTable ("asus", "SELECT * FROM  asus.category WHERE status = 10", $single = false, $execute = null);
$TableSeries =  readTable ("asus", "SELECT * FROM  asus.series WHERE status = 10", $single = false, $execute = null);
$TableImg =  readTable ("asus", "SELECT * FROM  asus.img_menu WHERE status = 10", $single = false, $execute = null);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/styles/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <title>Project</title>
  
</head>
<body>
    <header>
        <?php require_once "./layouts/navbar.php" ?>
    </header>
    <script src = "./src/script/main.js"></script>
</body>
</html>