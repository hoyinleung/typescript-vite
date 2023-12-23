// As casting
let someVar:unknown
someVar = 'Hello'
let lengthOfSomeVar = (someVar as string).length
console.log(lengthOfSomeVar)

type TodoObject={
	title:string
	isCompleted:boolean
}

fetch('./todo.json')
    .then(res => res.json())
    .then(data => data as TodoObject)
    .then(todo=>{
        console.log(todo)
    })

let aNumber:unknown = 1;
(aNumber as string).toUpperCase()