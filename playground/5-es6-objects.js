// object property shorthand//

const name = 'krutika'
const userage = 21

const user = {
    name,
    age: userage,
    location: "India"
}

console.log(user)

//object destructing

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    saleprice: undefined,
    rating: 4.2

}
// const label = (product.label)
// const stock = (product.stock)

// const {label: productlabel, stock, rating = 5} = product
// console.log(productlabel)
// console.log(stock)
// console.log(rating)

const transcation = (type, {label, stock  = 0} = {}) => {
    console.log(type, label, stock)
}

transcation('order',product)
