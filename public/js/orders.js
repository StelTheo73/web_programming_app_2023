"use-strict";

function flipCardListeners() {
  let flipCardButtons = document.querySelectorAll(".flip-card-btn");

  flipCardButtons.forEach(function(button) {
    let flipCardInner = button.parentElement.parentElement.parentElement.parentElement;
    let flipCardFront = flipCardInner.querySelector(".flip-card-front");
    let flipCardBackItem = flipCardInner.querySelector(".item-info-flip-card");
    let flipCardBackShop = flipCardInner.querySelector(".shop-info-flip-card");
    
    
    let flipCardShow, flipCardHide;
      
    if (button.className.indexOf("items-info-flip-btn") >= 0) {
      flipCardHide = flipCardFront;
      flipCardShow = flipCardBackItem;
      
      button.addEventListener("click", function() {
        flipCardInner.style.transform = "rotateY(180deg)";
  
        flipCardHide.style.display = "none";
        flipCardShow.style.display = "block";
      });

    }
    else if (button.className.indexOf("shop-info-flip-btn") >= 0) {
      flipCardHide = flipCardFront; 
      flipCardShow = flipCardBackShop; 

        button.addEventListener("click", function() {
          flipCardInner.style.transform = "rotateY(180deg)";
  
          flipCardHide.style.display = "none";
          flipCardShow.style.display = "block";
      });
    }
    else if (button.className.indexOf("order-info-flip-btn") >= 0) {
      flipCardShow = flipCardFront
      if (button.className.indexOf("from-item-info") >= 0) {
        flipCardHide = flipCardBackItem;
      }
      else if (button.className.indexOf("from-shop-info") >= 0) {
        flipCardHide = flipCardBackShop;
      }

      button.addEventListener("click", function() {
        flipCardInner.style.transform = "";
  
        flipCardHide.style.display = "none";
        flipCardShow.style.display = "block";
      });
    }

  })
}

flipCardListeners();
