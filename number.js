var num1 = 99;
var num2 = 179;
var num3 = 45;
if (num1 > num2){
    if (num1 > num3) {
        console.log('biggest number is ', num1);
    }
    else{
        console.log('biggest number is ', num3);
    }
} 
else if (num2 > num3) {
    console.log('biggest number is ', num2);
}
else{
    console.log('biggest number is ', num3);
}
