

// For loop
// let i;
// for(i = 1 ; i <= 100 ; i++)
// {
//     console.log("*");
// }

// while loop
// let i;
// i = 1
// while(i <= 10)
// {
//     console.log("*");
//     i++
// }

// Do while loop
// let i;
// i = 1
// do
// {
//     console.log("*");
//     i++
// }while(i <= 10);

// let i;
// let j;
// let row;
// let n = 5;
// for(i=1; i<=n; i++)
// {
//     row = "";
//     for(j=1; j<=n;j++)
//     {
//         row = row + "*";
//     }
//     console.log(row);
// }

// let i;
// let j;
// let row;
// let n = 8;
// for(i=1; i<=n;i++)
// {
//     row = "";
//     for(j=1; j<=n; j++)
//     {
//         if(i == 1 || i == n || j == 1 || j == n)
//     {
//         row =  row + i;
//     }
//     else
//     {
//         row = row + " ";
//     }
//     }
    
//     console.log(row);
// }

// let i;
// let j;
// let row;
// let n = 16;
// for(i=0; i<n; i++)
// {
//     row = "";
//     for(j=0; j<n; j++)
//     {
//         if(i == 0 || i == n-1 || j == 0 || j == n-1 || i == Math.floor(n/2) || j == Math.floor(n/2)
//         || i == j || i+j == n-1 || i+j == Math.floor(n/2) || j-i == Math.floor(n/2) || i+j == (n-1)+Math.floor(n/2) || i-j == Math.floor(n/2) )
//         {
//             row = row + "*";
//         }
//         else
//         {
//             row = row + " ";
//         }
//     }
//     console.log(row)
// }


// let i;
// let j;
// let row;
// let n = 20;
// for(i=0; i<n; i++)
// {
//     row = "";
//     for(j=0; j<n; j++)
//     {
//         if(j == 0 || j == n-1 || i==j && i <= Math.floor(n/2)|| j+i == n-1 && i <= Math.floor(n/2) )
//         {
//             row = row + "*";
//         }
//         else
//         {
//             row = row + " ";
//         }
//     } 
//     console.log(row)
// }

// let a;
// let b;
// let path;
// let m = 7
// for(a=0; a<m; a++)
// {
//     row = "";
//     for(b=0; b<m; b++)
//     {
//         if(b== 0 || b== m-1 || a==b )
//         {
//             row = row + "*";
//         }
//         else
//         {
//             row = row + " ";
//         }
//     }
//     console.log(row)
// }

// let i;
// let j;
// let row;
// let n = 5;
// for(i=0; i<n; i++)
// {
//     row = "";
//     for(j=0; j<n; j++)
//     {
//         row = row + "*"
//     }
//     console.log(row)
// }