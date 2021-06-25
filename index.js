
var lines = document.getElementById("Opaque_Ring");
const sec = document.querySelectorAll(".right-one[id]");








var len = lines.getTotalLength();


lines
.style.strokeDashoffset = 0;
window.addEventListener("scroll", scroller);

function scroller() {
  Hi_lighter();
}

function Hi_lighter() {


  let scrollY = window.pageYOffset;

  sec.forEach((current) => {
    const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      

    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.left-one section[id="#${sectionId}"]`)
        .classList.add("active");
      document.querySelector(".path-slider").classList.add(`_${sectionId}`);
      lines.style.strokeDasharray = scrollY / 5;
        

    } else {
      document
        .querySelector(`.left-one section[id="#${sectionId}"]`)
        .classList.remove("active");
      document.querySelector(".path-slider").classList.remove(`_${sectionId}`);
    }
  });
}


// const direction = {
//     curviness: 1,
//     autoRotate: true,
//     values: [
//         {x:5,y:42}
//     ]
// }
