var bar=document.querySelector(".bar")
bar.addEventListener("click",()=>{
    var navItems=document.querySelector(".navItems")
    navItems.classList.toggle("active")
})

let allProducts = document.getElementById("allProducts");
let products = [
  {
    name: "T-Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",
    image: "../pictures/t-shirt.jpg",
    prices: "1.99$",
  },
  {
    name: "Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",
    image: "../pictures/shoes.jpg",
    prices: "1.99$",
  },
  {
    name: "Wallet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",
    image: "../pictures/wallet.jpg",
    prices: "1.99$",
  },
  {
    name: "T-Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",
    image: "../pictures/t-shirt.jpg",
    prices: "1.99$",
  },
  {
    name: "Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",
    image: "../pictures/shoes.jpg",
    prices: "1.99$",
  },
  {
    name: "Wallet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",
    image: "../pictures/wallet.jpg",
    prices: "1.99$",
  },
];

for (var i = 0; i < products.length; i++) {
  allProducts.innerHTML += `<div class="card">
    <img src="${products[i].image}"  alt="t-shirt">
    <div class="cardContent">
    <div class="nameandwish">
    <span id="pName">${products[i].name}</span>
    <span id="heart">&hearts;</span>
    </div>
        <p>${products[i].description}</p>
        <a href="./eachProduct.html?p=${i}" id="btn">Read More</a>
    </div>
    </div>`;
}

var search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
  allProducts.innerHTML = "";
  let filterProduct = products.filter((a, b, c) => {
    return a.name.toLocaleLowerCase().includes(e.target.value);
  });
  for (var i = 0; i < filterProduct.length; i++) {
    allProducts.innerHTML += `<div class="card">
        <img src="${filterProduct[i].image}"  alt="t-shirt">
        <div class="cardContent">
        <h1>${filterProduct[i].name}</h1>
            <p>${filterProduct[i].description}</p>
            <a href="./eachProduct.html?p=${i}" id="btn">Read More</a>
        </div>
        </div>`;
  }
});
