import './App.css';
import Pond from "./Components/Pond"
import Instructions from "./Components/Instructions"
import Editor from "./Components/Editor/Editor"
import Title  from "./Components/Title"
import LevelButton from "./Components/LevelButton"

function App() {
  return (
    <div className="App">
      <div className="MContainer">
        <Pond className='hello'/>
        <Title/>
        <LevelButton/>
        <Instructions/>
        <Editor/>
      </div>
    </div>
  );
}

export default App;