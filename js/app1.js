function registrar() {
  var email = document.getElementById('exampleInputEmail1').value;
  var contrasena = document.getElementById('exampleInputPassword1').value;

  firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function ingreso() {
  var email2 = document.getElementById('exampleInputEmail2').value;
  var contrasena2 = document.getElementById('exampleInputPassword2').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
