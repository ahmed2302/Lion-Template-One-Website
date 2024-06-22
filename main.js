document.querySelector(".header .links").onclick = () => {
  document.querySelector(".header .links ul").classList.toggle("show");
};

window.onscroll = () => {
  console.log(this.scrollY);
  if (this.scrollY > document.querySelector(".services").offsetTop) {
    document.querySelector(".back").classList.add("show");
  } else if (this.scrollY < document.querySelector(".services").offsetTop) {
    document.querySelector(".back").classList.remove("show");
  }
};
document.querySelector(".back").onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
