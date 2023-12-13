// Intersection即(AND) use & 要兩個合乎
type AUser = {
	id : string | number | null
    name : string | null
	developerLevel : 'beginner' | 'intermediate' | 'advance'
    address?: string
}

type Admin = {
	adminPrevilege : boolean
	age:number
}

type AdminUser = AUser & Admin

/* interface AUser {
	id : string | number | null
    name : string | null
	developerLevel : 'beginner' | 'intermediate' | 'advance'
    address?: string
}

interface Admin {
	adminPrevilege : boolean
	age:number
}

interface AdminUser extends AUser,Admin {} */

const adminUser:AdminUser={id:'8',name:'Tina',developerLevel:'beginner',adminPrevilege:true,age:90}