const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          entry.target.classList.add('look');
      } else {
          entry.target.classList.remove('look');
      }
  });
}, { threshold: 0.4 }); // Set the threshold to 0.35

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



/*FAQ buttons */
function bulb(questionNumber) {
  let show = document.getElementById('show-' + questionNumber);
  let hello = document.getElementById('hello-' + questionNumber);
  let faq = document.getElementById('faq-item-' + questionNumber);

  if (hello.style.display !== 'inline-block') {
    show.src = "./assets/delete.png";
    show.style.backgroundColor = '#6d7aff';
    hello.style.display = 'inline-block';
  } else {
    show.src = "./assets/down.png";
    show.style.backgroundColor = '';
    hello.style.display = 'none';
  }
}

document.getElementById('faq-item-1').addEventListener('click', function() {
  bulb(1);
});

document.getElementById('faq-item-2').addEventListener('click', function() {
  bulb(2);
});

document.getElementById('faq-item-3').addEventListener('click', function() {
  bulb(3);
});

document.getElementById('faq-item-4').addEventListener('click', function() {
  bulb(4);
});

document.getElementById('faq-item-5').addEventListener('click', function() {
  bulb(5);
});

/*Header mobile */
window.addEventListener('scroll', function() {
  var headerMobile = document.querySelector('.nav-mobile');
  var scrollPosition = window.scrollY;
  var threshold = 100; // określ próg przewinięcia, po osiągnięciu którego pojawi się menu

  if (scrollPosition > threshold) {
    headerMobile.classList.add('active');
  } else {
    headerMobile.classList.remove('active');
  }
});

