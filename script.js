let book=document.querySelector(".book-now");
let container=document.querySelector(".container");
let cross=document.querySelector(".cross")



book.addEventListener("click",()=>{
    container.style.display="block";
    document.body.classList.add("lock");
    
});

cross.addEventListener("click",()=>{
    container.style.display="none";  
    document.body.classList.remove("lock");  
});



let burger = document.querySelector(".burger-btn");
let menuItems = document.querySelectorAll("ul li:not(.burger-btn)");
let tab=document.querySelector(".tabs")

burger.addEventListener("click", () => {

    menuItems.forEach((item) => {

        if (item.style.display === "block") {
            item.style.display = "none";
            tab.style.flexDirection="row";
        } else {
            item.style.display = "block";
            tab.style.flexDirection="column";
        }

    });

});


let cart=document.querySelectorAll(".cart")
let cartbox=document.querySelector(".cart-box")
let order=document.querySelector(".orders")
let food=document.querySelectorAll(".food-name")
let price=document.querySelectorAll(".price")

cart.forEach((e,i) => {
    e.addEventListener("click",()=>{
        cartbox.style.display="block";
        let li=document.createElement("li");
        li.textContent=food[i].textContent +"  "+ price[i].textContent ;
        console.log(li)
        order.appendChild(li); 
    });
});

let cross1=document.querySelector(".cross1")

cross1.addEventListener("click",()=>{
    cartbox.style.display="none";  
      
});





