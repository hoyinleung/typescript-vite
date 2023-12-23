// Satisfies
type Resident = {
	id : number|string
	name : string
	dateOfBirth:string | Date
	phone : string | number
}

let resident = {
	id : 8,
	name : 'Neo',
	dateOfBirth : new Date,
	phone : '852-12345678'
} satisfies Resident
// 符合度最低要求後就保持返佢自己的所有type

resident.phone = resident.phone.replace(/-/g, '');

resident.dateOfBirth.toDateString()