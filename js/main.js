//navbat - button toggle
let button = document.getElementById('toggle-block');
let navbar = document.getElementsByClassName('novigation-container')[0];
button.addEventListener('click', () => {
   navbar.classList.toggle('menu-open');
});

// project slider
let needWidth = document.body.clientWidth;
let projectSlider = document.getElementById('project-slider');
new ProjectSlider ({
    sliderId: projectSlider,
    activeIndex: 1,
    width: needWidth
})

//preloader
$(document).ready(function(){
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});