import Swiper from "swiper";

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

const openCity = (evt) => {
  let i, tabcontent, tablinks;
  const { name } = evt.currentTarget.dataset;
  tabcontent = document.getElementsByClassName("material__tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
};

const tablinks = document.querySelectorAll(".tablink");
tablinks.forEach(function (tablink) {
  tablink.onclick = openCity
});
