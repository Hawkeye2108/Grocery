firebase.auth().onAuthStateChanged((user) => {

    if (!user ) {
    //   location.replace("login1.html");
     
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    //   var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      document.getElementById("name").innerText = user.email;
    }
  });