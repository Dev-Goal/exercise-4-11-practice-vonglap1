let number = Number(
  prompt("Nhập vào số Fibonaci bạn muốn hiển thị và tính tổng")
);
while (!Number.isInteger(number) || number < 0) {
  number = Number(prompt("Hãy nhập lại"));
}
checkFibonaci(number);
function checkFibonaci(number) {
  let a = 0;
  let b = 1;
  let tong = 0;
  for (let i = 0; i < number; i++){
    document.write(a + "<br>");
    let c = a + b;
    a = b;
    b = c;
    tong += c;
  }
  document.write("Tổng của dãy số là " + tong);
}
