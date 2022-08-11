/*Hamburger*/
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks(){
    this.navLinks.forEach((link, index) => {
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = 'navLinkFade 0.5s ease forwards $ { index / 7 + 0.3}s');
    });
  }

  handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init(){
    if (this.mobileMenu){
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

/*animaçoes de digitação */

const el = document.querySelector("#name");
const text = "Larissa Balieiro."
const interval = 200;

function showText(el,text,interval){

    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);

}

showText(el,text,interval);


/*Revelar ao aparecer */
function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible){
      reveal.classList.add("active");
    }else{
      reveal.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);