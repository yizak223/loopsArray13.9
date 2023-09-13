const SAME_CLASS=document.querySelectorAll('.sameClass')
console.log(SAME_CLASS);

btn1.addEventListener('click',()=>
{
    for (const iterator of SAME_CLASS) {
        iterator.style=`color: #d61b1b;` 
    }
})

btn2.addEventListener('click',
()=>{
    for (const iterator of SAME_CLASS) {
        iterator.innerHTML=`<p>hellow</p>` 
    }
})

const divAge=document.querySelectorAll('div')
console.log(divAge);
btn3.addEventListener('click',()=>{
    for (const iterator of divAge) {
        console.log();
        if (iterator.textContent<25) {
            iterator.innerHTML=`<p>younger</p>` 
        }
    }
})