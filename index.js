/* Problem 1
Using iteration, write a function fibs which takes a number and returns an 
array containing that many numbers from the fibonacci sequence. Using an 
example input of 8, this function should return 
the array [0, 1, 1, 2, 3, 5, 8, 13]. 
*/
document.getElementById('check').addEventListener('click', fibs);

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
        let array = [0]
        console.log(array)
    }
    else if(num == 2)
    {
        let array = [0,1]
        console.log(array)
    }
    else if(num == 3)
    {
        let array = [0,1,1]
        console.log(array)
    }
    else if(num>=4)
    {
        for(i=0;i<num;i++)
        {
            console.log('working')
        }
    }
}