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
        title: "piddoupiou",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        id: 1
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "hello",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        id: 4
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "ced",
        price: 0,
        info: [["Manufacturer", "Bape"], ["Material", "100% Cotton"]],
        id: 2
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "c",
        price: 0,
        info: [["Manufacturer", "Bape"], ["Material", "100% Cotton"]],
        id: 3
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "ll",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        id: 5
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "ll",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        id: 6
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "ll",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        id: 7
      },
      {
        imgUrl:
          "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
        title: "ll",
        price: 0,
        info: [["Manufacturer", "Baddpe"], ["Material", "100% Cotton"]],
        id: 8
      }
    ]
  });
}
