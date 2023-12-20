//ReturnType in functions
function addition(a:number,b:number){
	return a+b
}

type additionReturnType = ReturnType<typeof addition>

type printSomething = () => void
type printSomethingReturnType = ReturnType<printSomething>

//Parameters in functions
type additionParameters = Parameters<typeof addition>[1]

type printSomethingParameters = Parameters<printSomething>