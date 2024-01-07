function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

export { sum, multiply };

///дефолтний експорт один на сторінці (наприклад  забираємо один великий клас (назва ролі не грає ))
const a = 10;

export default a;
