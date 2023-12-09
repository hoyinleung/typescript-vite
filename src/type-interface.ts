type MemberInfo = {
    name:string,
    age:number,
    address?:string
}

type Abc = [number,string]
//Type 之後教的intersaction (AND), union type(OR)都可以用度

/* interface MemberInfo{
    name:string,
    age:number,
    address?:string
} */
//Interface : class OOP, extend

//睇度youtube 上面有D youtuber會教全部都用type

const memberInfoA:MemberInfo = {
    name : 'philip',
    age : 12,
    address:'Hong Kong'
}

const memberInfoB:MemberInfo = {
    name : 'Patrick',
    age : 13,
    address:'Hong Kong'
}