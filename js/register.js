let Username=document.querySelector("#Username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let submit=document.querySelector("#sign_up")

submit.addEventListener("click" , function(e){
    e.preventDefault()
    if(Username.value===""|| email.value===""|| password.value===""){
        alert("Please Fill Your Data")
    }
    else{
        localStorage.setItem("Username",Username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(()=>{
            window.location="login.html"
        },1500)

    }
})

