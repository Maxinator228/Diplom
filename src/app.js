//Тариф//
function calculateTotal() {
  let field1Value = parseInt(document.getElementById("field1").value);
  let field2Value = parseInt(document.getElementById("field2").value);
  let totalValue = 0;

  if (isNaN(field1Value)) {
    field1Value = 0;
  }

  if (isNaN(field2Value)) {
    field2Value = 0;
  }

  if (field1Value >= 1) {
    if (field2Value <= 3) {
      totalValue = field2Value * 2000 * field1Value;
    } else if (field2Value <= 5) {
      totalValue = field2Value * 1800 * field1Value;
    } else if (field2Value >= 5){
      totalValue = field2Value * 1680 * field1Value;
    }
  }

  document.getElementById("total").value = totalValue + "₸";
}
document.addEventListener("DOMContentLoaded", function() {
  let field1 = document.getElementById("field1");
  let field2 = document.getElementById("field2");

  field1.addEventListener("input", calculateTotal);
  field2.addEventListener("input", calculateTotal);
});


// Заявка //
const emailButton = document.getElementById("email");
const telegramButton = document.getElementById("telegram");
const emailInput = document.getElementById("email-input");
const telegramInput = document.getElementById("telegram-input");
    
emailButton.addEventListener("click", () => {
      emailButton.classList.add("active");
      telegramButton.classList.remove("active");
      emailInput.style.display = "flex";
      telegramInput.style.display = "none";
    });
    
telegramButton.addEventListener("click", () => {
      telegramButton.classList.add("active");
      emailButton.classList.remove("active");
      telegramInput.style.display = "flex";
      emailInput.style.display = "none";
    });
        
d