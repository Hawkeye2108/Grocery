function signUp(){

    email = document.getElementById("email");
  password = document.getElementById("password");
  
  console.log(email)
  console.log(password)
    console.log("signUp");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
   .then((userCredential) => {
     // Signed in 
     var user = userCredential.user;
     alert("Resgistered");
   
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     alert(error)
   });
   email.value = "";
   password.value ="";
 
  }