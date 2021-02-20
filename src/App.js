import './App.css';
import Pond from "./Components/Pond"
import Instructions from "./Components/Instructions"
import Editor from "./Components/Editor/Editor"
import Title  from "./Components/Title"
import LevelButton from "./Components/LevelButton"

import Composant1 from "./Components/Composant1"

function App() {
  return (
    <div className="App">
      <div className="MContainer">
        <Pond className='hello'/>
        <Title/>
        <Composant1/>
        <Instructions/>
        <Editor/>
      </div>
    </div>
  );
}

export default App;