$(document).ready(function() {    
  $('#letsgo').click(function() {        
    /* Captura de datos escrito en los inputs*/   
    var $email1 = $('#exampleInputEmail2').val();
    var $password1 = $('#exampleInputPassword2').val();
    /* Guardando los datos en el LocalStorage*/
    localStorage.setItem('Email', $email1);
    localStorage.setItem('Password', $password1);
    /* Limpiando los campos o inputs*/
    $email1.val('');
    $password1.val('');
  });   
}); 