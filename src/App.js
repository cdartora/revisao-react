import Pokedex from './components/Pokedex';
import data from './data';

function App() {
  return (
    <div>
      <Pokedex pokemons={data} />
    </div>
  );
}

export default App;
