import fetch from "node-fetch";

fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
  headers: {
    "X-CoinAPI-Key": "2da4da1b-35a7-418a-a7d7-49d7f4d6896b", // Replace with your API key
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

//"https://rest.coinapi.io/v1/assets"   retrives all assets

//"X-CoinAPI-Key": "2da4da1b-35a7-418a-a7d7-49d7f4d6896b"
