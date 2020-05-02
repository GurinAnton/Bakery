// CAROUSEL
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    loop: true,
  });
});
// CAROUSEL

// SCROLL NAV

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // 80 Это сколько пикселей с верху будет, когда Нав уменьшиться
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // Размеры когда уменьшится
    document.getElementById("header-nav").style.height = "40px";
    document.getElementById("nav-logo").style.fontSize = "20px";
  } else {
    // Размеры когда обратно увеличится
    document.getElementById("header-nav").style.height = "70px";
    document.getElementById("nav-logo").style.fontSize = "30px";
  }
}
