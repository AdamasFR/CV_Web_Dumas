import './App.css';
import './_sass/index.scss';

import MenuComponent from './components/MenuComponent/index';
import MainCard from './components/MainCard/MainCard';

function App() {
  return (
    <div className="App">
      <MenuComponent/>
      <MainCard/>
    </div>
  );
}

export default App;
