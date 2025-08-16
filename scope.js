

// Hoisting is the rearrage of code written in a improper way
// Scope a region in the programme where a variable or function is accessible

// Global Scope are accessible everywhere within the programme
// let a;
// function fun()
// {
//     console.log(a);
// }
// a = 100;
// console.log(a);
// fun();

// Function scope is a variable created inside the funtion and only accessible inside the function

// function fun()
// {
//     let a = 100;
//     console.log(a)
// }
// fun();
// console.log(a);

// Block scope is a variable created inside the block and accessible only inside the block
// let temp = 40;

// if(temp > 25)
// {
//     let coolingTemp = temp - 25;
//     console.log("server room needs to be cooled by", coolingTemp);
// }
// else
// {
//     let heatingTemp = 25 - temp;
//     console.log("server room needs to be heated", heatingTemp);
// }

// function printTillNum(num)
// {
//     for(var i=1; i<num; i++)
//     {
//         console.log(i);
//     }
//     console.log("Final value of i =", i)
// }
// printTillNum(5)
