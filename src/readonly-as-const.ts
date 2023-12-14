type RUser = {
    readonly id:number|string|null,
    name:string|null,
    developerLevel : 'Zero' | 'beginner' | 'intermediate' | 'advance'
    friends:readonly string[]
    address?:string
}

const rUser1:RUser = {id:6,name:'Pad',developerLevel:'advance',friends:['Ray']}
rUser1.id=9
rUser1.name='Ted'

//1 - readonly在property (readonly friends: string[])
/* rUser1.friends.push('John') // 修改array ✅
rUser1.friends = ['Mary','Eve'] //重新指派 ❌ */

//2 - readonly在array type位置 (friends:readonly string[])
rUser1.friends.push('John') // 修改array ❌
//rUser1.friends.
rUser1.friends = ['Mary','Eve'] //重新指派 ✅

// as const
const numbers = [1,2,3] as const
const p1 = {
    name:'Ling',
    age:40
} as const

const noChange = 1
noChange = 10