import './App.css';
import Pond from "./Components/Pond"
import Instructions from "./Components/Instructions"
import Editor from "./Components/Editor/Editor"

function App() {
  return (
    <div className="App">
      <div className="MContainer">
        <Pond className='hello'/>
        <Instructions/>
        <Editor/>
      </div>
    </div>
  );
}

export default App;