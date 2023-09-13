const ARRAY=['name1','name2','name3','name4','name5']

ARRAY.forEach(function(element)  {
    console.log(element);
});


const ARRAY2=[1,2,3,4,5,6,7,8,26,10]

ARRAY2.forEach(element => {
    if (element>25) {
        console.log(element);
    }
});
//3

const ARRAY3=['ALAUF','cohen','levi','gershon','talmid','livne']
const NEW_ARRAY=[]

ARRAY3.forEach(element => {
    NEW_ARRAY.push(element.toUpperCase())
});

console.log(NEW_ARRAY);