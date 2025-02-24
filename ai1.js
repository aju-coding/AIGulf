var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
gsap.registerPlugin(ScrollTrigger);


document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px"; 
});
function text1() {
  let landt = document.querySelector("#landtext");
  let lante = landt.textContent;
  let splitlandt = lante.split("");
  let clutter = "";

  splitlandt.forEach(function (elem) {
    clutter += `<span>${elem}</span>`; // Wrap each letter in a span
  });

  landt.innerHTML = clutter; // Update the text inside the element
}

text1(); // Call function BEFORE running GSAP animations

gsap.from("#landtext span", { // Target spans inside #landtext
  y: 10,
  duration: 5,
  repeat: 0,
  scrub: 2,
  rotate: 10,
  opacity: 0,
  stagger: -0.1, // Make letters animate one by one
  ease: "power1.out",
});

gsap.from("#landtext2",{
  x:10,
  // x:-100,
  duration:5,
  repeat:0,
  ease:"power1.inOut",
  scrub:2,
  rotate:10,
  opacity:0
  })
  gsap.from("#paraforlandpage",{
    y:50,
    // x:-100,
    duration:5,
    repeat:0,
    ease:"power1.inOut",
    scrub:2,
    stagger:-0.1,
    rotate:-10,
    opacity:0
    })

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "rgba(18, 17, 17, 0.32)",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from("#scroller-in",{

})
gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  scale:0,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 45%",
    scrub: 0.8,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 75%",
    end: "top 55%",
    scrub: 1,
    repeat:-1
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  duration:2,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 25%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  duration:2,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 35%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page3 p", {
    scale:0.3,
    duration:3,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 190%",
      end: "top 100%",
      scrub: 2,
      stagger: 0.3
    },

});

gsap.from("#page4 h1", {
  y: 120,
  duration: 5,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 99%",
    end: "top 15%",
    scrub: 2,
    stagger: 0.5
  },
});

function navtext() {
  let navtxtElements = document.querySelectorAll(".navtxt"); // Select all elements with class navtxt
  
  navtxtElements.forEach((navtxt) => {
    let splitedtxt = navtxt.textContent.split(""); // Split text into characters
    let clutter = "";

    splitedtxt.forEach(function (elem) {
      clutter += `<span>${elem}</span>`; // Wrap each character in a <span>
    });

    navtxt.innerHTML = clutter; // Replace original text with spans
  });

  // GSAP Animation
  gsap.from(".navtxt span", {
    y: 10,
    opacity: 0,
    duration: 0.09,
    stagger: 0.09, // Adds a delay between each character animation
    ease: "power3.out",
    scrub: 2
  });
}

// Call the function
navtext();
