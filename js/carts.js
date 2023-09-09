let productsincart=localStorage.getItem("productsincart")
let allproducts=document.querySelector(".product")

if(productsincart){
    let item =JSON.parse(productsincart)
    drawcartproducts(item);
}

function drawcartproducts(products){
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
                <button class="add_to_cart" onClick="removefromcart(${item.id})">remove from cart</button>
            </div>
        </div>
      `
     })
    allproducts.innerHTML = y;
  }











  
  





















