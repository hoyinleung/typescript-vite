//Pick 挑選 & Omit 忽略
//Pick
type Product = {
    id: number
    name: string
    price: number
    description: string
    category: string
}

/* type ProductSummary ={
  name :string
  price: number
  category:string
} */
// type ProductSummary = Pick<Product,'name'|'price'|'category'>
type ProductSummary = Omit<Product,'id'|'description'>

const product: ProductSummary = {
  name: 'Smartphone',
  price: 999,
  category: 'Electronics',
};
console.log(product);