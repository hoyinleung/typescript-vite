// Partial And Required
type Citizen = {
	name : string
	age : number
	address :{
		district : string
		street : string
	}
}

type NewCitizen = Required<Pick<Citizen,'name'|'age'>> & Partial<Pick<Citizen,'address'>>

type OverseaCitizen = Required<Pick<Citizen,'name'|'age'>>
//type OverseaCitizen = Required<Citizen> & Omit<Citizen,'address'>