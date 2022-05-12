////////// CONTACT FORM ////////////


// Show/hide contact modal
const contactBtn = document.getElementById('contactBtn');
const contactForm = document.getElementById('contactForm');
const span = document.getElementById('closeForm')

contactBtn.addEventListener('click', () => {
  contactForm.style.display = 'flex';
});

span.onclick = function() {
  contactForm.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == contactForm) {
    contactForm.style.display = "none";
  }
}


// Show/hide Dropdown menu on navbar

 const dropdown = document.querySelector('#dropdownBtn');
 const dropMenu = document.querySelector('.dropdown__list');

 dropdown.addEventListener('click', () => {
   dropMenu.style.display = 'block';
 });