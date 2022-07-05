import './App.css';
import Tablei from './Components/Tablei/Tablei';
import Scroll from './Components/Scroll/Scroll';
function App() {
  return (
    <div className='App'>
            <h1 className='main_heading'>Task</h1>
            <Scroll>
                   <Tablei/>
            </Scroll>
            
    </div>
  );
}

export default App;
