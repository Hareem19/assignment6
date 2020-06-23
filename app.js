// ----------------------- chapter 21-25 task 1 -----------------------
// var first= prompt("Enter First name:");
// var last= prompt("Enter Last name:");
// alert("Hello, Welcome dear "+first+" "+last);
// ----------------------- chapter 21-25 task 2 -----------------------
// var str=prompt("Enter a string:")
// alert("Length of the string is: "+str.length)
// ----------------------- chapter 21-25 task 3 -----------------------
// var str=prompt("Enter a string:")
// var find=prompt("Enter letter to find its index")
// for(i=0;i<=str.length;i++)
// {
//     if(str[i]===find)
// alert("Letter"+find+" is at index "+i)
// }
// // ----------------------- chapter 21-25 task 4 -----------------------
// var str = prompt("Enter a string:")
// var find = prompt("Enter letter to find its index")
// // var len=str.length;
// for(i=str.length;i>=0;i++)
// {
//     if(str[i] === find)
//  alert("Letter"+find+" is at index "+i)

// }
// // ----------------------- chapter 21-25 task 5 -----------------------
// var str=("Pakistan");
// alert("string:  "+str)
// alert("character at index 3 is "+str[3]);
// // ----------------------- chapter 21-25 task 6 -----------------------
// var first= prompt("Enter First name:");
// var last= prompt("Enter Last name:");
// var full=concat(first,last)
// alert(full)

// // ----------------------- chapter 21-25 task 7 -----------------------
// var str1=prompt("Enter Islamabad to turn into Hyderabad")
// var str2=str1.replace("Islam","Hyder")
// alert(str2)
// // ----------------------- chapter 21-25 task 8 -----------------------

// var message =("Ali and Sami are best friends. They play cricket and football together.");
// document.write(message);
// var correct=message.replace(/and/g,"&");
// document.write("<br>Corrected sentence:")
// document.write(correct)

// ----------------------- chapter 21-25 task 9 -----------------------


// ----------------------- chapter 21-25 task 10 -----------------------
// var str=prompt("Enter string: ")
// var str1=str.toUpperCase();
// alert(str1)

// ----------------------- chapter 21-25 task 11 -----------------------


// ----------------------- chapter 21-25 task 12 -----------------------

// ----------------------- chapter 21-25 task 13 -----------------------

// var str = prompt("enter your name ")
// for(i=0;i<str.length;i++){
//     if(str[i]==="@" || str[i]=='.'|| str[i]==','|| str[i]=='!')
//     {
//     document.write("enter valid unt"); 

// }
// }
// document.write("perfect");

// ----------------------- chapter 21-25 task 14 -----------------------
// var A=["cake","apple pie","cookie","chips","patties"]
// var input=prompt("Welcome to ABC Bakery . what do you want to order sir/ma'am")
// var bak=input.toLowerCase()
// var bakery=A.indexOf(bak)
// if(A.indexOf(bak)!=-1){
//     alert(bak +" is available at "+bakery+" index in our bakery")
// }
//  else{
//     alert("we are sorry "+bak+" is not available in our bakery")
//  }



// ----------------------- chapter 21-25 task 15 -----------------------


// ----------------------- chapter 21-25 task 16 -----------------------


// ----------------------- chapter 21-25 task 17 -----------------------
// var myString = prompt("enter a string");
//  alert(myString[myString.length-1])


// ----------------------- chapter 21-25 task 18 -----------------------


// ----------------------- chapter 26-30 task 1 -----------------------
// var num=3.45314
// document.write("Number: "+num)
// document.write("Round: "+Math.round(num))
// document.write("Floor: "+Math.floor(num))
// document.write("ceil: "+Math.ceil(num))

// ----------------------- chapter 26-30 task 2 -----------------------
// var num=prompt("Negative float number: ")
// document.write("Number: "+num)
// document.write("Round: "+Math.round(num))
// document.write("Floor: "+Math.floor(num))
// document.write("ceil: "+Math.ceil(num))

// ----------------------- chapter 26-30 task 3 -----------------------

//task4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);

//task5

//task6

// function randomNumber(min, max) { 
// 	return Math.random() * (max - min) + min; 
// } 
// document.write("Random Number between 1 and 100: ") 

// document.write( randomNumber(1, 100) ); 

// ----------------------- chapter 26-30 task 7 -----------------------


//task8

// var theNumber = Math.floor((Math.random() * 10) + 1);
// var userSelect = 0;

// while (theNumber != userSelect) {
//   userSelect = prompt("What is the number?");
//   if (userSelect < theNumber) {
//     alert("Guess Higher!");
//   } else if (userSelect > theNumber) {
//     alert("Guess Lower!");
//   }
// }

// alert("Congrats! You guessed the right number!");



// // ----------------------- chapter 31-34 task 1 -----------------------
// var a=new Date
// alert(a)

// // ----------------------- chapter 31-34 task 2 -----------------------
// function myFunction() {
//     var d = new Date();
//     var index = d.getMonth()
//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
// var n=month[index]
//      alert(n)  
// }
// myFunction();
// // ----------------------- chapter 31-34 task 3 ----------------------

//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
//   var now = new Date(); 
//   var theDay = now.getDay(); 
//  var nameOfToday = dayNames[theDay]
// alert(nameOfToday)
// // ----------------------- chapter 31-34 task 4 -----------------------
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
//   var now = new Date(); 
//   var theDay = now.getDay(); 
//  var nameOfToday = dayNames[theDay]
// alert(nameOfToday)
// if(nameOfToday==="Sun"||"Sat"){
//     alert("Its fundayy!!")
// }

// // ----------------------- chapter 31-34 task 5 -----------------------
// var a=new Date
// var date=a.getDate()
// alert(date)
// if(date<16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// // ----------------------- chapter 31-34 task 6 -----------------------
// var a=new Date
// var b=a.getTime()
// alert(b)
// var c=b/(1000*60*60)
// alert(c)

// // ----------------------- chapter 31-34 task 7 -----------------------
// var a=new Date
// var currentHrs = a.getHours();
// alert(currentHrs+1)
// if(currentHrs<=12)
// alert("Its am")
// else
// alert("Its pm")

// // ----------------------- chapter 31-34 task 8 -----------------------



// // ----------------------- chapter 31-34 task 9 -----------------------



// // ----------------------- chapter 31-34 task 10 -----------------------


// // ----------------------- chapter 31-34 task 11 -----------------------


// // ----------------------- chapter 31-34 task 12 -----------------------


// // ----------------------- chapter 31-34 task 13 -----------------------
// var dob= prompt("")
// var dob=new Date(prompt("Enter date of birth","Dec 26,1970"))
// var dobMilli=dob.getTime()
// var today=new Date()
// var todayMilli=today.getTime()
// alert(today)
// var diff=todayMilli-dobMilli
// var age=diff/(1000*60*60*24*30*12)
// alert(age)
// // ----------------------- chapter 31-34 task 14 -----------------------

// var name=("Hareem Iftikhar")
// var today=new Date();
// var month1=today.getMonth();
// var month=new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
// var n=month[month1]
//  var unit=350
// var charges=18
// var net=charges*unit;
// var late=500;
// var gross=net+500
// document.write("Customer Name : "+name+"<br>")
// document.write("Current Month: "+n+"<br>")
// document.write("Number of units : "+unit+"<br>")
// document.write("Charges per unit: "+charges+"<br>")
// document.write("Net Amount Payable (within Due Date): "+net+"<br>")
// document.write(" Late Payment Surcharge : "+late+"<br>")
// document.write("Gross Amount Payable (after Due Date) : "+gross+"<br>")

// // ----------------------- chapter 35-38 task 1 -----------------------
// var a=new Date
// alert(a)
// // ----------------------- chapter 35-38 task 2 -----------------------

// function greet(){
// var first= prompt("Enter First name:");
// var last= prompt("Enter Last name:");
//  alert("Hello, Welcome dear "+first+" "+last);

// }
// greet();
// // ----------------------- chapter 35-38 task 3 -----------------------
// function add(){
// var num1=+prompt("Enter first value to add")
// var num2=+prompt("Enter second value to add")
// var num3 =num1+num2;
// alert(num3);
// }
// add();
// // ----------------------- chapter 35-38 task 4 -----------------------
// function calc(){
// var num1=+prompt("Enter first value ")
// var opr=prompt("Enter operator")
// var num2=+prompt("Enter second value")
// var num3;
// if(opr=="+"){
//     num3=num1+num2;
// }
// else if(opr=="-"){
//     num3=num1-num2;
// }
// else if(opr=="*"){
//     num3=num1*num2;
// }
// else if(opr=="/"){
//     num3=num1/num2;
// }
// else
// {
// alert("Sorry !! OPERATOR IS NOT AVAILABLE")
// }
// return num3
// }
// ans=calc();
// alert(ans)

// // ----------------------- chapter 35-38 task 5 -----------------------
// var a
// function square(a){
//     alert("Square of "+ a)

//     return a*a
// }
// ans=square(10)
// alert(ans);
// // ----------------------- chapter 35-38 task 6 -----------------------
// function fact(){
// var num=+prompt("Enter num to find factorial")
// var ans =1;
// for(var i=num;i>=1;i--){
//      ans=ans*i
// }
// alert(ans)
// }
// fact();
// // ----------------------- chapter 35-38 task 7 -----------------------
// function count(){
// var start = +prompt("Enter the start number")
// var end = +prompt("Enter the end number")
// for(var i=start;i<=end;i++){
//     document.write(i+" ")
// }
// }
// count();
// // ----------------------- chapter 35-38 task 8 -----------------------
// function area(width,height){
//     document.write("Width:   "+width)
//     document.write(" Height   "+width)
//     var area=width*height;
// return area;
// }
// document.write("Area:   "+area(2,4)+"<br>");
// var w=3,h=4;
// document.write("Area:   "+area(w,h));
// // ----------------------- chapter 35-38 task 9 -----------------------

// // ----------------------- chapter 35-38 task 10 -----------------------
// var word=prompt("Write a word/phrase/sequence to check its palindrome or not: ")
// var check="";
// for(var i=word.length-1;i>=0;i--){
//     check+=word[i]
// }
// alert(check)
// if(word==check){
//     alert(word+" is palidrome")
// }
// else{
//     alert(word+" is not palidrome")
// }
// // ----------------------- chapter 35-38 task 11 -----------------------

// // ----------------------- chapter 35-38 task 12 -----------------------

// // ----------------------- chapter 35-38 task 13 -----------------------
// function count(str,letter){
// alert("String: "+str)
// alert("letter: "+letter)
// var count=0
// for(i=0;i<str.length;i++){
//     if(str[i]===letter){
//         count++;
//     }
// }
// alert(count)
// }
// count("Hareem","e");
// // ----------------------- chapter 35-38 task 14 -----------------------
// function calcCircumferenc(radius){
//  alert("radius: "+radius)
//     alert(`Circumference:${2 * (3.142) * (radius)}`)
// }
// function calcArea(radius){
//     alert("radius: "+radius)
//     alert(`Circumference:${(3.142)*(radius)*(radius)}`)
// }
// calcCircumferenc(5)
// calcArea(5)
