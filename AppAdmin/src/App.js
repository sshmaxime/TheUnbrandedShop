import React from 'react';
import logo from './logo.svg';
import './App.css';

import createDeepstream from "deepstream.io-client-js";

function App() {

  const remoteEndpoint = createDeepstream("0.0.0.0:6020");
  const databaseClient = remoteEndpoint.login();

  var storeRecord = databaseClient.record.getRecord("store");
  storeRecord.whenReady(_ => {
    storeRecord.set("items", [
      {
        id: 1,
        size: [["S", 0], ["M", 1]],
        imgUrl: "https://ae01.alicdn.com/kf/HTB1vRhyd25G3KVjSZPxq6zI3XXat/Nessaj-noir-t-PU-cuir-pantalon-femmes-taille-haute-Skinny-Push-Up-Leggings-Sexy-lastique-pantalon.jpg",
        info: [["Allo", "OK"]],
        title: "Le penis",
        price: 100
      },
      {
        id: 2,
        size: [["M", 1]],
        imgUrl: "https://ae01.alicdn.com/kf/HTB1vRhyd25G3KVjSZPxq6zI3XXat/Nessaj-noir-t-PU-cuir-pantalon-femmes-taille-haute-Skinny-Push-Up-Leggings-Sexy-lastique-pantalon.jpg",
        info: [["Allo", "OssK"]],
        title: "Le glaive",
        price: 100
      }
    ])
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
