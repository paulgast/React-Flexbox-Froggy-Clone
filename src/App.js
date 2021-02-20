import './App.css';
import Pond from "./Components/Pond"
import Instructions from "./Components/Instructions"
import Editor from "./Components/Editor/Editor"
import Title  from "./Components/Title"
import LevelButton from "./Components/LevelButton"
import {LevelContextProvider} from "./Components/LevelContext"

function App() {
  return (
    <div className="App">
      <div className="MContainer">
        <LevelContextProvider>
          <Pond className='hello'/>
          <Title/>
          <LevelButton/>
          <Instructions/>
          <Editor/>
        </LevelContextProvider>
      </div>
    </div>
  );
}

export default App;