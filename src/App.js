import './App.css';
import GameControl from './GameControls';
import ApCodeInput from './ApCodeInput';


function App() {
  return (
    <div className="App">
      <h1>Do you know your Airport Codes?</h1>
      <GameControl />
      <br/>
      <br/>
      <ApCodeInput /> <ApCodeInput /> <ApCodeInput />
    </div>
  );
}

export default App;
