import './App.css';

const idClothes = [

    new Clothes (1, 'Maria', 'Top', 'S', 850, 'Blå', 'En blå/hvid hæklet top lavet af bomuld.'),
    new Clothes (2, 'Maria', 'Top', 'S', 850, 'Blå', 'En blå/hvid hæklet top lavet af bomuld.'),
    new Clothes (3, 'Maria', 'Top', 'S', 850, 'Blå', 'En blå/hvid hæklet top lavet af bomuld.'),
    new Clothes (4, 'Maria', 'Top', 'S', 850, 'Blå', 'En blå/hvid hæklet top lavet af bomuld.'),
]

function App() {
  const [clothes, setClothes] = useState(idClothes);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tøjbutik</h1>
      
      </header>
    </div>
  );
}

export default App;
