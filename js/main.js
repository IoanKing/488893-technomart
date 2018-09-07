var link_write_us = document.querySelector(".contact-write-us");
var link_map = document.querySelector(".contact-map-link");
var feature_slider = document.querySelector(".feature-slider");
var link_buy = document.querySelectorAll(".catalog-buy");

var popup_write_us = document.querySelector(".modal-write-us");
var popup_map = document.querySelector(".modal-map");
var popup_bookmarks = document.querySelector(".modal-bookmarks");

var overlay = document.querySelector(".modal-overlay");

if ( feature_slider ) {
  var button_back = feature_slider.querySelector(".slider-button-back");
  var button_next= feature_slider.querySelector(".slider-button-next");

  var tab_punchers = feature_slider.querySelector("#slider-tab-punchers");
  var tab_drills = feature_slider.querySelector("#slider-tab-drills");
}

if ( popup_write_us ) {
  var close_write_us = popup_write_us.querySelector(".modal-close");
  var form_write_us = popup_write_us.querySelector("form");

  var feedback_name = popup_write_us.querySelector("[name=feedback-name]");
  var feedback_email = popup_write_us.querySelector("[name=feedback-email]");
  var feedback_text = popup_write_us.querySelector("[name=feedback_text]");
}

if ( popup_map )
  var close_map = popup_map.querySelector(".modal-close");

if ( popup_bookmarks )
  var close_bookmarks = popup_bookmarks.querySelector(".modal-close");

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

if ( link_write_us ) {
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
}

if ( link_buy ) {
  // link_buy.forEach(function(item) {
  for (var item = 0; item < link_buy.length; item++) {
    link_buy[item].addEventListener("click", function(evt) {
      evt.preventDefault();
      overlay.classList.add("active");
      popup_bookmarks.classList.add("active");
    });
  };
}

if ( link_map ) {
  link_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("active");
    popup_map.classList.add("active");
  });
}

if ( close_write_us ) {
  close_write_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("active");
    popup_write_us.classList.remove("active");
    popup_write_us.classList.remove("modal-error");
    popup_write_us.offsetWidth = popup_write_us.offsetWidth;
    popup_write_us.classList.remove("modal-error");
  });
}

if ( close_map ) {
  close_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("active");
    popup_map.classList.remove("active");
  });
}

if ( close_bookmarks ) {
  close_bookmarks.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("active");
    popup_bookmarks.classList.remove("active");
  });
}

if ( form_write_us ) {
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
}

if ( button_back ) {
  button_back.addEventListener("click", function (evt) {
    evt.preventDefault();
    if ( !tab_punchers.checked ) {
      tab_punchers.checked = true;
      tab_punchers.classList.add("active");
    }
    if (tab_drills.classList.contains("active")) {
      tab_drills.classList.remove("active");
    }
  });
}

if ( button_next ) {
  button_next.addEventListener("click", function (evt) {
    evt.preventDefault();
    if ( !tab_drills.checked ) {
      tab_drills.checked = true;
      tab_drills.classList.add("active");
    }
    if (tab_punchers.classList.contains("active")) {
      tab_punchers.classList.remove("active");
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if ( popup_map ) {
      if (popup_map.classList.contains("active")) {
        popup_map.classList.remove("active");
      }
    }
    if ( popup_write_us ) {
      if (popup_write_us.classList.contains("active")) {
        popup_write_us.classList.remove("active");
        popup_write_us.classList.remove("modal-error");
      }
    }
    if ( popup_bookmarks ) {
      if (popup_bookmarks.classList.contains("active")) {
        popup_bookmarks.classList.remove("active");
      }
    }
    if (overlay.classList.contains("active")) {
      overlay.classList.remove("active");
    }
  }
});
