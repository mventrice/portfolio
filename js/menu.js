const mediaQuery = window.matchMedia('(min-width: 992px)')

if (mediaQuery.matches) {
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector("#logo").style.width="200px";
            document.querySelector(".nav_links").style.fontSize=".9em";
            document.querySelector("header").style.paddingTop=".5em";
        }
        else {
            document.querySelector("#logo").style.width="300px"
            document.querySelector(".nav_links").style.fontSize="1em";
            document.querySelector("header").style.paddingTop="1em";
  }
}}