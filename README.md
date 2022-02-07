# level-0-coding-challenges
Task 0.1
var x = 0;
var y = 1;

console.log(x);
console.log(y);

x += 3;
y += x;

console.log(x);
console.log(y);

Task 0.2
var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = (1 + (1 * 2));
var a = 1 + 1 * 2 / 2;
var b = (1 + 1 * 2) / 2;

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);

Task 0.3
function hello (str){
    console.log("Hello" + str + "!")
}
hello("Tshepo");

Task 0.4
function evenOrOdd(num){
    if (number % 2 == 0){
       console.log("The number is even.");
    }else { if (number % 2 >=1){
    console.log("The number is odd.");
}
Task 0.5
// Pythagoras theorem formula
function areaOfTriangle(a, b, c){
    var s = (a + b +c)/2;
    var area = Math.sqrt(s*((s - a)*(s - b)*(s - c)));
    console.log(area);

}
Task 0.7

Task 0.8
function timeConvert(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

console.log(timeConvert(200));

Task 0.9
function vowelCount(str) {
    var count = 0;
    var vowels = "aeiou";
    
    for(var i = 0; i <str.lenght; i ++){
        if (vowels.indexOfStr[i].toLowerCase()) > -1) {
        count++;
    }
}
 
     return "This string has " + count + " vowels in it";
}
vowelCount("Umuzi");
