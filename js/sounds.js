export default function() {
  const forest = new Audio("../assets/forest.wav");
  const rain = new Audio("../assets/rain.wav");
  const fireplace = new Audio("../assets/fireplace.wav");
  const coffeShop = new Audio("../assets/coffe-shop.wav");

  function forestStop() {
    forest.pause();
  }

  function forestPlay() {
    forest.play();
  }

  function rainPlay() {
    rain.play();
  }

  function coffeShopPlay() {
    coffeShop.play();
  }

  function fireplacePlay() {
    fireplace.play();
  }

  return {
    forestPlay,
    forestStop,
    rainPlay, 
    coffeShopPlay, 
    fireplacePlay, 
  }

}