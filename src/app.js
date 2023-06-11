const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultInput = document.getElementById('result');

    // Функция для обновления результата при изменении значений в полях ввода
    function updateResult() {
      const number1 = parseFloat(number1Input.value);
      const number2 = parseFloat(number2Input.value);
      if (!isNaN(number1) && !isNaN(number2)) {
        const sum = number1 + number2;
        resultInput.value = sum.toFixed(2); // Округляем результат до двух знаков после запятой
      } else {
        resultInput.value = ''; // Очищаем поле результата, если введены некорректные значения
      }
    }
    // Обновляем результат при изменении значений в полях ввода
    number1Input.addEventListener('input', updateResult);
    number2Input.addEventListener('input', updateResult);


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
        