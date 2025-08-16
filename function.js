

// Function (No input No output)
// let a = 100;
// let b = 200;
// function add()
// {
//     let c;
//     c = a + b;
//     console.log(c);
// }
// add();

// Function (No parameter, there is return)
// let a = 100;
// let b = 200;
// function add()
// {
//     let c;
//     c = a + b;
//     return c;
// }
// let res = add();
// console.log(res);

// Function (has parameter, there is no return)

// function add(x,y)
// {
//     let c;
//     c = x + y;
//     console.log(c)
// }
// let a = 100;
// let b = 200;
// add(a,b);

// Function (has parameter, there is return)

// function add(x,y)
// {
//     let c;
//     c = x + y;
//     return c;
// }
// let a = 100;
// let b = 200;
// let res = add(a,b)
// console.log(res)
// add(a,b);

// let student1Marks = 89;
// let student1MaxMarks = 100;
// let student1Percentage = (student1Marks/student1MaxMarks)*100;
// let student1Grade;

// if(student1Percentage>=90)
// {
//     student1Grade = 'A';
// }
// else if(student1Percentage>=80)
// {
//     student1Grade = 'B';
// }
// else if(student1Percentage>=80)
// {
//     student1Grade = 'C';
// }
// else if(student1Percentage>=70)
// {
//     student1Grade = 'D';
// }
// else if(student1Percentage>=60)
// {
//     student1Grade = 'E';
// }
// else
// {
//     student1Grade = 'F';
// }
// console.log(student1Grade)

// Using function to reuse for all students instead of repeating

// function calcGrade(student1Marks,student1MaxMarks)
// {
// let student1Percentage = (student1Marks/student1MaxMarks)*100;
// let student1Grade;

// if(student1Percentage>=90)
// {
//     student1Grade = 'A';
// }
// else if(student1Percentage>=80)
// {
//     student1Grade = 'B';
// }
// else if(student1Percentage>=80)
// {
//     student1Grade = 'C';
// }
// else if(student1Percentage>=70)
// {
//     student1Grade = 'D';
// }
// else if(student1Percentage>=60)
// {
//     student1Grade = 'E';
// }
// else
// {
//     student1Grade = 'F';
// }
// console.log(student1Grade);
// }
// calcGrade(92,100);
// calcGrade(40,100);
// calcGrade(56,100);
// calcGrade(76,100);
// calcGrade(80,100);

// function validateLogin(username,password)
// {
//     let log;
//     if(username == 'legendpresh' && password == 'Helen2000')
//     {
//         log = 'login successful';
//     }
//     else
//     {
//         log = 'Invalid username or password';
//     }
//     return(log);
// }
// let res = validateLogin('legendpresh','Helen2000')
// console.log(res)

// fuction declaration
// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(10,20))

// function expression
// let add = function(a,b)
// {
//     return a+b;
// }
// console.log(add(10,20))

// arrow funtion
// let add = (a,b) =>
// {
//     return a+b;
// }
// console.log(add(10,20))
// // Or
// let add = (a,b) => a+b;

// console.log(add(10,20))


// IIFE immediately invoked funtion expressions

// (function()
// {
//     console.log('I run when called');
// }

// )();


// Workout rate calculator
// let denominator = 1.0786 - 0.0278;
// function calcWorkrate(weight,reps)
// {
//     let workrate;
//     if(weight>= 1 && reps >= 1)
//     {
//         workrate = weight/denominator*reps
//     }
//     else
//     {
//         workrate = 'Invalid Input';
//     }
//     console.log(workrate)
// }
// calcWorkrate(34,12)
// calcWorkrate(340,120)
// calcWorkrate(225,12)
// calcWorkrate(12,12)
// calcWorkrate(346,10)
// calcWorkrate(3400,10)
// calcWorkrate(34,12)
// calcWorkrate(560,15)
// calcWorkrate(900,70)
// calcWorkrate(785,165)
// calcWorkrate(0,0)