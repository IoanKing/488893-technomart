var link_write_us = document.querySelector(".contact-write-us");
var link_map = document.querySelector(".contact-map-link");
var feature_slider = document.querySelector(".feature-slider");

var overlay = document.querySelector(".modal-overlay");

var button_back = feature_slider.querySelector(".slider-button-back");
var button_next= feature_slider.querySelector(".slider-button-next");

var tab_punchers = feature_slider.querySelector("#slider-tab-punchers");
var tab_drills = feature_slider.querySelector("#slider-tab-drills");

var popup_write_us = document.querySelector(".modal-write-us");
var popup_map = document.querySelector(".modal-map");

var close_write_us = popup_write_us.querySelector(".modal-close");
var close_map = popup_map.querySelector(".modal-close");

var form_write_us = popup_write_us.querySelector("form");

var feedback_name = popup_write_us.querySelector("[name=feedback-name]");
var feedback_email = popup_write_us.querySelector("[name=feedback-email]");
var feedback_text = popup_write_us.querySelector("[name=feedback_text]");

var isStorageSupport = true;
var storage = {
    feedback_name: "",
    feedback_email: "",
};

  try {
    storage.feedback_name = localStorage.getItem("feedback_name", feedback_name.value);
    storage.feedback_email = localStorage.getItem("feedback_email", feedback_email.value);
  } catch (err) {
    isStorageSupport = false;
  }

  link_write_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("active");
    popup_write_us.classList.add("active");
    feedback_name.focus();

    if ( storage.feedback_name ) {
      feedback_name.value = storage.feedback_name;
      feedback_email.focus;
    } else if ( storage.feedback_name ) {
      feedback_email.value = storage.feedback_email;
      feedback_text.focus;
    }
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
    popup_write_us.classList.remove("modal-error");
    popup_write_us.offsetWidth = popup_write_us.offsetWidth;
    popup_write_us.classList.remove("modal-error");
  });

  close_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("active");
    popup_map.classList.remove("active");
  });

  form_write_us.addEventListener("submit", function (evt) {
    if ( !feedback_name.value || !feedback_email.value ) {
      evt.preventDefault();
      popup_write_us.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("feedback_name", feedback_name.value);
        localStorage.setItem("feedback_email", feedback_email.value);
      }
    }
  });

  button_back.addEventListener("click", function (evt) {
    evt.preventDefault();
    if ( !tab_punchers.checked ) tab_punchers.checked = true;
  });

  button_next.addEventListener("click", function (evt) {
    evt.preventDefault();
    if ( !tab_drills.checked ) tab_drills.checked = true;
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup_map.classList.contains("active")) {
        popup_map.classList.remove("active");
      }
      if (popup_write_us.classList.contains("active")) {
        popup_write_us.classList.remove("active");
        popup_write_us.classList.remove("modal-error");
      }
      if (overlay.classList.contains("active")) {
        overlay.classList.remove("active");
      }
    }
  });
