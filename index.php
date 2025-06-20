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
    <!-- header -->
    <link rel="stylesheet" href="./src/styles/header.css">
    <!-- main -->
    <link rel="stylesheet" href="./src/styles/main.css">
    <!-- bootstrap 5 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <title>Project</title>
  
</head>
<body>
    <header>
        <?php require_once "./layouts/navbar.php" ?>
    </header>
    <main>
        <div class = "scroller-grig-img" >
            <div class = "iconLeftScrollImg">icon left</div>
            <div class = "iconRigthtScrollImg">icon right</div>
            <div class = "containerScroll">
                <!-- foreach -->
                <div class = "containerScrollImage">
                    <div>
                        <div class = "containerScrollImageIcon">icon</div>
                        <img src="C:\Users\ASUS\Desktop\backup_img\photo-1511745990576-dbb681861dc7.jpg" alt="">
                    </div>
                    <div class = "containerScrollCaption">
                        <div class = "containerScrollCaptionTitle">title</div>
                        <div class = "containerScrollCaptionBody">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veniam optio quod?</div>
                        <div class = "containerScrollCaptionPerfomance">performance</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- header -->
    <script src = "./src/script/header.js"></script>
    <!-- main -->
    <script src = "./src/script/main.js"></script>
</body>
</html>