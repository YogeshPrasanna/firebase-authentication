// Initialize Firebase

// var config = {
    // NOTE: Important : use your config here
// };
firebase.initializeApp(config);

/* firebase database */

var root = firebase.database().ref();
// console.log(root);

// get the node you want
const itemnode = firebase.database().ref("items/item");

// Push the data to the node

// itemnode.push({
//     item: "Get water",
//     completed: true,
//     archived: false
// })

// get the data from the node
itemnode.on("value", function(data) {
  console.log("Data val ", data.val(), "\ndata key: ", data.key);
});

// update the node or an item in a node
console.log(itemnode);

/* firebase database */

/* firebase authentication */

// setup firebase auth 
const auth = firebase.auth();

// sign up 
document.getElementById("btnSignUp").addEventListener("click", function () {
  const email = document.getElementById("txtEmail").value;
  const pass = document.getElementById("txtPassword").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .catch(function(error) {
      console.log(error.message);
    });
});

document.getElementById("btnLogin").addEventListener('click',function (params) {
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;
    const promise = firebase.auth().signInWithEmailAndPassword(email,pass);
    document.getElementById("errormessage").innerHTML = "";
    

    promise.catch(function(event){
        console.log(event.message);
        document.getElementById("errormessage").innerHTML = "Username or password is invalid";
    })
});

document.getElementById("btnLogOut").addEventListener('click',function(){
    firebase.auth().signOut();
});

var currentUser = firebase.auth().currentUser;
var currentUSerEmail = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user){
    if(user){

        var currentUser = firebase.auth().currentUser;
        var currentUserEmail = firebase.auth().currentUser.email;
        if (currentUser != null) {
          currentUserEmail === "yogesh@gmail.com" ? (currentUser.userName = "Yogesh") : (currentUser.userName = "Vijeth");
        }

        document.getElementById("userState").innerHTML = "Hello " + currentUser.userName;
        
        document.getElementById("btnLogin").style.display = "none";
        document.getElementById("btnLogOut").style.display = "block";
        document.getElementById("btnSignUp").style.display = "none";
        
    }else{
        document
          .getElementById("userState")
          .innerHTML = "Login";    
          
        document.getElementById("btnLogin").style.display = "block";
        document.getElementById("btnSignUp").style.display = "block";        
        document.getElementById("btnLogOut").style.display = "none";        
    }
})

/* firebase authentication */
