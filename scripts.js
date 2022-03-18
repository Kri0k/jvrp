var backgroundLight = [
    './resources/background/light/beacon.png',
    './resources/background/light/house.png',
    './resources/background/light/hotel.png',
    './resources/background/light/pyramid.png',
    './resources/background/light/truck.png',
    './resources/background/light/statue.png'
]
var backgroundDark = [
    './resources/background/dark/beacon.png',
    './resources/background/dark/house.png',
    './resources/background/dark/lake.png',
    './resources/background/dark/pyramid.png',
    './resources/background/dark/truck.png',
    './resources/background/dark/window.png'
]
var version = 18;
themeTrigger.apply(backgroundDark, backgroundLight);

var dropMenu = document.querySelectorAll('.dropMenu');
$('.dropMenu').hover(
    function() {$('.dropMenu').addClass('shown'); $('.dropMenuPlus').addClass('shownPlus')},
    function() {$('.dropMenu').removeClass('shown'); $('.dropMenuPlus').removeClass('shownPlus')},
)



function sortEight() {

}
function sortSeven() {
    
}

var themes = localStorage.getItem('theme')
if (themes == 'light') {localStorage.setItem('theme', 'dark'); themeChange();};
if (themes == 'dark') {localStorage.setItem('theme', 'light'); themeChange();};


function themeTrigger() {
    var themes = localStorage.getItem('theme')
    if (themes == 'light') {localStorage.setItem('theme', 'dark'); themeChange();};
    if (themes == 'dark') {localStorage.setItem('theme', 'light'); themeChange();};
}

function themeChange() {
    var randomImg = Math.floor(Math.random()*6);
    var themes = localStorage.getItem('theme');
    if (themes == 'dark') {
        console.log(themes);
        document.body.background = backgroundDark[randomImg];
        $('.body-block-body').css('background-color', '#708f7c');
        $('.menu-dark').css('display', 'block'); $('.menu-light').css('display', 'none');
        $('.header').css('background-color', '#273b09');
        $('.header-outline').css('background-color', '#273b09');
        $('.header-triggerSun').css('display', 'block'); $('.header-triggerMoon').css('display', 'none');
    }
    else {
        console.log(themes);
        document.body.background = backgroundLight[randomImg];
        $('.body-block-body').css('background-color', '#dbd2e0');
        $('.menu-dark').css('display', 'none'); $('.menu-light').css('display', 'block');
        $('.header').css('background-color', '#7b904b');
        $('.header-outline').css('background-color', '#7b904b');
        $('.header-triggerSun').css('display', 'none'); $('.header-triggerMoon').css('display', 'block');
    };
}
