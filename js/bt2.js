let number = Number(prompt("Hãy nhập nhiệt độ hiện tại"));
for(;;){
    if (number < 20){
        number = Number(prompt("tăng"));
    }else if(number > 100){
        number = Number(prompt("giảm"));
    }else{
        alert("Goodjob Amazing");
    }
}