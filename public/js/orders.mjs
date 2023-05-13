"use strict";

function flipCardListeners() {
  window.addEventListener("click", (event) => {
    const target = event.target;
    const flipCardInner = target.parentElement.parentElement.parentElement.parentElement;
    const flipCardFront = flipCardInner.querySelector(".flip-card-front");
    const flipCardBackItem = flipCardInner.querySelector(".item-info-flip-card");
    const flipCardBackShop = flipCardInner.querySelector(".shop-info-flip-card");
    const flipCardBackRating = flipCardInner.querySelector(".rating-flip-card");

    if (target.matches(".items-info-flip-btn")){
      flipCardInner.style.transform = "rotateY(180deg)";
      flipCardFront.style.display = "none";
      flipCardBackItem.style.display = "block";
    }
    else if (target.matches(".shop-info-flip-btn")) {
      flipCardInner.style.transform = "rotateY(180deg)";
      flipCardFront.style.display = "none";
      flipCardBackShop.style.display = "block";
    }
    else if (target.matches(".order-info-flip-btn")) {
      flipCardInner.style.transform = "";
      flipCardFront.style.display = "block";

      if (target.matches(".from-item-info")) {
        flipCardBackItem.style.display = "none";
      }
      else if (target.matches(".from-shop-info")) {
        flipCardBackShop.style.display = "none";
      }
      else if (target.matches(".from-rating-info")) {
        flipCardBackRating.style.display = "none";
      }
    }
    else if (target.matches(".rating-flip-btn")) {
      flipCardInner.style.transform = "rotateY(180deg)";
      flipCardFront.style.display = "none";
      flipCardBackRating.style.display = "block";
    }
  });
}

flipCardListeners();
