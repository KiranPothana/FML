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


function validate(){
	let name = document.querySelector('.name');
	let email = document.querySelector('.email');
	let message = document.querySelector('.message');
	let send_btn = document.querySelector('.send_btn');
	
	send_btn.addEventListener('click', (e) => {
		e.preventDefault();
		if(name.value == "" || email.value == "" || message.value == ""){
			emptyerror();
		}
		else{
			sendmail (name.value, email.value, message.value);
			success();
			name.value = "";
			email.value = "";
			message.value = "";
		}
	})
}

validate();
function emptyerror(){
	swal({
		title: "error!",
		text: "Field cannot be empty!",
		icon: "error",
		button: "Ok",
	  });
}

function sendmail(name, email, message){
	emailjs.send("service_atw29le","template_ljqmdwp",{
		to_name: name,
		from_name: email,
		message: message,
		});
}
function success(){
	swal({
		title: "Email Sent Successfully!",
		text: "We Try To Reply in 24 hours",
		icon: "success",
		button: "Ok",
	  });
}
