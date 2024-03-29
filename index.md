<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="assets/css/index.css">
</head>
<body>
    <h1>Selamat Datang di Catpus!</h1>
    <p>Silakan daftar untuk mendapatkan informasi lebih lanjut terkait kampus kami :3</p>
    <br><br>
    <div id="carouselContainer">
        <img class="carousel" src="assets/img/image1.jpg" alt="Image 1">
        <img class="carousel" src="assets/img/image2.jpg" alt="Image 2">
        <img class="carousel" src="assets/img/image3.png" alt="Image 3">
    </div>
    <br>
    <p>-Carousel with JS Dasar-</p>
    <br>
    <div class="button1-container">
    <button class="jsdom-button" onclick="window.location.href='landingdom.html'">Go to JS DOM Page</button>
    </div>
    <br>
    <div class="button2-container">
        <button class="register-button" onclick="window.location.href='form.html'">Daftar</button>
        <button class="login-button" onclick="window.location.href='login.html'">Masuk</button>
        <button class="login-responsive-button" onclick="window.location.href='login-responsive.html'">Masuk -responsive-</button>
    </div>
    <div class="button3-container">
        <button class="loginlayout-button" onclick="window.location.href='AdminLTE-3.2.0/pages/examples/login.html'">Login Layout</button>
        <button class="dashboard-button" onclick="window.location.href='AdminLTE-3.2.0/dashboard-ku.html'">Dashboard</button>
        <button class="productapi-button" onclick="window.location.href='productapi.html'">Product API</button> 
        <button class="productapi-responsive-button" onclick="window.location.href='product-responsive.html'">Product API -responsive-</button>
    </div>
    <script src="assets/js/carousel.js"></script>
</body>
</html>
