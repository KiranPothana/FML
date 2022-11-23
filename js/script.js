let menu_btn = document.querySelector('#active');
let btn = document.querySelector('.nav_open');
let colse_btn = document.querySelector('.nav_close')
let menu = document.querySelector('.nav_menu')
let overlay = document.querySelector('.overlay')

btn.onclick = () =>{
    menu.classList.add('active')
    overlay.classList.add('active')
}
colse_btn.onclick = () =>{
    menu.classList.remove('active')
    overlay.classList.remove('active')
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})



$(document).ready(function(){
	var contentSection = $('.content');
	var navigation = $('.tabs');
	
	//when a nav link is clicked, smooth scroll to the section
	navigation.on('click', 'a', function(event){
		event.preventDefault(); //prevents previous event
		smoothScroll($(this.hash));
	});
	
	//update navigation on scroll...
	$(window).on('scroll', function(){
		updateNavigation();
	})
	//...and when the page starts
	updateNavigation();
	
	/////FUNCTIONS
	function updateNavigation(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			var navigationMatch = $('.tabs a[href="#' + sectionName + '"]');
			if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
				  ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
				{
					navigationMatch.addClass('active');
				}
			else {
				navigationMatch.removeClass('active');
			}
		});
	}
	// function smoothScroll(target){
	// 	$('body,html').animate({
	// 		scrollTop: target.offset().top
	// 	}, 1000);
	// }
});
