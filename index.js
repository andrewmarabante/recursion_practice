/* Problem 1
Using iteration, write a function fibs which takes a number and returns an 
array containing that many numbers from the fibonacci sequence. Using an 
example input of 8, this function should return 
the array [0, 1, 1, 2, 3, 5, 8, 13]. 
*/
document.getElementById('check').addEventListener('click', fibs);
let array = [0,1,1];
function fibs(e)
{
    e.preventDefault();
    let num = document.getElementById("formnum").value;
   if(num<=0)
   {
    console.log('invalid')
   }
   else if (num<=3)
   {
    console.log(array)
   }
   else
   {
    for(i=3;i<num;i++)
    {
        array[i] = array[i-1] + array[i-2]
        console.log(array)
    }
   }
}
/* Problem 2
Now write another function fibsRec which solves the same problem 
recursively. This can be done in just a couple of lines (or 1 if you’re
 crazy, but don’t consider either of these lengths a requirement… just get
  it done)
*/

const fibsRec = (n) =>
{
    if(n<=0)
    {
    return 'Invalid'
    }
    else if (n<=3)
    {
    return array
    }
    else
    {
    return [...fibsRec(n - 1), fibsRec(n-1)[n-2]+fibsRec(n-1)[n-3]];
    /*
    Ah, ok the syntax was really confusing me, even though it's a very easy problem.
    SO, after playing around with this for a bit this is what I've come to understand...
    '...fibsRec(n-1)' tells it to compute everything up until the previous number.
    'fibsRec(n-1)[n-2]+fibsRec(n-1)[n-3]' gives it a rule to follow to create everything 
    up to the last number, n.
    */
    }
}   

/*
Build a function mergeSort that takes in an array and returns a sorted array,
using a recursive merge sort methodology.
*/

//we are using recursion, so let's think about the base case.

const mergeSort = (array) =>
{
    if (array.length === 0)
    {
        return ('invalid')
    }
    else if (array.length === 1)
    {
        return array;
    }
    else 
    {
        //This takes the array and slices it into left and right as evenly as possible
        const left = array.slice(0,Math.floor(array.length/2));
        const right = array.slice(Math.floor(array.length/2), array.length);
        console.log(right);
        //calling to mergeSort will slice the array as many times as needed
        //until the array is of length one, where it will be returned
        return mergeSort(left)
    }
}

console.log(mergeSort([3,6,8,4,]))