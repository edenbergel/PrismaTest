import './styles/main.scss';

// Parallax => background image moving at a different speed the front content / image
window.addEventListener('scroll', function() {
	var elements = document.querySelectorAll('.parallax');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let position = element.getBoundingClientRect();

    // checking for partial visibility
    if(position.top < window.innerHeight && position.bottom >= 0) {
      // getting the relative bottom position compared to the display area
      // then multiplying by a negative number so the logo will be moving down (moving up by removing the minus)
      element.style.transform = 'translateY(' + position.bottom * -.3 + 'px)';
    }
  }
});

// Menu Burger for mobile devices
let burgerMenu = document.getElementById("burger");
let navbarMenu = document.getElementById("menu");
let wrapperMenu = document.getElementById("wrapper");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
	navbarMenu.classList.toggle("active");
  wrapperMenu.classList.toggle("active");

	if (wrapperMenu.classList.contains("active")) {
		wrapperMenu.style.height = 100 + 'vh';
	} else {
		wrapperMenu.removeAttribute("style");
	}
});

//For the Ad Bloc, css proprety 'sticky' is used l.161.

// When the element called appears in the viewport, the content renders with an animation
const images = document.querySelectorAll('.content-appear-onscroll');

let observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          // if section is appearing on the viewport then we show the content 
          // calling the css animation and getting the data attribute value specified in the html tags
          entry.target.style.animation = `animOnScroll .1s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
          // or else we don't
          entry.target.style.animation = 'none';
        }
    })

})

// looping over the targeted sections
images.forEach(image => {
    observer.observe(image)
})