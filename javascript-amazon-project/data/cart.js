export const cart = [];


export function addToCart(productId){
  let machingItem;

  cart.forEach((Item) => {
    if (productId === Item.productId){
      machingItem = Item;
    }
  });
  
  if (machingItem){
    machingItem.quantity += 1;
  }
  else{
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
 }