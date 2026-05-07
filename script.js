const text = "You became my favorite habit 🤧💖";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.querySelector('.typing').innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}

typingEffect();

function showMessage() {
  document.getElementById('messageBox').classList.remove('hidden');

  window.scrollTo({
    top: document.getElementById('messageBox').offsetTop,
    behavior: 'smooth'
  });
}

function showLove() {
  document.getElementById('loveText').innerHTML =
    "Happy Birthday My bestieeeeeee mera kuchupuchuu 🌝💖";
}
