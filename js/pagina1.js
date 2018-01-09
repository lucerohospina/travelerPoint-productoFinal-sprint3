function begin() {
  // ocultamos todos los span
  $('form p span').hide();
  var $usernameInput = $('#exampleInputUsername');
  var $passwordInput = $('#exampleInputPassword1');
  var $confirmPasswordInput = $('#exampleInputConfirmPassword1');
  var $submit = $('#getstarted');
  function isUsernameValid() {
    return $usernameInput.val().length <= 8;
  }
  function isPasswordValid() {
    return $passwordInput.val().length >= 6;
  }
  function arePasswordsMaching() {
    return $passwordInput.val() === $confirmPasswordInput.val();
  }
  function usernameEvent() {
    if (isUsernameValid())
      $usernameInput.next().hide();
    else
      $usernameInput.next().show();
  }
  function passwordEvent() {
    if (isPasswordValid())
      $passwordInput.next().hide();
    else
      $passwordInput.next().show();
  }
  function confirmPasswordEvent() {
    if (arePasswordsMaching())
      $confirmPasswordInput.next().hide();
    else
      $confirmPasswordInput.next().show();
  }
  function areAllValidationsPassing() {  
    return isUsernameValid() && isPasswordValid() && arePasswordsMaching();
  }
  function formStateEvent() {
    $submit.prop('disabled', !areAllValidationsPassing());
  }
  // hacemos focus al input username
  $usernameInput.focus();
  $usernameInput
    .focus(usernameEvent)
    .on('keyup', usernameEvent)
    .on('keyup', passwordEvent)
    .on('keyup', formStateEvent);
  $passwordInput
    .focus(passwordEvent)
    .on('keyup', passwordEvent)
    .on('keyup', confirmPasswordEvent)
    .on('keyup', formStateEvent);
  $confirmPasswordInput
    .focus(confirmPasswordEvent)
    .on('keyup', confirmPasswordEvent)
    .on('keyup', formStateEvent);
  formStateEvent();
}
$(document).ready(begin);

$(document).ready(function() {    
  $('#getstarted').click(function() {        
    /* Captura de datos escrito en los inputs*/        
    var userName = document.getElementById('exampleInputUsername').value;
    var email1 = document.getElementById('exampleInputEmail1').value;           
    var password1 = document.getElementById('exampleInputPassword1').value;
    /* Guardando los datos en el LocalStorage*/
    localStorage.setItem('User Name', userName);
    localStorage.setItem('Email', email1);
    localStorage.setItem('Password', password1);
  });   
});
