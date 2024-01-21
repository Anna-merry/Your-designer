const elements = document.getElementsByClassName("card-img-overlay");
const screenHeight = window.innerHeight;
element.style.height = `${screenHeight}px`;
window.addEventListener("resize", changeFontSize);

const elements = document.getElementsByClassName("carousel-caption");
const screenHeight = window.innerHeight;
element.style.height = `${screenHeight}px`;
window.addEventListener("resize", changeFontSize);

function validateForm() {
      const name = document.forms["myForm"]["name"].value;
      const email = document.forms["myForm"]["email"].value;
      const message= document.forms["myForm"]["message"].value;
    
      if (name == "") {
        alert("Пожалуйста, введите ваше имя");
        return false;
      }
    
      if (email == "") {
        alert("Пожалуйста, введите ваш email");
        return false;
      }
    }
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.break_b');
  const windowHeight = window.innerHeight;

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  checkPosition();
}

fadeInOnScroll();
  
		
