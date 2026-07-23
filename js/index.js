"use strict";

const $shareBtn = document.getElementById("share-btn");
const $sharePanel = document.getElementById("share-panel");

$shareBtn.addEventListener("click", () => {
  const isVisible = $sharePanel.classList.toggle("card__share-panel--visible");
  $shareBtn.setAttribute("aria-expanded", isVisible);
  $shareBtn.classList.toggle("card__share-btn--clicked");
});
