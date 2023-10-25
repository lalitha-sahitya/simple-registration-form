  const form = document.getElementById("registration-form");
    const loginButton = document.getElementById("login");
    const error= document.getElementById("error");
function msg(){
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const successMessage = document.getElementById("success");
    if(firstName&&email&&!lastName&&password){
            error.textContent="enter lastname";
            error.style.display="block";
}
     else if(lastName&&email&&!firstName&&password){
            error.textContent="enter firstname";
            error.style.display="block";
                }
    else if(lastName&&firstName&&password&&!email){
            error.textContent="enter email";
            error.style.display="block";
              }
    else if(lastName&&firstName&&email&&!password){
            error.textContent="enter password";
            error.style.display="block";
         }
     else if(lastName&&firstName&&email&&password){
            error.style.display="none";
            successMessage.textContent = "Registered successfully";
            form.style.display="none";
            loginButton.style.display = "block";
     }
        else{
            error.textContent="enter all details";
            error.style.display="block";
    }
}
const submitBtn= document.getElementById("submit");
submitBtn.addEventListener('click',msg);
loginButton.addEventListener('click',()=>{
    const successMessage = document.getElementById("success");
    successMessage.textContent="login successfull";
    successMessage.style.display;
});