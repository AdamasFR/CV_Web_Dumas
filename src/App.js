import './App.css';
import './_sass/index.scss';

import MenuComponent from './components/MenuComponent/index';
import MainCard from './components/MainCard/MainCard';
import ProjectsCard from './components/ProjectsCard';

function App() {
  return (
    <div className="App">
      <MenuComponent/>
      <MainCard/>
      <ProjectsCard/>
    </div>
  );
}

export default App;
