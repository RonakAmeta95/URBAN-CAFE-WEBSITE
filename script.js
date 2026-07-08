let book=document.querySelector(".book-now");
let booked=document.querySelector(".booked");
let cross=document.querySelector(".cross")

book.addEventListener("click",()=>{
    booked.style.display="block";    
});

cross.addEventListener("click",()=>{
    booked.style.display="none";    
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


// let cart=document.querySelectorAll(".cart")
// let cartbox=document.querySelector(".cart-box")
// let order=document.querySelector(".orders")

// cart.forEach(e => {
//     e.addEventListener("click",()=>{
//         cartbox.style.display="block"; 
        
//     });
// });

// let cart=document.querySelector(".cart")
// let cart_box=document.querySelector(".cart-box")

// cart.addEventListener("click",()=>{
//            cart.classList("cart_box");
//            alert("hi")
//        });






