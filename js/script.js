// ===== 1. Flower filter (Flowers page) =====
const filterButtons = document.querySelectorAll('.filter-btn');
const flowerCards = document.querySelectorAll('.card[data-category]');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const choice = button.dataset.filter;

    // highlight the clicked button
    filterButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    // show matching cards, hide the rest
    flowerCards.forEach(function (card) {
      const categories = card.dataset.category.split(' ');
      if (choice === 'all' || categories.includes(choice)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ===== 2. Enquiry form (Contact page) =====
const form = document.getElementById('enquiry-form');

if (form) {
  // If the user clicked "Enquire Now" on a flower, fill in the message
  const params = new URLSearchParams(window.location.search);
  const flower = params.get('flower');
  if (flower) {
    document.getElementById('type').value = 'personal';
    document.getElementById('message').value = 'Hi, I would like to enquire about the ' + flower + ' arrangement.';
  }

  // Check the form before sending
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const type = document.getElementById('type').value;
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('form-message');

    let error = '';

    if (name === '') {
      error = 'Please enter your name.';
    } else if (email === '' || !email.includes('@') || !email.includes('.')) {
      error = 'Please enter a valid email address.';
    } else if (type === '') {
      error = 'Please choose an enquiry type.';
    } else if (message.length < 10) {
      error = 'Please write a message (at least 10 characters).';
    }

    if (error !== '') {
      feedback.textContent = error;
      feedback.className = 'form-message error';
    } else {
      feedback.textContent = 'Thank you, ' + name + '! Your enquiry has been sent. We will reply within one working day.';
      feedback.className = 'form-message success';
      form.reset();
    }
  });
}
// ===== Mobile navigation =====
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', function () {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}
