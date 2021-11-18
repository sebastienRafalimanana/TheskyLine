$(() => {
  // variables
  var $header_top = $(".header-top");
  var $nav = $("nav");

  // toggle menu
  $header_top.find("a").on("click", function () {
    $(this).parent().toggleClass("open-menu");
  });
  window.lol = $("#fullpage").fullpage({
    sectionsColor: ["#B8AE9C", "#F2AE72", "#5C832F", "#B8B89F"],
    sectionSelector: ".vertical-scrolling",
    slideSelector: ".horizontal-scrolling",
    navigation: false,
    slidesNavigation: false,
    controlArrows: true,
    responsiveSlides: true,
    anchors: ["home", "watch", "videos"],
    menu: "#menu",
    onSlideLeave: (v, k, l) => {
      $("#traits").toggleClass("active", l == 0);
    },
  });
  $(window).on("resize", () => {
    $.fn.fullpage.reBuild();
  });
});
$(window).on('load', () => {
  $('body').removeClass('disable-scroll');
  $(".loader").remove();
})
function switchTheme(value){
    $('html').attr("theme", value);
}

$(document).ready(() => {
    let theme = localStorage.getItem('theme') || 'dark';
    let toggler = $('.theme-toggler');
    $('html').attr('theme', theme);
    toggler.toggleClass('active', theme !== 'dark');
    toggler.on('click', () => {
        theme = theme == 'dark' ? 'light' : 'dark';
        toggler.toggleClass('active', theme !== 'dark');
        $('html').attr('theme', theme);
        localStorage.setItem('theme', theme);
    });
});
$('#close-2').on('click', () => {
    $("#section-2-overlay").css('display', 'none');
})
$('#video-thumb').on('click', () => {
    $("#section-2-overlay").css('display', 'flex');
})