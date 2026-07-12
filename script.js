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

let form=document.querySelector("form")
form.addEventListener("submit",()=>{
    alert("Your Seat No. will be sent to your E-mail ID Shortly");
});


let burger = document.querySelector(".burger-btn");
let menuItems = document.querySelectorAll("ul li:not(.burger-btn)");
let tab=document.querySelector(".tabs")
let container2=document.querySelector(".container2");

burger.addEventListener("click", () => {

    menuItems.forEach((item) => {

        if (item.style.display === "block") {
            item.style.display = "none";
            tab.style.flexDirection="row";
            document.body.classList.remove("lock");
            container2.style.display="none";
            
        } else {
            item.style.display = "block";
            tab.style.flexDirection="column";
            document.body.classList.add("lock");
            container2.style.display="block";

        }

    });

});




const cartBtns=document.querySelectorAll(".cart");
const names=document.querySelectorAll(".food-name");
const prices=document.querySelectorAll(".price");

const cartBox=document.querySelector(".cart-box");
const orders=document.querySelector(".orders");
const total=document.querySelector(".total");
const empty=document.querySelector(".empty-cart");

const close=document.querySelector(".cross1");
const clear=document.querySelector(".clear-cart");
let cartimg=document.querySelector(".cartimg");

let cart=[];

cartBtns.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{

        cartBox.style.display="flex";

        const itemName=names[index].textContent;
        const itemPrice=parseInt(prices[index].textContent.replace(/\D/g,""));

        let existing=cart.find(item=>item.name===itemName);

        if(existing){

            existing.qty++;

        }

        else{

            cart.push({

                name:itemName,
                price:itemPrice,
                qty:1

            });

        }

        updateCart();

    });

});

function updateCart(){

    orders.innerHTML="";

    let totalPrice=0;

    if(cart.length==0){

        empty.style.display="block";

    }

    else{

        empty.style.display="none";

    }

    cart.forEach((item,index)=>{

        totalPrice+=item.price*item.qty;

        let li=document.createElement("li");

        li.innerHTML=`

        <div>

            <strong>${item.name}</strong><br>

            ₹${item.price}

        </div>

        <div class="qty">

            <button onclick="minus(${index})">-</button>

            ${item.qty}

            <button onclick="plus(${index})">+</button>

        </div>

        <button onclick="removeItem(${index})">❌</button>

        `;

        orders.appendChild(li);

    });

    total.textContent=totalPrice;

}

function plus(i){

    cart[i].qty++;

    updateCart();

}

function minus(i){

    cart[i].qty--;

    if(cart[i].qty<=0){

        cart.splice(i,1);

    }

    updateCart();

}

function removeItem(i){

    cart.splice(i,1);

    updateCart();

}

clear.addEventListener("click",()=>{

    cart=[];

    updateCart();

});

close.addEventListener("click",()=>{

    cartBox.style.display="none";

});


cartimg.addEventListener("click",()=>{

    cartBox.style.display="flex";})








    const swiper = new Swiper(".mySwiper", {

        loop: true,
    
        centeredSlides: true,
    
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    
    });



