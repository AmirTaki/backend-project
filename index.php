<?php 
require_once "./functions/helprs.php";
require_once "./functions/pdo_connection.php";
$TablesMenu = readTable ("asus", "SELECT * FROM asus.menu WHERE status = 10", $single = false, $execute = null);
$TableMegaMenu =  readTable ("asus", "SELECT * FROM  asus.megamenu WHERE status = 10", $single = false, $execute = null);
$TableCategory =  readTable ("asus", "SELECT * FROM  asus.category WHERE status = 10", $single = false, $execute = null);
$TableSeries =  readTable ("asus", "SELECT * FROM  asus.series WHERE status = 10", $single = false, $execute = null);
$TableImg =  readTable ("asus", "SELECT * FROM  asus.img_menu WHERE status = 10", $single = false, $execute = null);
$TableScrollerImage =  readTable ("adidas", "SELECT * FROM adidas.scrollerimg_main WHERE status = 10", $single = false, $execute = null);
$TableGridImg =  readTable ("asus", "SELECT * FROM asus.grid_img WHERE status = 10", $single = false, $execute = null);
$TableMoveImg =  readTable ("asus", "SELECT * FROM asus.move_img WHERE status = 10", $single = false, $execute = null);
$TableColumnImg =  readTable ("asus", "SELECT * FROM asus.column_img WHERE status = 10", $single = false, $execute = null);
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
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"> -->
    <title>Project</title>
  
</head>
<body>
    <header>
        <?php require_once "./layouts/navbar.php" ?>
    </header>
    <main>
       <!--    =========================================================  CONTAINER GRID IMAGE : IMG   ===================================================== -->
        <div class = "scroller-grid-img" >
            <div class = "iconLeftScrollImg">icon left</div>
            <div class = "iconRigthtScrollImg">icon right</div>
            <div class = "containerScroll">
                <!-- foreach -->
                <?php foreach($TableScrollerImage as $item) { ?>
                    <div class = "containerScrollImage">
                        <div>
                            <div class = "containerScrollImageIcon">icon</div>
                            <img src="<?= $item->path ?>" alt="">
                        </div>
                        <div class = "containerScrollCaption">
                            <div class = "containerScrollCaptionTitle"><?= $item->price ?></div>
                            <div class = "containerScrollCaptionBody"><?= $item->body ?></div>
                            <div class = "containerScrollCaptionPerfomance"><?= $item->title ?></div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
        <!--    =========================================================  CLASIFIER CONTAINER  ===================================================== -->
        <div class = "clasifierContainer">
            <!-- foreach -->
            <?php foreach($TableGridImg as $item){ ?>
                <div class = "clasifierItem">
                    <img src="<?= $item->path ?>" alt="">
                    <div class = "clasifierCaption">
                        <div class = "clasifierCaptionTitle"><?= $item->name ?></div>
                        <div class = "clasifierCaptionBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, impedit.</div>
                        <div class = "clasifierCaptionIcon">
                            <div  class ="titleIcon" >icon</div>
                            <div class = "iconGirdCaption">icon</div>
                        </div>
                        <button class = "clasifierCaptionButton">button</button>   
                    </div>
                </div>
            <?php } ?>
        </div>
        <!-- ==================================================   BOX SLIDER IMAGE  ===========================================================  -->
        <div class = "boxSliderImage">
            <div class = "containerSliderImg">
                <!-- foreach -->
                <?php foreach($TableMoveImg as $item){ ?>
                    <div class = "itemImg">
                        <img src="<?= $item->path ?>" alt="">
                        <div class = "itemCaption"><?= $item->body ?></div>
                    </div>
                <?php } ?>
            </div>
            <div id = "clickLeftSlider">left</div>
            <div id = "clickRightSlider">right</div>
            <div class = "containerButtonSlider">
                <div class = "containerButtonClickColumnOne">
                <!-- foreach -->
                    <?php for ($i = 0; $i < sizeof($TableMoveImg); $i+= 2) { ?>
                        <div class ="itemButtonClickColumnOne"></div>
                    <?php } ?>
                </div>
                <div class = "containerButtonClickColumnTwo">
                <!-- foreach -->
                    <?php foreach($TableMoveImg as $item) { ?>
                        <div class ="itemButtonClickColumnTwo"></div>
                    <?php } ?>
                </div>
            </div>
        </div>
        <!--  ================================================== GRID BOX IMAGE  ===========================================================  -->
        <div class = "boxSliderProduct">
            <div class = "containerBoxSlider">
                <!-- foreach -->
                <?php foreach($TableColumnImg as $item){ ?>
                <div class = "itemBoxSlider">
                    <img src="<?= $item->path ?>" alt="">
                    <div class = "captionBoxSlider">
                        <div class = "titleBoxSlider"><?= $item->name ?></div>
                        <div class = "bodyBoxSlider"><?= $item->body  ?></div>
                    </div>
                </div>
                <?php } ?>
            </div>
            <div id = "leftBoxSlider">clickleft</div>
            <div id = "rightBoxSlider">clickright</div>
            <div class = "boxContainerClickBoxSlider">
                <div class = "containerClickBoxSlider">
                    <!-- foreach -->
                    <?php foreach($TableColumnImg as $img){ ?>
                        <div class="itemClickBoxSlider"></div>
                    <?php } ?>
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