//Generic 通用
function reverseArray<T>(array:T[]) :T[]{
    return array.reverse();
    //[1,2,3] --> [3,2,1]
}

const allNumbers = [1,2,3]
console.log(reverseArray(allNumbers))

const allNames = ["Alice", "Bob", "Charlie"];
console.log(reverseArray(allNames))

// 多於一個generic type
function mergeArray<ArrayT1,ArrayT2>(arr1:ArrayT1[],arr2:ArrayT2[]):(ArrayT1|ArrayT2)[]{
    return [...arr1,...arr2]
}
mergeArray(allNumbers,allNames)

// HTML input form
const inputField = document.querySelector<HTMLInputElement>('.input')
console.log(inputField?.value)

// 其實Array定義時你已在用generic
const r:number[] = [1,2,3]
const r1:Array<number> = [1,2,3]
const s:Array<string> = ['a','b','c']