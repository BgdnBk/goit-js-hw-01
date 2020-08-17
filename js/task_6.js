let enterNumber;
let total = 0;

do {
  enterNumber = Number(prompt(` введите число`));
  if (enterNumber === null) {
    break;
  } else if (enterNumber !== Number.isInteger()) {
    console.log('Введите число!');
  }

  total += enterNumber;
  console.log(total);
} while (enterNumber);

console.log(`Общая сумма чисел равна ${total}`);
