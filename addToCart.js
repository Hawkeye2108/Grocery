
//   for displaying cart on navbar starts
const cart = document.getElementById("cart");
const cartShopping = document.getElementById("cartShopping");

if(localStorage.getItem("count")!=null && localStorage.getItem("count")!=0){
    count = localStorage.getItem("count");
    cartShopping.style.color = "white";
    cart.style.color = "white";
    cart.innerText = count;
  }
  else{
    count = 0;
    localStorage.setItem("count",0);
    cart.innerText = "";
    cartShopping.style.color = "black";
   
  }
//   for displaying cart on navbar ends

function addToCart(element,value){
    h3 = element.querySelector("h3");
   img = element.querySelector("img");
   quantity_number = element.querySelector("p");
   price = element.querySelector("h4");



if(localStorage.getItem("item")==null && value>0){
    count=1;
let itemsObj = [{
        title:h3.innerText,
        imgsrc:img.src,
        quantity:1,
        price:price.innerText
    }]

      localStorage.setItem("item",JSON.stringify(itemsObj));


   //   for displaying cart on navbar starts
   if(count>0){
      localStorage.setItem("count",count);
      cartShopping.style.color = "white";
      cart.style.color = "white";
      cart.innerText = count;
   }
   if(count==0){
        cart.innerText = "";
        cartShopping.style.color = "black";
        localStorage.setItem("count",count);
        }
      //   for displaying cart on navbar ends
        if(itemsObj[0].quantity>0)
      quantity_number.innerText = itemsObj[0].quantity;
      if(itemsObj[0].quantity == undefined){
        quantity_number.innerText = "";
      }
}
else if(localStorage.getItem("item").includes(h3.innerText)&&JSON.parse(localStorage.getItem("item"))[JSON.parse(localStorage.getItem("item")).findIndex(value =>
    value.title===h3.innerText
)].quantity > 0){
 
    itemJson = JSON.parse(localStorage.getItem("item"));
    
    index = itemJson.findIndex(value=>value.title===h3.innerText);
 

// for displaying quantity on card starts
    if(itemJson[index].quantity + value>0)
    quantity_number.innerText = itemJson[index].quantity + value;
    if(itemJson[index].quantity + value === 0){
      quantity_number.innerText = "";
    }
// for displaying quantity on card ends

    if(itemJson[index].quantity + value>0){
     itemsObj = {
        title:h3.innerText,
        imgsrc:img.src,
        quantity:itemJson[index].quantity+value,
        price: price.innerText
    };
    itemJson.splice(index,1,itemsObj);
}
else{
     itemJson.splice(index,1);
}
    // itemJson.splice(index,1,itemsObj);

 
    localStorage.setItem("item",JSON.stringify(itemJson));


     //   for displaying cart on navbar starts
    count = Number(localStorage.getItem("count"));
    count=count+value;
    if(count>0){
    localStorage.setItem("count",count);
    cartShopping.style.color = "white";
    cart.style.color = "white";
    cart.innerText = count;
    }
    if(count==0){
        cart.innerText = "";
        cartShopping.style.color = "black";
        localStorage.setItem("count",count);
        }
    //   for displaying cart on navbar ends
   
}
      else if(value>0 ) {
        let itemsObj = {
        title:h3.innerText,
        imgsrc:img.src,
        quantity:1,
        price:price.innerText
    };

    console.log(String(price.innerText).slice(4,6))

    // for displaying quantity on card starts
    if(itemsObj.quantity >0)
    quantity_number.innerText = itemsObj.quantity;
    if(itemsObj.quantity === 0){
      quantity_number.innerText = "";
    }
// for displaying quantity on card ends

        itemArray = JSON.parse(localStorage.getItem("item"));
        itemArray.push(itemsObj);

      localStorage.setItem("item",JSON.stringify(itemArray));

     //   for displaying cart on navbar starts
    count = Number(localStorage.getItem("count"));
    count=count+value;
    if(count>0){
    localStorage.setItem("count",count);
    cartShopping.style.color = "white";
    cart.style.color = "white";
    cart.innerText = count;
    }
    if(count==0){
        cart.innerText = "";
        cartShopping.style.color = "black";
        localStorage.setItem("count",count);
        }
    //   for displaying cart on navbar ends

      }
    
    
}



