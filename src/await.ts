// Awaited
async function fetchSomething():Promise<{name:string,age:number,gender:string}[]>{
	const response = await fetch('./dataWithGender.json')
    const data = await response.json()
    return data
}

type FetchDataType = Awaited<ReturnType<typeof fetchSomething>>

async function main() {
    const resolvedData:FetchDataType = await fetchSomething();
    console.log(resolvedData);
}

main();