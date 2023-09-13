const OBJECT_HOME={
    street:'mota-gur',
    city:'givaat-shmuel',
    country:'israel',
    num_rooms:5,
    isDayrim: true
}
console.log(OBJECT_HOME);

for (const key in OBJECT_HOME) {
    console.log(key);
}

for (const key in OBJECT_HOME) {
    myDiv.innerHTML+=
    `
    <p>${OBJECT_HOME[key]}</p>
    `
}
m