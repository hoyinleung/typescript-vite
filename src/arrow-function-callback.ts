const add = (a:number,b:number):number => {
	return a+b
}

type MyCallbackFunction = (a:number,b:number) => number

function sum(a:number,b:number,callback:MyCallbackFunction):number{
	return a+b
}