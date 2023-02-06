

$(".banner-img h3").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".custom-about-sec").offset().top,
    },
    100
  );
});

$(".banner-img h3").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".custom-blog").offset().top,
    },
    100
  );
});

const menu = document.querySelector(".menu")
const hiddenMenu = document.querySelector(".hidden-menu")
menu.addEventListener("click", () => {
  hiddenMenu.classList.toggle("show");
});


AOS.init();

$(".banner-img h3").click(function () {
  $("html,body").animate(
    { scrollTop: $(".custom-our-work").offset().top },
    100
  );
});
