var robin = 1;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

if (robin > 100) {
    console.log('bai 100 theke beshi paya ki kore sombov');
}
else if (robin >= 80) {
    console.log('robin got A grade');
}
else if (robin >= 60){
    console.log('robin got B grade');
}
else if (robin >= 50){
    console.log('robin got C grade');
}

else if (robin >= 40){
    console.log('robin got D grade');
}

else if (robin < 40 && robin >= 0){
    console.log('robin got F grade');
}

else {
    console.log('0 ar kom kemne paw');
}