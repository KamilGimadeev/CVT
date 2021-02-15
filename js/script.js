function validate(form_id,email,pass) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var reg1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!#$%&'*+/=?^_`{|}~-]).{6,}$/;
   var address = document.forms[form_id].elements[email].value;
   var password = document.forms[form_id].elements[pass].value;
   var error = document.querySelector('.error');
   if(reg.test(address) == false) {
      error.innerHTML = "Неверно указан e-mail!";
      error.className = "error active";
      event.preventDefault();
   } else if(reg1.test(password) == false)
      {error.innerHTML = "Неверно указан пароль";
       error.className = "error active";
       event.preventDefault();}
       else{
         error.innerHTML = "";
         error.className = "error";
         alert('Данные корректны');
         document.forms[form_id].elements[email].value='';
         document.forms[form_id].elements[pass].value='';
       }
}
