import './App.css';
import Pond from "./Components/Pond"
import Instructions from "./Components/Instructions"

function App() {
  return (
    <div className="App">
      <div className="MContainer">
        <Pond className='hello'/>
        <Instructions text={'Coucou'}/>
      </div>
    </div>
  );
}

export default App;
