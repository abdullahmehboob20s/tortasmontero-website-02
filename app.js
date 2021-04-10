let modal = document.querySelector(".modal");
let black_screen = document.querySelector(".black_screen");
let modal_image = document.getElementById("modal_image");
let modal_title = document.getElementById("modal_title");
let product_modal = document.querySelector(".product_modal");
let product_modal_black_screen = document.querySelector(
  ".product_modal_black_screen"
);
let textarear = document.getElementById("textarear");
let char_count = document.querySelector(".char_count");
let nombre = document.getElementById("nombre");
let Email = document.getElementById("Email");
let ComunaCiudad = document.getElementById("Comuna/Ciudad");
let Mensaje = document.getElementById("Mensaje");
let contact_error = document.querySelector(".contact_error");
let header_link = document.querySelectorAll(".header_link");
let unike = document.querySelector(".unike");
let header_links = document.querySelector(".header_links");
let nested = document.querySelector(".nested");

function openMenue() {
  nested.classList.toggle("open_menue");
}

function openNav() {
  header_links.classList.toggle("header_link_open");
}

function submitContactForm() {
  if (
    (nombre.value == "") |
    (Email.value == "") |
    (ComunaCiudad.value == "") |
    (Mensaje.value == "")
  ) {
    contact_error.style.display = "block";
  } else {
    contact_error.style.display = "none";
    nombre.value = "";
    Email.value = "";
    ComunaCiudad.value = "";
    Mensaje.value = "";
  }
}

function openMap(link) {
  window.open(link, "blank");
}

var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function openModal(link, text) {
  modal.style.display = "block";
  black_screen.style.display = "block";
  modal_image.src = link;
  modal_title.innerHTML = text;
}

black_screen?.addEventListener("click", () => {
  modal.style.display = "none";
  black_screen.style.opacity = "none";
});

function closeModal() {
  modal.style.display = "none";
  black_screen.style.display = "none";
}

function openProductDetailModal() {
  product_modal.style.display = "block";
  product_modal_black_screen.style.display = "block";
}
function productModalCloseBtn() {
  product_modal.style.display = "none";
  product_modal_black_screen.style.display = "none";
}

product_modal_black_screen?.addEventListener("click", () => {
  product_modal.style.display = "none";
  product_modal_black_screen.style.display = "none";
});

let textareaValue = (e) => {
  char_count.innerHTML = e.value.length;
};
