let number = Number(prompt("Nhập số Fibonaci muốn hiển thị"));
while (!Number.isInteger(number) || number < 0) {
  number = Number(prompt("Hãy nhập lại"));
}
printFibonaci(number);
function printFibonaci(number) {
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i < number; i++) {
//     document.write(a + "<br>");
//     // console.log(a + "<br>");

//     let c = a + b;

//     a = b;

//     b = c;
//   }

let F = 0 , F0= 0, F1=0
        let chia5 = ""
        let fibonacci = "";
        for (let i=0; i<number;i++){
            if(i==0){
                F=1
                F1=1
                fibonacci += F+ " "
            }else{

                F= F0+F1
                F0 = F1
                F1 = F
                fibonacci += F+ " "
                console.log(i +" = "+F)
                if(F%5==0){
                    chia5 = F
                    break
                }
            }
        }

        document.write("Sô chia hết cho 5 trong dãy là "+chia5)
}
