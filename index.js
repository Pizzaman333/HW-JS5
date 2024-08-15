const drink = prompt("Будь ласка, виберіть 'Кава', 'Чай' або 'Сік'");
console.log("Ви обрали:", drink);

const day = prompt("Будь ласка, введіть день тижня");
switch (day.toLowerCase()) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    console.log(day, "це робочий день");
    break;
  case "субота":
  case "неділя":
    console.log(day, "це вихідний день");
    break;
  default:
    console.log(day, "це не день тижня");
}

const month = prompt("Будь ласка, введіть місяць");
switch (month.toLowerCase()) {
  case "березень":
  case "квітень":
  case "травень":
    console.log(month, "відноситься до весни");
    break;
  case "червень":
  case "липень":
  case "серпень":
    console.log(month, "відноситься до літа");
    break;
  case "вересень":
  case "жовтень":
  case "листопад":
    console.log(month, "відноситься до осені");
    break;
  case "грудень":
  case "січень":
  case "лютий":
    console.log(month, "відноситься до зими");
    break;
  default:
    console.log(month, "це не місяць");
}

const month2 = prompt("Будь ласка, введіть місяць");
switch (month2.toLowerCase()) {
  case "квітень":
  case "червень":
  case "вересень":
  case "листопад":
    console.log(month2, "має 30 днів");
    break;
  case "березень":
  case "травень":
  case "липень":
  case "серпень":
  case "жовтень":
  case "грудень":
  case "січень":
    console.log(month2, "має 31 день");
    break;
  case "лютий":
    console.log("У 2024 році, ", month2, "має 29 днів");
    break;
  default:
    console.log(month2, "це не місяць");
}

const color = prompt("Будь ласка, введіть колір (бажано червоний, жовтий або зелений)");
let action;
switch (color.toLowerCase()) {
  case "червоний":
    action = "стоп";
    break;
  case "жовтий":
    action = "чекати";
    break;
  case "зелений":
    action = "йти";
    break;
    default:
        action = "Неправильний колір";
}
console.log(action);

const number1 = Number.parseFloat(prompt("Виберіть перше число"));
const number2 = Number.parseFloat(prompt("Виберіть друге число"));
const operation = prompt("Виберіть дію (+, -, *, /)");
let result;
switch (operation) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "/":
    result = number1 / number2;
    break;
    case "*":
    result = number1 * number2;
    break;
    default:
        result = "Неправильна дія";
}
console.log(result);