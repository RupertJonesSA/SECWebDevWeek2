// User Input
// let myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

let text = prompt("Please enter your name.");
// ?? checks if the value is null or undefined
// if (text) checks if text exists at all
if (text){
    console.log(text.length);
    console.log(text.trim().length)
    console.log(text.trim());
}else{
    console.log("You didn't enter your name.");
}
