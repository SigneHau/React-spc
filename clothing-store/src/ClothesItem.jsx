export default ClothesItem;

function ClothesItem({clothes, addToCart}){
    return (
        <div>
            <h3>{props.clothes.brand - props.clothes.model}</h3>
            <p>{props.clothes.description}</p>
            <p>Størrelse: {props.clothes.size}</p>
            <p>Farve: {props.clothes.color}</p>
            <p>Pris: {props.clothes.price} kr</p>
            <button onClick={() => addToCart(props.clothes.id)}>Tilføj til kurven</button>
        </div>
    )
}


