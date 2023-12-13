// Union (OR) | (Pipe)
type User = {
    id:number|string|null,
    name:string|null,
    developerLevel : 'Zero' | 'beginner' | 'intermediate' | 'advance'
    address?:string
}

type Guest = {
    id:number|string|null,
    name : string
}

type Visitor = User | Guest

const user1:User={id:'9',name:'Jack',developerLevel:'Zero'}
//Type narrowing
//if(typeof user1.name === 'string')
//if(user1.name !== null)
user1.name?.toUpperCase()


const visitor:Visitor= {id:7,name:'Tina'}