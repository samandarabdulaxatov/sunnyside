var elSiteHeaderSection = document.querySelector(".site-header");
var elSiteNavOpen = elSiteHeaderSection.querySelector(".site-header__btn");

  elSiteNavOpen.addEventListener('click', function(){
    elSiteHeaderSection.classList.toggle("header-open");
  });