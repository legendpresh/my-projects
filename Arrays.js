

// Arrays used to store all types of data. operation can be performed on data inside array particularly manipulation.
// let arr = ["Peter","Helen", "Grace","Lola","Janet","Bukky"];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])

// let ar = ["Peter",true, 5.11, 72,"Bukky"]
// console.log(ar[0])
// console.log(ar[1])
// console.log(ar[2])
// console.log(ar[3])
// console.log(ar[4])

// let arr = new Array(5);
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;
// arr[4] = 50;
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])


// Ways to loop over an Array
// let arr = new Array(5);
// let p = 0;
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;
// arr[4] = 50;

// let i;
// for(i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

// // decreament
// let j;
// for(j=arr.length - 1;j>=0;j--)
// {
//     console.log(arr[j]);
// }

// // decreament by 2
// let a;
// for(a=arr.length - 1;a>=0;a-=2)
// {
//     console.log(arr[a]+4)
// }

// let b;
// for(b=0;b<arr.length ;b++)
// {
//     p += arr[b]
// }
// console.log(p)

// for of loop

// for(let x of arr)
// {
//     console.log(x)
// }

// Performing operations inside Array or Methods of array  

// Adding Element at the end
// let ar = [10, 20, 30, 40, 50];
// console.log(ar)
// ar.push(60);
// console.log(ar);

// adding at the begining
// ar.unshift(70)
// console.log(ar)

// removing at the ending
// let x = ar.pop();
// console.log(x)
// console.log(ar);

// removing at the begining
// let y = ar.shift();
// console.log(y)
// console.log(ar);

// Splice to remove item
// let remove = ar.splice(1,2)
// console.log(remove)
// console.log(ar)

// Splice to add
// let add = ar.splice(2,2,60,70)
// console.log(add)
// console.log(ar)

// sorting and finding in array
// let ar = [10, 20, 30, 40, 50,30];
// console.log(ar) 
// let a = ar.indexOf(30)
// console.log(a)
// console.log(ar.lastIndexOf(30))
// console.log(ar.includes(30))

// Fuction that are array methods that uses callback
// Map array Method funtion

// let numbers = [1,4,9,16];

// function squareRoot(x)
// {
//     return Math.sqrt(x);
// }
// let result = numbers.map(squareRoot);
// console.log(result)
// console.log(result[0])
// console.log(result[1])
// console.log(result[2])
// console.log(result[3])

// or written as

// let numbers = [1,4,9,16];
// let result = numbers.map(x=> Math.sqrt(x));
// console.log(result)
// console.log(result[0])
// console.log(result[1])
// console.log(result[2])
// console.log(result[3])


// Filter array Method funtion

// let ages = [32,15,19,12]

// // arrow array and tenary oprator combined
// let ans = ages.filter( y => y>18 ? true : false)
// console.log(ans)

// or

// function checkAges(y)
// {
//     if(y>18)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// let ans = ages.filter(checkAges)
// console.log(ans)


// reduce array Method funtion

// let numbers = [1,4,9,16]
// function add(total,x)
// {
//     return total + x;
// }
// let res = numbers.reduce(add);
// console.log(res)

// short form
// let numbers = [1,4,9,16]
// let res = numbers.reduce(((total,x)=> total + x,0));
// console.log(res)


// Some Array method function and every array method function and find array method funtion to do quick check on array data

// let score = [85,72,90,67]
// let and = score.some((x) => x >85);
// console.log(and)

// let score = [85,72,90,67]
// let hasPassed = score.every((x) => x >=85);
// console.log(hasPassed)
// let hasGradeA = score.some((x) => x >85);
// console.log(hasGradeA);
// let find = score.find((x) => x >85);
// console.log(find);


// Sort Array method function
// let fruits = ["banana","apple", "pear", "kiwi", ];
// console.log(fruits);
// fruits.sort()
// console.log(fruits)

// let scores = [85,67, 72, 90, ];
// console.log(scores);
// scores.sort()
// console.log(scores)


// MULTIDIMENSIONAL ARRAYS
// dimension basically means the amount of data or information required to access the contents inside Array.

// Two dimensinal array

// let ar = [
//     [25,30,22],
//     [23,31,24],
//     [26,30,20]
// ]
// let i;
// let j;
// for(i=0; i<ar.length;i++)
// {
//     for(j=0;j<ar[i].length;j++)
//     {
//         console.log(ar[i][j])
//     }
// }

// 3 dimensional array
// Tap academy has two center, Each center has two floors, each floor has two classrooms
// let arr = [
//     [
//         [50,70],
//         [65,87]
//     ],
//     [
//         [90,45],
//         [80,30]
//     ]
// ];
// let i;
// let j;
// let k;

// for(i=0;i<arr.length;i++)
// {
//     for(j=0; j<arr[i].length; j++)
//     {
//         for(k=0; k<arr[i][j].length; k++)
//         {
//             console.log(arr[i][j][k])
//         }
//     }
// }

 
// SHALLOW COPY AND DEEP COPY
// How to create a copy of an array

// let ar1 = [10, 20, 30, 40];
// console.log(ar1);
// // Spread operator method
// let ar2 = [...ar1];
// console.log(ar2)

// ar1.push(99);
// console.log(ar1)

// using splice method
// let ar2 = ar1.slice();
// console.log(ar2)

// SHALLOW COPY
// let ar1 = [[10,20], [30,40]];
// console.log(ar1)

// let ar2 = ar1.slice();
// console.log(ar2)

// ar1[1].push(99);
// console.log(ar1)
// console.log(ar2)

// DEEP COPY
// let ar1 = [[10,20], [30,40]];
// console.log(ar1)

// let ar2 = structuredClone(ar1);
// console.log(ar2)

// ar1[1].push(99);
// console.log(ar1)
// console.log(ar2)

// let ar1 = [{name: "ann"},{name: "Ben"}];
// console.log(ar1)

// let ar2 = ar1.slice();
// console.log(ar2)
// ar1[0].name = "Rohit"
// console.log(ar1)
// console.log(ar2)