const ARRAY_OBJECT_CITY = [
    {
        name: 'tlv',
        citizien: 144,
        symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Emblem_of_Tel_Aviv.svg/640px-Emblem_of_Tel_Aviv.svg.png',
        isOpen: true
    },
    {
        name: 'tlv',
        citizien: 144,
        symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Emblem_of_Tel_Aviv.svg/640px-Emblem_of_Tel_Aviv.svg.png',
        isOpen: true
    },
    {
        name: 'tlv',
        citizien: 144,
        symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Emblem_of_Tel_Aviv.svg/640px-Emblem_of_Tel_Aviv.svg.png',
        isOpen: true
    },
    {
        name: 'tlv',
        citizien: 144,
        symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Emblem_of_Tel_Aviv.svg/640px-Emblem_of_Tel_Aviv.svg.png',
        isOpen: true
    },
    {
        name: 'tlv',
        citizien: 144,
        symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Emblem_of_Tel_Aviv.svg/640px-Emblem_of_Tel_Aviv.svg.png',
        isOpen: true
    }
]
printAllObject()
function printAllObject() {
    for (const city of ARRAY_OBJECT_CITY) {
        console.log(city);
    }
}

function printValues() {
    for (const key in ARRAY_OBJECT_CITY[4]) {
        console.log(ARRAY_OBJECT_CITY[4][key]);
    }

}
printValues()
function printElemToScreen() {
    for (const city of ARRAY_OBJECT_CITY) {
        mainDiv.innerHTML += `<div id='city${ARRAY_OBJECT_CITY.indexOf(city)}'></div>`
        let cityElem = document.querySelector(`#city${ARRAY_OBJECT_CITY.indexOf(city)}`)
        for (const key in ARRAY_OBJECT_CITY[ARRAY_OBJECT_CITY.indexOf(city)]) {
            cityElem.innerHTML += `<p>${ARRAY_OBJECT_CITY[ARRAY_OBJECT_CITY.indexOf(city)][key]}</p>`
        }
    }
}
let btn = document.querySelector('button')
btn.addEventListener('click',
    () => {
        mainDiv.innerHTML += `
    <form>
        <input id='inputName' type="text" placeholder="name">
        <input id='inputCitizien' type="number" placeholder="citizen">
        <input id='inputuRL' type="text" placeholder="url">
        <input id='INPUTopen' type="text" placeholder="open?">
        <button id='subBtn'>submit</button>
    </form>`
        subBtn.addEventListener('click',
            (e) => {
                e.preventDefault()
                ARRAY_OBJECT_CITY.push({
                    name: inputName.value,
                    citizien: +inputCitizien.value,
                    symbol: inputuRL.value,
                    isOpen: INPUTopen.value
                })
            })
        console.log(ARRAY_OBJECT_CITY);
    })

//14

const ARRAY_USER = [
    {
        nameUser: 'yizak',
        lastName: 'alaluf',
        date: '22.03.00',
        email: 'yizak@gamil.com'
    },
    {
        nameUser: 'yizak',
        lastName: 'alaluf',
        date: '22.03.00',
        email: 'yizak@gamil.com'
    },
    {
        nameUser: 'yizak',
        lastName: 'alaluf',
        date: '22.03.00',
        email: 'yizak@gamil.com'
    },
    {
        nameUser: 'yizak',
        lastName: 'alaluf',
        date: '22.03.00',
        email: 'yizak@gamil.com'
    }
]

let myTr=document.querySelector('tr')
for (const key in ARRAY_USER[0]) {
    myTr.innerHTML+=`<th>${key}</th>`
}
let myTbody=document.querySelector('tbody')
for (const user of ARRAY_USER) {
    myTbody.innerHTML+=`<tr id='tr${ARRAY_USER.indexOf(user)}'></tr>`
    let mytr1=document.querySelector(`#tr${ARRAY_USER.indexOf(user)}`)
        for (const key in ARRAY_USER[ARRAY_USER.indexOf(user)]) {
            mytr1.innerHTML+=`<td>${ARRAY_USER[ARRAY_USER.indexOf(user)][key]}</td>`
        }
}

