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
// Pythagoras theorem formula
function areaOfTriangle(a, b, c){
    var s = (a + b +c)/2;
    var area = Math.sqrt(s*((s - a)*(s - b)*(s - c)));
    console.log(area);

}

