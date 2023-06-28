//Responzivní menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".hamburger");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// light/dark mode
const mode = document.querySelector(".doot");
const body = document.querySelector("body");

mode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

//zvětšování obrázků
const image1 = document.querySelector(".image1");
image1.addEventListener("mouseenter", () => {
  image1.style.transform = "scale(1.1)";
  image1.addEventListener("mouseleave", () => {
    image1.style.transform = "scale(1)";
  });
});

const image2 = document.querySelector(".image2");
image2.addEventListener("mouseenter", () => {
  image2.style.transform = "scale(1.1)";
  image2.addEventListener("mouseleave", () => {
    image2.style.transform = "scale(1)";
  });
});

const image3 = document.querySelector(".image3");
image3.addEventListener("mouseenter", () => {
  image3.style.transform = "scale(1.1)";
  image3.addEventListener("mouseleave", () => {
    image3.style.transform = "scale(1)";
  });
});

// Kontrola hesle
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");

const paragraphText = document.querySelector(".result-text");

password1.addEventListener("input", () => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password1Value === password2Value) {
    paragraphText.textContent = "Hesla jsou shodné";
    paragraphText.classList.add("valid");
    paragraphText.classList.remove("invalid");
  } else {
    paragraphText.textContent = "Hesla se liší";
    paragraphText.classList.add("invalid");
    paragraphText.classList.remove("valid");
  }
  if (password1Value === "" && password2Value === "") {
    paragraphText.textContent = "";
  }
});

password2.addEventListener("input", () => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password1Value === password2Value) {
    paragraphText.textContent = "Hesla jsou shodné";
    paragraphText.classList.add("valid");
    paragraphText.classList.remove("invalid");
  } else {
    paragraphText.textContent = "Hesla se liší";
    paragraphText.classList.add("invalid");
    paragraphText.classList.remove("valid");
  }

  if (password1Value === "" && password2Value === "") {
    paragraphText.textContent = "";
  }
});

// Scroll
const scrollButton = document.querySelector(".scroll-button");
const anchor = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    anchor.style.display = "block";
  } else {
    anchor.style.display = "none";
  }
});
