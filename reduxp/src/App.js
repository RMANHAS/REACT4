
import './App.css';
import Coin1 from './features/coin/Coin1';
import { Counter } from './features/counter/counter';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter/>
       
       <Coin1/>
       
      </header>
      
    </div>
  );
}

export default App;
