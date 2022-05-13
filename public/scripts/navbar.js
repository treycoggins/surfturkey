// Show/hide Dropdown menu on navbar

const dropdown = document.querySelector('#dropdownBtn');
const dropMenu = document.querySelector('.dropdown__list');

dropdown.addEventListener('click', () => {
  dropMenu.style.display = 'block';
});