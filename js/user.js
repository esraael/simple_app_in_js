let user_info=document.querySelector("#user_info")
let user_data=document.querySelector("#user")
let links=document.querySelector("#link")

if (localStorage.getItem("Username")){
  links.remove()
  user_info.style.display="flex"
  user_data.innerHTML=localStorage.getItem("Username")
}
let logoutbtn=document.querySelector("#logout")
logoutbtn.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(()=>{
    window.location="login.html";
  },1500)
})
