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












