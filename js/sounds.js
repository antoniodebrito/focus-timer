export default function() {
  const forest = new Audio("../assets/forest.wav")
  const rain = new Audio("../assets/rain.wav")
  const coffeShop = new Audio("../assets/coffe-shop..wav")
  const fireplace = new Audio("../assets/fireplace.wav")

  function forestSound() {
    forest.play();
  }

  function rainSound() {
    rain.play();
  }

  function coffeShopSound() {
    coffeShop.play();
  }

  function fireplaceSound() {
    fireplace.play();
  }

  return {
    forestSound,
    rainSound,
    coffeShopSound,
    fireplaceSound
  }

}