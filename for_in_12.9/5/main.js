//5
t5.innerHTML+=
`
<input type="text"> <br>
<input type="text"><br>
<input type="number"><br>
<button>print</button>
`
const INPUT_USER=document.querySelectorAll('input')
const BTN=document.querySelector('button')

BTN.addEventListener('click',createObjectFromUser)

function createObjectFromUser() {

    const ObjectUser={
        name:`${INPUT_USER[0].value}`,
        lastName:`${INPUT_USER[1].value}`,
        age:INPUT_USER[2].value,
    }

    console.log(ObjectUser);

    for (const key in ObjectUser) {
        t5.innerHTML+=
        `
        <p>${key}:${ObjectUser[key]}
        `
    }
}

