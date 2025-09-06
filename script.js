// Write a program to take a number in a variable, do the required arithmetic to display the following result in you browser:
var a = 10;
document.writeln("Result: " + "<br>")
document.writeln("The value of a is: " + a + "<br>" + "<br>")

var a = a+1;
document.writeln("The value of ++a is: " + a + "<br>")
document.writeln("Now The value of a is: " + a + "<br>" + "<br>")

var a = 11;
var b= ++a;
document.writeln("The value of a++ is: " + a + "<br>")
document.writeln("Now The value of a is: " + b + "<br>" + "<br>" )

var a = 11;
var b= --a;
document.writeln("The value of a++ is: " + a + "<br>")
document.writeln("Now The value of a is: " + b + "<br>" + "<br>" )

// What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a=2;
var b=1;
var result = --a;
document.writeln("Value of a is: 2 " + "<br>")
document.writeln("Result of --a is: " + result + "<br>" + "<br>")

// Write a program that takes input a name from user & greet the user.
var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "!");