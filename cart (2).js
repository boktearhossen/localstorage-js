
const addProduct =() => {
   const productInput = document.getElementById('product_name')
   const quantityInput = document.getElementById('product_quantity')
   const product = productInput.value;
   const quantity = quantityInput.value
   productInput.value =''
   quantityInput.value = ''

   displayProduct(quantity, product)
   saveProductToLocalstorage(product, quantity)
}

const displayProduct = ( product, quantity) => {
  const ul = document.getElementById('product-container')
  const li = document.createElement('li')
  li.innerText = `${product} ${quantity} `
  ul.appendChild(li)
}

// get previous product localstorage
const getStoredShoppingCart =()=> {
  let cart = {}
  const storedCart = localStorage.getItem('cart')
  if(storedCart){
     cart = JSON.parse(storedCart)
  }
  return cart;
}

// save product localstorage
const saveProductToLocalstorage =(product, quantity)=> {
   const cart = getStoredShoppingCart()
   cart[product] = quantity
   const cartStringify = JSON.stringify(cart)
   localStorage.setItem('cart', cartStringify)
  console.log(cartStringify);
}

// display product from localstorage
const disaplayProductFromLocalStorage = () => {
  const saveCart = getStoredShoppingCart();
  for(const product in saveCart){
    console.log( saveCart[product])
    console.log( product)
    const quantity = saveCart[product]
    displayProduct(product, quantity)
  }
}
disaplayProductFromLocalStorage()