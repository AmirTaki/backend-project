<!-- board black -->
<div class = "board-black">
    <!-- foreach -->
    <?php foreach($TableBoardBlack as $item){ ?>
        <div class = "board-black-title">
            <h1><?= $item->title ?></h1>
        </div>
        <div>
            <p><?= $item->caption ?></p>
        </div>
        <div>
            <p><?= $item->body ?></p>
        </div>
    <?php } ?>
</div>
<!-- board yellow  -->
<div class = "board-yellow">
    <div class = "board-yellow-title">
        <p>JOIN OUR ADICLUB & GET 15% OFF. </p>
    </div>
    <div class = "board-yellow-button">
        <button>SIGN UP FOR FREE <i class = "board-yellow-button-i">→</i></button>
    </div>
</div>
<!--  -->
<div class = "footer">
    <div class="row">
        <div class="col">
            <img src="https://cdn.pixabay.com/photo/2017/05/31/16/39/windows-2360920_1280.png" alt="" class = "logo">
            <p>Subscribe Easy Tutorials Youtube channel to watch more videos on website development and Press the bell icon to get immediate notification of latest videos.</p>
        </div>
        <div class="col">
            <h3>Office <div class="underline"><span></span></div></h3>
            <p>ITPL Road Whitefield, Bangalore Karnataka, PIN 560066, Tehran </p>
            <p></p>
            <p class = "email-id">email@gamil.com</p>
            <h4>+98-0123456789</h4>
        </div>
        <div class="col">
            <h3>Links <div class="underline"><span></span></div></h3>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">AboutUs</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </div>
        <div class="col">
            <h3>Newsletter <div class="underline"><span></span></div></h3>
            <form>
                <i class="bi bi-envelope"></i>
                <input type="email" placeholder="Enter your email id" required>
                <button type="submit"><i class="bi bi-arrow-right"></i></button>
            </form>
            <div class="social-icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-whatsapp"></i>
                <i class="bi bi-pinterest"></i>
            </div>
        </div>
    </div>
    <hr />
    <p class = "copyright">Easy Totorials © 2021 - All Rights Reserved</p>
</div>
