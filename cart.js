const cart = document.getElementById("cart");
const cartShopping = document.getElementById("cartShopping");
if(localStorage.getItem("count")!=NaN && localStorage.getItem("count")!=0){
  count = localStorage.getItem("count");
  cartShopping.style.color = "white";
  cart.style.color = "white";
  cart.innerText = count;
}
else{
  count = 0;
  localStorage.setItem("count",0);
  cart.innerText = "";
}
// function addToCart(element,value){
//     count++;
//     cartShopping.style.color = "white";
//     cart.style.color = "white";
//   cart.innerText = count;
//   localStorage.setItem("count",count);
 

// }
// function removeFromCart(){
//     if(count>0){
//     count--;
//   cart.innerText = count;
//   localStorage.setItem("count",count);
//     }
//     if(count==0){
//     cart.innerText = "";
//     cartShopping.style.color = "black";
//     }

// }
