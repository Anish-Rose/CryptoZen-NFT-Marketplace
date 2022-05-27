/* swiper */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//table swiper

var swiper = new Swiper(".myTableSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.00": {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* likes */
let likes = document.querySelectorAll(".fa-heart");
//to get all  likes icons
likes.forEach((like) => {
  like.addEventListener("click", function () {
    like.classList.toggle("likes");
  });
});

/* dark mode */
/* document.documentElement.setAttribute("data-theme", "light-theme") */
let dark = document.querySelector("#dark");
let light = document.querySelector("#light");
let themes = document.querySelector("#themes");
let nav = document.querySelector("nav");
let btn = document.querySelectorAll(".wallet-box a");

dark.addEventListener("click", function () {
  if (themes.getAttribute("data-theme") === "light") {
    themes.setAttribute("data-theme", "dark");
    nav.classList.remove("navbar-light");
    nav.classList.add("navbar-dark");
    btn.forEach((btn) => {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-outline-light");
    });
    localStorage.setItem("theme", "dark");
  }
});
light.addEventListener("click", function () {
  if (themes.getAttribute("data-theme") === "dark") {
    themes.setAttribute("data-theme", "light");
    nav.classList.remove("navbar-dark");
    nav.classList.add("navbar-light");
    btn.forEach((btn) => {
      btn.classList.remove("btn-outline-light");
      btn.classList.add("btn-outline-dark");
    });
    localStorage.setItem("theme", "light");
  }
});

//theme colors
var themesColors = document.querySelectorAll(".theme-colors");
let resetBtn = document.querySelectorAll(".reset-btn");
themesColors.forEach((theme) => {
  theme.addEventListener("click", function () {
    colorValue = theme.getAttribute("data-color");
    document.documentElement.style.setProperty(
      `--button-color`,
      `${colorValue}`
    );
  });
});

//font size change
let fontSize = document.querySelectorAll(".font-size-button");
fontSize.forEach((font) => {
  font.addEventListener("click", function () {
    fontValue = font.getAttribute("data-font-size");
    var elements = document.querySelectorAll("html");
    elements.forEach((element) => {
      element.style.fontSize = fontValue;
    });
  });
});

//show more
$(document).ready(function () {
  $(".nft-box").slice(0, 3).show();
  $("#loadMoreBtn").on("click", function (e) {
    e.preventDefault();
    $(".nft-box:hidden").slice(0, 3).slideDown();
    if ($(".nft-box:hidden").length == 0) {
      $("#loadMoreBtn").hide();
    }
  });
});

//countdown for nft-live-products

time = document.querySelectorAll("#nft-time");

function countdown() {
  time.forEach((time) => {
    var now = new Date();
    var eventDate = new Date(2030, 13, 04);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    countdown = time.innerHTML = `${h} hours ${m} min ${s} sec`;
  });
}

setInterval(countdown, 1000);

/* preloader */
let loader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
});

/* footer  */

var CopyRightYear = (document.querySelector("#copyrightYear").innerHTML =
  new Date().getFullYear());

//login and signup modal

//scroll to top button
const mybutton = document.querySelector(".scroll ");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
