function doanSo(){
    let number = Number(prompt("Số bạn muốn đoán trong khoảng lớn bao nhiêu"));
    let number_random = Math.floor(Math.random()*number);
    console.log(number_random);
    let number_check = Number(prompt("Nhập số bạn muốn đoán"));
    let count = 0;
    while(number_check !== number_random){
        count++;
        if(count === 4){
            alert("Bạn hết số lần đoán")
        }
        if(number_check > number_random){
            alert("số bạn đoán bé hơn");
        }else{
            alert("Số bạn đoán lớn hơn")
        }
        number_check = Number(prompt("Nhập số bạn muốn đoán"));
    }
    if(number_check === number_random){
        document.write("Bạn đã đoán đúng");
    }else{
        document.write("Bạn đã hết số lần đoán");
    }
}

// function doanSo() {
//   let scope = Number(prompt("Nhập khoảng mà bạn muốn đoán"));
//   let enterNumber = Number(prompt("Nhập số bạn đoán"));
//   let ranDom = Math.floor(Math.random() * scope);
//   console.log(ranDom);
//   if (scope) {
//     if (enterNumber === ranDom) {
//       alert("Bạn đã đoán đúng");
//     } else {
//       while (enterNumber !== ranDom) {
//         if (enterNumber < ranDom) {
//           alert("Số bạn phải đoán lớn hơn");
//           enterNumber = Number(prompt("Nhập số bạn đoán"));
//         } else if (enterNumber > ranDom) {
//           alert("Số bạn phải đoán bé hơn");
//           enterNumber = Number(prompt("Nhập số bạn đoán"));
//         } else {
//           document.write("Bạn đã đoán đúng");
//         }
//       }
//     }
//   }
// }
