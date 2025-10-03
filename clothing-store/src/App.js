import "./App.css";
import Clothes from "./clothes";
import ClothesList from "./ClothesList";
import { useState } from "react";
import Cart from "./Cart";

const idClothes = [
  new Clothes(
    1,
    "Maria",
    "Top",
    "S",
    850,
    "Blå/Hvid",
    "En hæklet bølge top, lavet af bomuld.",
    "/img/bolge-top.jpg"
  ),
  new Clothes(
    2,
    "Tóra",
    "Top",
    "XS",
    900,
    "Brun",
    "En hæklet top, lavet af bomuld.",
    "/img/brun-top-nær.jpg"
  ),
  new Clothes(
    3,
    "Maria",
    "Hue",
    "OneSize",
    300,
    "Brun",
    "En strikket hue, lavet af merion uld.",
    "/img/brun-hue.jpg"
  ),
  new Clothes(
    4,
    "Maria",
    "Trøje",
    "S",
    700,
    "Blå",
    "En hæklet trøje med en sløjfe, lavet af bomuld",
    "img/blaa-aaben-troje.jpg"
  ),
  new Clothes(
    5,
    "Tóra",
    "Taske",
    "OneSize",
    500,
    "Gul",
    "En hæklet taske, lavet af bomuld",
    "img/gul-taske.jpg"
  ),
  new Clothes(
    6,
    "Maria",
    "Sweater",
    "S",
    700,
    "Blå",
    "En blå strikket sweater, lavet af alpakka",
    "img/blaa-sweater.jpg"
  ),
];

function App() {
  // State: clothes er alle varer, cart er indkøbskurven
  const [clothes, setClothes] = useState(idClothes);
  const [cart, setCart] = useState([]);

  // Tilføjer et produkt til kurven og markerer det som "udsolgt"
  function addToCart(id) {
    const item = clothes.find((c) => c.id === id);
    if (item && !item.isSoldOut) {
      setCart([...cart, item]);
      setClothes(clothes.map((c) => c.id === id ? {...c, isSoldOut: true} : c));
    }
  }
  // Fjerner et produkt fra kurven og markerer det som "på lager" igen
  function removeFromCart(id) {
    const item = cart.find((c) => c.id === id);
    if (item) {
      setCart(cart.filter((c) => c.id !== id));
      setClothes(
        clothes.map((c) =>
          c.id === id ? { ...c, isSoldOut: false } : c
        )
      );
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>TØJBUTIKKEN</h1>
        <div className="shop-grid" style={{ display: "flex", gap: "20px" }}>
        <ClothesList clothes={clothes} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
      </header>
    </div>
  );
}

export default App;
