const ARRAY_OBJECT=[]

for (let i = 0; i <4; i++) {
    let MyObject={
        firstName:`yizak ${i}`,
        lastName:`alaluf ${i}`,
        birthday:`22/03/2000 ${i}`,
        email:`yizak@gmail.com ${i}`
    }
    ARRAY_OBJECT.push(MyObject)
}

const TBODY=document.querySelector('tbody')

for (let i = 0; i < 4; i++) {
   TBODY.innerHTML+=
`
<tr>
</tr>
`
    
}

let TR=document.querySelectorAll('tr')

for (let i = 0; i < ARRAY_OBJECT.length; i++) {

    for (const key in ARRAY_OBJECT[i]) {
        TR[i+1].innerHTML+=
        `
                <td>${ARRAY_OBJECT[i][key]}</td>
                
        `   
    }

}