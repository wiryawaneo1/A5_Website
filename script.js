//Active navigation on scroll
//referenced from https://codepen.io/Gjoko-Bulovski/pen/eovBwX?editors=1010
//100% size
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('navbar ul li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
// //Active navigation on scroll
// //referenced from https://codepen.io/Gjoko-Bulovski/pen/eovBwX?editors=1010
// window.addEventListener('scroll', event => {
//   let navigationLinks = document.querySelectorAll('navbar ul li a');
//   let fromTop = window.scrollY;

//   navigationLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//    var sections = document.getElementsByClassName('section');
//   //  console.log(sections[0].offsetTop)

//    for (var i = 0; i < sections.length; i++) {
//     var sectionH = sections[i];
//     console.log(sectionH.offsetTop);
// }
//     if (
//       sectionH.offsetTop <= fromTop &&
//       sectionH.offsetTop + sectionH.offsetHeight > fromTop
//     ) {
//       link.classList.add('active');
//     } else {
//       link.classList.remove('active');
//     }
//   });
// });

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("navbar");
const navLinks = document.querySelectorAll('navbar ul li a');
var i;

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
})

for (i=0; i<navLinks.length; i++) {
console.log(navLinks[i]);
navLinks[i].addEventListener("click", () => {
  navbar.classList.toggle("open");
})
}
