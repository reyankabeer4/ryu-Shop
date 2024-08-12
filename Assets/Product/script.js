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
    prices: "5.99$",
  },
  {
    name: "Wallet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",
    image: "../pictures/wallet.jpg",
    prices: "4.99$",
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
    prices: "5.99$",
  },
  {
    name: "Wallet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit.",
    image: "../pictures/wallet.jpg",
    prices: "4.99$",
  },
];

let productImage = document.getElementById("productImage");
let productName = document.getElementById("productName");
let productPrices = document.getElementById("productPrices");

let queryParams = new URLSearchParams(window.location.search);
let paramId = queryParams.get("p");

productImage.src = products[paramId].image;
productName.innerHTML = products[paramId].name;
productPrices.innerHTML = products[paramId].prices;

// let inc = document.getElementById("inc");
// let dec = document.getElementById("dec");
let result = document.getElementById("result");
let basePrice = parseFloat(products[paramId].prices.replace("$", ""));
let count = 2;
inc.addEventListener("click", () => {
  let incPrices = basePrice * count;
  productPrices.innerHTML = `$${incPrices.toFixed(2)}`;
  result.innerHTML = count++;
});

dec.addEventListener("click", () => {
  if (count > 2) {
    count--;
    let decPrices = basePrice * (count - 1);
    productPrices.innerHTML = `$${decPrices.toFixed(2)}`;
    result.innerHTML = count - 1;
  }
});
function icon() {
  alert("Added To Wishlist");
}
