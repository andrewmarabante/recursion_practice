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
        console.log('Invalid')
    }
    else if(num == 1)
    {
        let array1 = [0]
        console.log(array1)
    }
    else if(num == 2)
    {
        let array2 = [0,1]
        console.log(array2)
    }
    else if(num == 3)
    {
        console.log(array)
    }
    else if(num>=4)
    {
        array[num-1] = array[num-3] + array[num-2]
        console.log(array);
    }
}