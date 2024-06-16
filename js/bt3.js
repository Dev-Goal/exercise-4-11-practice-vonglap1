let number = Number(prompt("Bạn muốn hiển thị bao nhiêu số Fibonaci"));
while (!Number.isInteger(number) || number < 0) {
  number = Number(
    prompt(
      "Vui lòng nhập số nguyên dương"
    )
  );
}
printFibonacci(number);
function printFibonacci(number) {
  let a = 0,
    b = 1;
  for (let i = 0; i < number; i++) {
    document.write(a + "<br>");
    let next = a + b;
    a = b;
    b = next;
  }
}

// printFibonacci(20);

// function generateFibonacci(n) {
//   let fibSequence = [0, 1];

//   for (let i = 2; i < n; i++) {
//       fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
//   }

//   return fibSequence;
// }

// const first10FibNumbers = generateFibonacci(20);
// document.write(first10FibNumbers);

// function printFibonacci(n) {
//   let a = 0, b = 1
//   for (let i = 0; i < n; i++) {
//       document.write(a + ",");
//       let next = a + b;
//       a = b;
//       b = next;
//   }
// }

// printFibonacci(20);
