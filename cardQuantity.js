item = JSON.parse(localStorage.getItem("item"));
cards = document.querySelectorAll(".card")

if(item != null){
cards.forEach(cardQuantity);

function cardQuantity(element){
for(let i=0;i<item.length;i++){
if(element.querySelector("h3").innerText == item[i].title){
element.querySelector("p").innerText = item[i].quantity;
break;
}

}

}
}
