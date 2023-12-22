// Never 從不;從未;永不
type WebDeveloper = {
	name:string
	skillLevel : 'low' | 'intermediate' | 'advance' | 'god'
}
function getSkillLevel(webDeveloper:WebDeveloper){
    if(webDeveloper.skillLevel==='low')
        console.log(webDeveloper.skillLevel)
    else if(webDeveloper.skillLevel === 'intermediate')
        console.log(webDeveloper.skillLevel)
	else if(webDeveloper.skillLevel === 'advance')
        console.log(webDeveloper.skillLevel)
    else{
        const neverChecking:never = webDeveloper.skillLevel
    }
}

function throwError(message: string): never {
    throw new Error(message);
}

function processError(): void {
    throwError('Something went wrong');
    console.log('This line is unreachable');
}