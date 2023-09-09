let Username=document.querySelector("#Username")
let password=document.querySelector("#password")
let submit=document.querySelector("#sign_in")

let getusername=localStorage.getItem("Username")
let getpasswarde=localStorage.getItem("password")

submit.addEventListener("click" , function(e){
    e.preventDefault()
    if(Username.value===""|| password.value===""){
        alert("Please Fill Your Data")
    }
    else{
        if((getusername&&getusername.trim()===Username.value.trim()) &&(getpasswarde&&getpasswarde.trim()===password.value.trim())){
        setTimeout(()=>{
            window.location="index.html"
        },1500)
    }else{
        alert("username or password is wrong")
    }

    }

})



