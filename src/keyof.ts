//keyof
type AMemberInfo = {
    name : string
    age : number
}

const demoObj = {
    name : 'King',
    age : 35
}

function getValueFromKey(key: keyof AMemberInfo,obj:AMemberInfo){
    return obj[key]
}

const objKeyValue = getValueFromKey("age",demoObj)

const myArray = ['a','b','c']
function getValueFromArray(index:keyof typeof myArray){ //0, 1, 2...
    return myArray[index]
}
const arrElementValue = getValueFromArray(1)