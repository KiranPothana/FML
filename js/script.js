console.clear();

var el = {};

$('.placeholder').on('click', function (ev) {
  $('.placeholder').css('opacity', '0');
  $('.nav_menu').addClass('active');
  $('.list__ul').toggle();
});

$('.list__ul a').on('click', function (ev) {

    ev.preventDefault();
    var index = $(this).parent().index();
    $('.nav_menu').removeClass('active');
   
   $('.placeholder').text( $(this).text() ).css('opacity', '1');
   
   console.log($('.list__ul').find('li').eq(index).html());
   
   $('.list__ul').find('li').eq(index).prependTo('.list__ul');
   $('.list__ul').toggle();   
   
 });


$('select').on('change', function (e) {

  // Set text on placeholder hidden element
  $('.placeholder').text(this.value);
  
  // Animate select width as placeholder
  $(this).animate({width: $('.placeholder').width() + 'px' });
  
});

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('dark_toggle')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-sun' : 'bx-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    // reset: true
})

sr.reveal(`.header`)
sr.reveal(`.home_item `, {delay: 500})
sr.reveal(`.home_social`, {delay: 600})
sr.reveal(`.digital_item.left, .record_item.left, .session_item.left, .record_title.left, .square_text.left, .square_item.left, .card_banner.left`,{origin: 'left'})
sr.reveal(`.digital_item.right, .record_text.right, .session_item.right, .square_title.right, .square_item_meta.right, .square_item.right, .card_content.right`,{origin: 'right'})
sr.reveal(`.footer, .team_title`,{interval: 100})