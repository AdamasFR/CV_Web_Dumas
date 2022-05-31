import './App.css';
import './_sass/index.scss';

import MainBoardComponent from './components/MainBoardComponent/MainBoardComponent';
import MenuComponent from './components/MenuComponent/index';


function App() {
  return (
    <div className="App">
      <MenuComponent />
      <MainBoardComponent />
    </div>
  );
}

export default App;
