import './App.css';
import clothes from './clothes';
import ClothesItem from './ClothesItem';
import ClothesList from './ClothesList';
import {useState} from 'react';

const idClothes = [

    new Clothes (1, 'Maria', 'Top', 'S', 850, 'Blå', 'En blå/hvid hæklet top lavet af bomuld.'),
    new Clothes (2, 'Tóra', 'Top', 'XS', 900, 'Brun', 'En brund top lavet af bomuld.'),
    new Clothes (3, 'Maria', 'Top', 'S', 850, 'Blå', 'En blå/hvid hæklet top lavet af bomuld.'),
    new Clothes (4, 'Maria', 'Top', 'S', 850, 'Blå', 'En blå/hvid hæklet top lavet af bomuld.'),
]

function App() {
  const [clothes, setClothes] = useState(idClothes);

  function handleAddClothes(newClothesData) {
    const newClothesItem = new Clothes(
      clothes.lenght + 1,
      newClothesData.brand,
      newClothesData.model,
      newClothesData.size,
      newClothesData.price,
      newClothesData.color,
      newClothesData.description,
    );

    setClothes([newClothesItem, ...clothes]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tøjbutik</h1>
      </header>
      
    </div>
  );
}

export default App;
