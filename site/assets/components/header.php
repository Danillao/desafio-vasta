<?php
if($pag == 'home') {
    $home_active = '';
    $home_active = 'active-link';
} elseif($pag == 'about') {
    $about_active = '';
    $about_active = 'active-link';
} elseif($pag == 'skills') {
    $skills_active = '';
    $skills_active = 'active-link';
} elseif($pag == 'statement') {
    $services_active = '';
    $services_active = 'active-link';
} elseif($pag == 'portfolio') {
    $portfolio_active = '';
    $portfolio_active = 'active-link';
} elseif($pag == 'contact') {
    $contact_active = '';
    $contact_active = 'active-link';
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VASTA</title>

    <!--Favicon-->
    <link rel="shortcut icon" href="assets/images/Vasta.png" type="image/x-icon">


    <!--Unicons-->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!--Swiper CSS-->
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">

    <!--CSS-->
    <link rel="stylesheet" href="assets/css/style.css">

    <!--Libs-->
    <!--Typed.js-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
</head>

<body>
    <!--==================HEADER================-->
    <header class="header" id="header">
        <nav class="nav container">
            <a href="index.php" class="nav__logo">
                <img id="logo" src="assets/images/logo-light.png" alt="Logo" data-theme="light" width="98px" height="30px">
            </a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list grid">
                    <li class="nav__item">
                        <a href="index.php" class="nav__link <?= $home_active ?>">
                            <i class="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="about.php" class="nav__link <?= $about_active ?>">
                            <i class="uil uil-user  nav__icon"></i> Sobre
                        </a>
                    </li>
<!-- 
                    <li class="nav__item">
                    <a href="skills.php" class="nav__link <?= $skills_active ?>">
                        <i class="uil uil-file-alt  nav__icon"></i> Skills
                    </a>
                    </li> -->

                    
                    <li class="nav__item">
                        <a href="portfolio.php" class="nav__link <?= $portfolio_active ?>">
                            <i class="uil uil-scenery  nav__icon"></i> Portfolio
                        </a>
                    </li>
                    
                    <li class="nav__item">
                    <a href="statement.php" class="nav__link <?= $services_active ?>">
                        <i class="uil uil-briefcase-alt  nav__icon"></i> Depoimentos
                    </a>
                    </li>

                    <li class="nav__item">
                    <a href="contact.php" class="nav__link <?= $contact_active ?>">
                        <i class="uil uil-message  nav__icon"></i>Contato
                    </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close" id="nav-close"></i>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class="uil uil-apps"></i>
            </div>

            <div class="nav__btns">
                <!--Dark Mode button-->
                <i class="uil uil-moon change-theme" id="theme-button"></i> 
            </div> 
        </nav>
    </header>

    <!--==================MAIN================-->
    <main class="main">