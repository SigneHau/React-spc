import clothes from "./clothes";
import ClothesItem from "./ClothesItem";

export default function ClothesList (props) {
    return (
        <div>
            <h2>Produkter</h2>
            {props.ClothesItem.map((clothes) => (
                <ClothesItem
                key= {clothes.id.toString}
                clothes={clothes} />
            ))
            }
        </div>
    )
}

