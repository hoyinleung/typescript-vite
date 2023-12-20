//Record
/* type Fruit = {
	apple : number
	banana:number
	orange:number
	mango:number
	kiwi:number
	strawberry:number
	watermelon:number
} */
type Fruit = 'apple' | 'banana' | 'orange'| 'mango' | 'kiwi' | 'strawberry' | 'watermelon'
type Inventory = Record<Fruit,number>

const inventory: Inventory = {
    apple: 10,
    banana: 9,
    orange: 8,
    mango:5,
    kiwi:4,
    strawberry:70,
    watermelon:9,
    diafd:90
  }