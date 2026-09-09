document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     1. TYPED.JS ANIMATION — Full Stack Developer only
     ===================================================== */
  if (document.getElementById("typed-role")) {
    new Typed("#typed-role", {
      strings: ["Full Stack Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }

  /* =====================================================
     2. SMOOTH SCROLLING (nav links)
     ===================================================== */
  document.querySelectorAll('.nav-link[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        var navHeight = document.querySelector('.custom-navbar').offsetHeight || 70;
        var top = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }

      // Close mobile navbar after clicking a link
      var navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  /* =====================================================
     3. NAVBAR BACKGROUND ON SCROLL
     ===================================================== */
  var navbar = document.querySelector('.custom-navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  /* =====================================================
     4. MOBILE NAVBAR TOGGLE (hamburger open / close)
        Uses Bootstrap's getOrCreateInstance — single listener,
        no duplicate event registration.
     ===================================================== */
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.getElementById('navbarNav');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function () {
      var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, {
        toggle: false
      });
      bsCollapse.toggle();
    });
  }

});
