import ClothesItem from "./ClothesItem";
import "./ClothesList.css";

export default function ClothesList({ clothes, addToCart }) {
    return (
      <div className="clothes-grid">
        {clothes.map((item) => (
          <ClothesItem 
            key={item.id.toString()} 
            clothes={item} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    );
  }

