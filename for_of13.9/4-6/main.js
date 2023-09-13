//4
const ARRAY_NAMES=['name1','name2','name3','name4','name5']

for (const iterator of ARRAY_NAMES) {
    console.log(iterator);
}
//5
const ARRAY_AGE=[1,2,3,4,5,6,7,8,9,26]

for (const iterator of ARRAY_AGE) {
    if (iterator>25) {
        console.log(iterator);
    }
}

//6
const ARRAY_LAST_NAMES=['messi','pogba','levi','cohen','alaluf','gershon']
const NEW_ARRAY=[]
for (const iterator of ARRAY_LAST_NAMES) {
    NEW_ARRAY.push(iterator.toUpperCase())
}
console.log(NEW_ARRAY);

//7
