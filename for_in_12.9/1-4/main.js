//1
const SAME_CLASS=document.querySelectorAll(".sameClass")

for (let i = 0; i < SAME_CLASS.length; i++) {
    console.log(SAME_CLASS[i]);
}
for (const iterator of SAME_CLASS) {
    console.log(iterator);
}
//2
const CLASS2=document.querySelectorAll('.t2')
const BTN=document.querySelectorAll('button')
    
BTN[0].addEventListener('click',

function () { 
    for (let i = 0; i < CLASS2.length; i++) {
        CLASS2[i].style='color:red;'
        } 
})

BTN[1].addEventListener('click',

function () { 
    for (let i = 0; i < CLASS2.length; i++) {
        CLASS2[i].innerHTML=
        `
        <p>hellow</p>
        `
        } 
})
//3
const OBJECT3={
    MYname:'yizak',
    lasyName:'alaluf',
    age:23,
    city:'givaat-shmuel'
}
for (const key in OBJECT3) {
    console.log(key);
}
// 4
for (const key in OBJECT3) {
   t4.innerHTML+=
    `
    <p>${OBJECT3[key]}</p>
    `
}

//5
t5.innerHTML+=
`
<input type="text"> <br>
<input type="text"><br>
<input type="number"><br>
<input type="password"><br>
<button>print</button>
`
console.log(BTN);
function createObjectFromUser() {

    const ObjectUser={
        name:`${inputUser.value}`,
        lastName:`${inputUser.value}`,
        age:inputUser.value,
        password:inputUser.value
    }
}

