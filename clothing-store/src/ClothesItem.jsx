import "./ClothesItem.css";

// Hvordan produktet skal se ud
export default function ClothesItem({ clothes, addToCart }) {
  return (
    <div className="produkt">
      "
      <img
        src={clothes.image}
        alt="{clothes.model}"
        style={{
          width: "200px",
          display: "block",
          margin: "0 auto",
          padding: "0 0 20px 0",
        }}
      />
      <h3>
        {clothes.brand} - {clothes.model}
      </h3>
      <p>{clothes.description}</p>
      <p>Størrelse: {clothes.size}</p>
      <p>Farve: {clothes.color}</p>
      <p>Pris: {clothes.price} kr.</p>
      {clothes.isSoldOut ? (
        <button className="udsolgt" disabled>
          Udsolgt
        </button>
      ) : (
        <button className="add-cart" onClick={() => addToCart(clothes.id)}>Tilføj til kurven</button>
      )}
    </div>
  );
}
