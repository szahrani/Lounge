// Popup
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const popupPrice = document.getElementById('popup-price');
const closeBtn = document.getElementById('close');
const cards = document.querySelectorAll('.card');
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

cards.forEach(card => {
  card.addEventListener('click', () => {
    popup.classList.remove('hidden');
    popupImg.src = card.querySelector('img').src;
    popupTitle.textContent = card.querySelector('p').textContent;
    popupDesc.textContent = card.dataset.desc;
    popupPrice.textContent = card.dataset.price;
  });
});

closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
popup.addEventListener('click', e => { if (e.target === popup) popup.classList.add('hidden'); });

// Tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    contents.forEach(c => {
      c.classList.remove('active');
      if (c.id === target) c.classList.add('active');
    });
  });
});
