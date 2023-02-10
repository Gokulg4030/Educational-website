function register(){
    var user = Username.value
    localStorage.setItem('username',user)
    var pswd = Password.value
    localStorage.setItem('password',pswd)
    var email = mail.value
    localStorage.setItem('mail',email)

    console.log=("pass", user)
    alert(`Registration Successful`)
    window.location = "login.html"
}


function login()
{
    var user = form.value
    var pswd = input.value
    
    if(user==localStorage.getItem('mail'))
    {
        if(pswd==localStorage.getItem('password'))
        {
           window.location="index.html"
           alert('login successful');
        }
        else{
            //alert('invalid password');
            invalid2.innerHTML=`<p style = "color:red;">Invalid Password</p> `
        }

    }
    else{
       // alert('invalid username');
        invalid1.innerHTML=`<p style = "color:red;">Invalid Username</p> `
    }

    
}




