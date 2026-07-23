"use strict";

const $shareBtn = document.getElementById("share-btn");
const $sharePanel = document.getElementById("share-panel");

document.addEventListener("click", (e) => {
  if (e.target.closest("#share-btn")) {
    $sharePanel.classList.toggle("card__share-panel--visible");
  }
});
