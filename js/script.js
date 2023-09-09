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

// --------------------------------------------------------------
let allproducts=document.querySelector(".product")
let products=[
  {
    id:1,
    title:"iphone 11 pro max",
    color:"white",
    ImageUrl:"images/l_10242735.jpg"

  },
  {
    id:2,
    title:"iphone 13 pro max",
    color:"blue",
    ImageUrl:"images/1.jpeg"

  },
  {
    id:3,
    title:"iphone x max",
    color:"bage",
    ImageUrl:"images/2.jpeg"

  },
  {
    id:1,
    title:"iphone 14 pro max",
    color:"black",
    ImageUrl:"images/OIP.jpeg"

  },

]
function drawitems(){
  let y=products.map((item)=>{

    return `
        <div class="product_item">
        <img class="home_img" src=${item.ImageUrl} alt="error">
            <div class="item_descreption">
                <h2>${item.title}</h2>
                <p>the new mobile from apple company</p>
                <span>${item.color}</span>
              </div>
            <div class="item_action">
                <button class="add_to_cart" onClick="addtocart(${item.id})">Add to Cart</button>
                <i class="far fa-heart fav"></i>
            </div>
        </div>
    `
   })
  allproducts.innerHTML=y;
}
drawitems()

let badge=document.querySelector(".badge")
let cartproductdiv=document.querySelector(".carts_products div")

// let addeditem=[];
let addeditem=localStorage.getItem("productsincart")?JSON.parse(localStorage.getItem("productsincart")):[];
  if(addeditem){
    addeditem.map(item=>{
      cartproductdiv.innerHTML+=`<p>${item.title}</p>`
    })
    badge.style.display="block";
    badge.innerHTML=addeditem.length;
  }

  if(localStorage.getItem=("Username")){
    function addtocart(id){
      let choosenitem=products.find((item)=>item.id===id);
      cartproductdiv.innerHTML+=`<p>${choosenitem.title}</p>`
   
      addeditem=[...addeditem , choosenitem]
      localStorage.setItem("productsincart" , JSON.stringify(addeditem))
      let carproductlength=document.querySelectorAll(".carts_products div p")
     //  console.log(carproductlength.length)
     badge.style.display="block";
     badge.innerHTML=carproductlength.length;
   
      }
    }else{
    window.location="login.html"
  }



  //------------------------------------------
  let shoppingcart=document.querySelector(".shopping_cart")
  let cartssproducts=document.querySelector(".carts_products")
  shoppingcart.addEventListener("click" , opencart)

  function opencart(){
    if(cartproductdiv.innerHTML!="" ){
      if(cartssproducts.style.display=="block"){
        cartssproducts.style.display="none"
      }else{
        cartssproducts.style.display="block"
      }
    }
  }
  // --------------------------------------------------------








































