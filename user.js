
function user(){
 container =   document.getElementById("signup_container");
 if(container.style.display == "none"){
     container.style.display = "block";


 }
else
container.style.display = "none";
}

document.getElementById("close").addEventListener("click",()=>{
    container =   document.getElementById("signup_container");
    if(container.style.display == "none")
   container.style.display = "block";
   else
   container.style.display = "none";
})
