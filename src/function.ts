function saySomething(personName:string = '訪客', whatToSay?:string):void{
	console.log(`你好${personName},${whatToSay}`)
}
// void 虛空 / 空白 / 空

function sum(a:number,b:number):number{
	return a+b
}

saySomething()