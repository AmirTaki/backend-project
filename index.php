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
    <title>Document</title>
  
</head>
<body>
    <!-- HEADER -->
    <div class = "header">
        <!-- ICON MENU -->
        <div class = "iconMenu">
            <i class="bi bi-list"></i>
        </div>
        <!-- LOGO -->
        <div>logo</div>
        <!-- MENU BAR -->
        <div class = "menuContainer">
            <div class = "containerClose">
                <div class = "crossSideBar"><i class="bi bi-x-lg"></i></div>
            </div>
            <!-- foreach -->
            <?php foreach($TablesMenu as $menu){ ?>
            <div class = "menuItem">
                <div class = "itemTitle">
                    <div><?=  $menu->title ?></div>
                    <div class = "arrowTitle"><i class="bi bi-chevron-down"></i></div>
                </div>
                <!-- LIST CONATINAER -->
                <div class = "listContainer">
                    <!-- foreach -->
                    <?php foreach($TableMegaMenu as $list) { 
                        if($list->title === $menu->title) {?>
                    <div class = "listItem">
                        <div class = "listTitle">
                            <div><?= $list->list ?></div>
                            <div class="arrowRigthTitle"><i class="bi bi-chevron-right"></i></div>
                        </div>
                        <!--  CONTAINER -->
                        <div class = "pageContainer">
                            <div class = "crossBack">
                                <div class = "backCountaienr">
                                    <div class = "backIcon"><i class="bi bi-chevron-left"></i></div>
                                    <div><?= $list->list ?></div>
                                </div>
                                <div class = "crossContainer-sidebar">
                                    <div><i class="bi bi-x-lg"></i></div>
                                </div>
                            </div>
                            <div class = "hoverContainer">
                                <!-- CATEGORY CONTAINER -->
                                <div class = "categoryContainer">
                                    <div class = "categoryTitle">
                                        CATEGORY
                                    </div>
                                    <!-- foreach -->
                                    <?php foreach($TableCategory as $category) {
                                        if($category->list === $list->list && $category->title === $menu->title){    
                                    ?>
                                    <div class = "categoryItem">
                                        <div><i class="<?= $category->sign ?>"></i></div>
                                        <div><?= $category->category ?></div>
                                    </div>
                                    <?php }} ?>
                                </div>
                                <!-- PRODUCT CONTAINER -->
                                <div class = "productContainer">
                                    <div class = "productTitle">
                                        SERIES
                                    </div>
                                    <!-- foreach -->
                                    <?php foreach($TableSeries as $series){
                                        if($series->list === $list->list && $series->title === $menu->title){
                                    ?>
                                    <div class = "productItem">
                                        <?= $series->series ?>
                                    </div>
                                    <?php }} ?>
                                </div>
                                <!-- IMAGE CONATAINER  -->
                                <div class = "imageContainer">
                                    <!-- foreach  -->
                                    <?php foreach($TableImg as $img){ 
                                        if($img->list === $list->list && $img->title === $menu->title){    
                                    ?>
                                    <div class = "imageItem">
                                        <img src="<?= $img->image ?>" alt="">
                                        <div class = "captionImage"><?= $img->body ?></div>
                                    </div>
                                    <?php }} ?>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <?php }} ?>
                </div>
            </div>     
            <?php } ?>         
        </div>
        <!-- SEARCH HEADER & ICON -->
        <div class = "searchHeader">
            <input class = "InputSearchHeader" type="search" name = "search">
            <div class = "containerInput">
                <i id = "searchIcon"><i class="bi bi-search"></i></i>
            </div>
           

            <div class = "iconHeader">
                <i class="iconSeH bi bi-person-circle"></i>
                <i class="iconSeH bi bi-house"></i>
                <i class="iconSeH bi bi-box-arrow-in-right"></i>
                <i class="bi bi-share"></i>
            </div>
      
        </div>
    </div>
    <script src = "./src/script/main.js"></script>
</body>
</html>