// Scroll bar functionality
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("preogressbar");
    const percent = document.getElementById("percent");
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    window.onscroll = function () {
        const progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.height = progress + "%";
        percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%";
    };

    // Pre-loader functionality
    const loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        loader.style.display = "none";
    });

    // Sticky navbar and scroll-up button functionality
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Menu toggle functionality
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation functionality
    new Typed(".typing", {
        strings: ["An Engineer", "An AI/ML Enthusiast", "A Data Analyst", "A Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel functionality
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });

    // Slide functionality
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function showNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    function currentSlide(index) {
        currentSlideIndex = index;
        showSlide(index);
    }

    setInterval(showNextSlide, 3000);
});
