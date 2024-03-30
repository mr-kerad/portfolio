const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          entry.target.classList.add('look');
      } else {
          entry.target.classList.remove('look');
      }
  });
}, { threshold: 0.35 }); // Set the threshold to 0.35

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
/*window.addEventListener('scroll', function() {
  var headerMobile = document.querySelector('.nav-mobile');
  var scrollPosition = window.scrollY;
  var threshold = 100; // określ próg przewinięcia, po osiągnięciu którego pojawi się menu

  if (scrollPosition > threshold) {
    headerMobile.classList.add('active');
  } else {
    headerMobile.classList.remove('active');
  }
});
*/

/*Mobile typetext in about section*/
// set up text to print, each item in array is new line
var aText = new Array(
  "There are only 10 types of people in the world:",
  "Those who understand binary, and those who don't."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex == aText.length) {
          setTimeout(function() {
              iIndex = 0; // Reset iIndex to 0 after 5 seconds
              typewriter();
          }, 5000);
          return; // Exit the function to prevent immediate repetition
      }
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
  } else {
      setTimeout("typewriter()", iSpeed);
  }
}

typewriter();


  
  
  typewriter();
