const deepstream = require("deepstream.io-client-js");
const client = deepstream("0.0.0.0:6020");
client.login();

client.record.getRecord("store").subscribe(value => {
  console.log(value);
});

client.record.getRecord("store").set({
  items: [
    {
      imgUrl:
        "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      title: "Crzy",
      price: 299.99,
      info: [["Manufaddscturer", "Supreme"], ["Material", "100% Cotton"]]
    },
    {
      imgUrl:
        "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      title: "Crdedzy",
      price: 0,
      info: [["Manufacturer", "Hype"], ["Material", "100% Cotton"]]
    },
    {
      imgUrl:
        "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      title: "Crdedzy",
      price: 0,
      info: [["Manufacturer", "DC"], ["Material", "100% Cotton"]]
    },
    {
      imgUrl:
        "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      title: "Crdedzy",
      price: 0,
      info: [["Manufacturer", "Bape"], ["Material", "100% Cotton"]]
    },
    {
      imgUrl:
        "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      title: "Crdedzy",
      price: 0,
      info: [["Manufacturer", "Bape"], ["Material", "100% Cotton"]]
    }
  ]
});
