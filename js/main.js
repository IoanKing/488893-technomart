var link_write_us = document.querySelector(".contact-write-us");
var link_map = document.querySelector(".contact-map-link");

var overlay = document.querySelector(".modal-overlay");
var popup_write_us = document.querySelector(".modal-write-us");
var popup_map = document.querySelector(".modal-map");
var close_write_us = popup_write_us.querySelector(".modal-close");
var close_map = popup_map.querySelector(".modal-close");

  link_write_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("active");
    popup_write_us.classList.add("active");
  });

  link_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("active");
    popup_map.classList.add("active");
  });

  close_write_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("active");
    popup_write_us.classList.remove("active");
  });

  close_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("active");
    popup_map.classList.remove("active");
  });
