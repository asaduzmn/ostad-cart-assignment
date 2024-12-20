const buttons = document.getElementsByTagName("button");

function updateTotal() {
  const basePrice = 1299;
  const memoryCost = parseInt(
    document.getElementById("memory-cost").textContent
  );
  const storageCost = parseInt(
    document.getElementById("storage-cost").textContent
  );
  const deliveryCost = parseInt(
    document.getElementById("delivery-cost").textContent
  );
  return basePrice + memoryCost + storageCost + deliveryCost;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons[i].id === "8gb-memory") {
      customizationPrice("memory-cost", 0);
    } else if (buttons[i].id === "16gb-memory") {
      customizationPrice("memory-cost", 150);
    } else if (buttons[i].id === "256gb-storage") {
      customizationPrice("storage-cost", 0);
    } else if (buttons[i].id === "512gb-storage") {
      customizationPrice("storage-cost", 100);
    } else if (buttons[i].id === "1tb-storage") {
      customizationPrice("storage-cost", 200);
    } else if (buttons[i].id === "late-delivery") {
      customizationPrice("delivery-cost", 0);
    } else if (buttons[i].id === "early-delivery") {
      customizationPrice("delivery-cost", 20);
    } else {
      promocode();
    }
  });
}

function customizationPrice(id, cost) {
  const now = document.getElementById(id);
  now.textContent = cost;
  const totalCost = updateTotal();
  const totalPrice = document.getElementById("total-price");
  totalPrice.textContent = totalCost;
  const total = document.getElementById("user-payment");
  total.textContent = totalCost
}

// function promocode()
function promocode() {
  // Get necessary elements
  let inputField = document.getElementById("input-field");
  const total = document.getElementById("user-payment");
  const rightPromo = document.getElementById("right-promo");
  const wrongPromo = document.getElementById("wrong-promo");

  // Get the promo-code and totalCost
  let promoCode = inputField.value.trim();
  let totalCost = updateTotal();
  
  //promo logics
  if(promoCode === ""){
    alert("The promo code is empty!");
  }
  else if(promoCode === "Ostad"){
    totalCost -= (totalCost/10); // 10% discount
    total.textContent = totalCost;
    rightPromo.style.display = "block";
    wrongPromo.style.display = "none";
  }
  else{
    total.textContent = totalCost;
    rightPromo.style.display = "none";
    wrongPromo.style.display = "block";
  }
}