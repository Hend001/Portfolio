const mobileButton = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav .main-page-ul");
const menuItems = document.querySelectorAll("nav .main-page-ul li a");
const header = document.querySelector("header");
const backButton = document.querySelector("#back-to-top");

// event for mobile menu
const mobileMenu = function () {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

menuItems.forEach((item) => {
  item.addEventListener("click", mobileMenu);
});

// event for back to top button functionality
mobileButton.addEventListener("click", mobileMenu);

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

backButton.addEventListener("click", backToTop);

// event for back to top button visibility
window.onscroll = function () {
  backButtonVisibilty();
};

const backButtonVisibilty = () => {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
};

// read more link
function seeMoreLink(cardNumber) {
  let dots = document.getElementById("dots" + cardNumber);
  let moreText = document.getElementById("more" + cardNumber);
  let btnText = document.getElementById("myBtn" + cardNumber);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<i>Read more...</i>";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
