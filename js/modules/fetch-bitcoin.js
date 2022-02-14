export default function initFetchBitcoin() {
  fetch ('https://blockchain.info/ticker')
  .then(r => r.json())
  .then(bitcoin => {
    const btcPrice = document.querySelector('.btc-price')
    btcPrice.innerText = (1000 / bitcoin.EUR.sell).toFixed(4)
  }).catch(error => {
    console.log(Error(error))
  })
}