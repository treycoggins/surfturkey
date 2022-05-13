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


