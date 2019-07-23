const deepstream = require("deepstream.io-client-js");
const client = deepstream("0.0.0.0:6020");

client.login();
// Server Initialization
addProducts();
//////
console.log("Succesfully initialized the server");

function addProducts() {
  client.record.getRecord("store").set({
    items: [
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "dd",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        size: [["XS", 0], ["S", 0], ["M", 0], ["L", 0], ["XL", 0], ["XXL", 0]],
        id: 1
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "Wind Jacket",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        size: [["XS", 0], ["S", 1], ["M", 2], ["L", 3], ["XL", 5], ["XXL", 4]],
        id: 2
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "ll",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        size: [["XS", 0], ["S", 1], ["M", 2], ["L", 3], ["XL", 5], ["XXL", 4]],
        id: 3
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "ll",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        size: [["XS", 0], ["S", 1], ["M", 3], ["L", 3], ["XL", 5], ["XXL", 4]],
        id: 4
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "ll",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        size: [["XS", 0], ["S", 1], ["M", 2], ["L", 3], ["XL", 5], ["XXL", 4]],
        id: 5
      }
    ]
  });
}
