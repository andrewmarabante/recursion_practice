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
    return [...fibsRec(n - 1)];
    }
}
console.log(fibsRec(4))