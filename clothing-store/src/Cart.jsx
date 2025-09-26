import "./Cart.css";

export default function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Indkøbskurv</h2>
      {cart.length === 0 ? (
        <p>Kurven er tom</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <div key={item.id} style={{ marginBottom: "10px" }}>
                <p>
                  <strong>{item.brand}</strong> - {item.model}
                </p>
                <p>Pris: {item.price} kr</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Fjern fra kurv
                </button>
              </div>
            ))}
          </ul>
          <div className="cart-footer">
            <h3>Samlet pris: {totalPrice} kr.</h3>
            <button className="pay"> Gå videre til betaling</button>
          </div>
        </>
      )}
    </div>
  );
}
