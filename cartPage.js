cartPage();

function cartPage(){
    console.log("cartPage() is called")
count = localStorage.getItem("count");
item = localStorage.getItem("item");
console.log("hi");
console.log(item);
console.log(typeof( item))
if(localStorage.getItem("item")==null || localStorage.getItem("item")==String([])||Number(count)==0){
    document.getElementById("root").innerHTML = '<h1>No Product in cart to show</h1>'
}
else{

total=0;
item = JSON.parse(item)

const root = document.getElementById("root");



item.map((value)=>{


root.innerHTML += `
<div class="card" >
<h3>`+value.title+`</h3>
<img src="`+value.imgsrc+`" />
<p >`+value.quantity+`</p>
<a href="#" class="shop_btn" onclick="addToCart(this.parentNode,+1);cartPageLoads(this.parentNode) ;totalPrice(this.parentNode,+1)">+</a>
<a href="#" class="shop_btn" onclick="addToCart(this.parentNode,-1) ;cartPageLoads(this.parentNode);totalPrice(this.parentNode,-1)"">-</a>
<h4>`+value.price +`</h4>
</div>
 `;
 if(String(value.price).length ==9)
total +=Number(String(value.price).slice(4,6))*value.quantity;
else
total +=Number(String(value.price).slice(4,7))*value.quantity;
});

root.innerHTML += `<h1 id="total">Total = Rs.`+total+`</h1>`;
}

console.log("cartPage() call ends")
}

function cartPageLoads(element){
    if(element.querySelector("p").innerText==0){
        element.remove();
        if(localStorage.getItem("item")==null ||localStorage.getItem("item")==String([])||Number(count)==0){
            document.getElementById("root").innerHTML = '<h1>No Product in cart to show</h1>'
        }
    }
}
function totalPrice(element,value){

    total =  document.getElementById("total");
    price = element.querySelector("h4");
        
    console.log(String(total.innerText).length)
console.log(String(total.innerText).slice(11,14))
console.log(String(price.innerText).slice(4,6))
    cost = 0;

    if( String(total.innerText).length == 14)
    cost = cost+ Number(String(total.innerText).slice(11,14));
    else if(String(total.innerText).length == 15)
    cost = cost+ Number(String(total.innerText).slice(11,15));


    if(String(price.innerText).length ==9)
cost = cost  + Number(String(price.innerText).slice(4,6))*value;
else if(String(price.innerText).length ==10)
cost = cost  + Number(String(price.innerText).slice(4,7))*value;
else
cost =cost  + Number(String(price.innerText).slice(4,8))*value;

total.innerText = `Total = Rs.`+cost;
}
