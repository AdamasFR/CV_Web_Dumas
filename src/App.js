import './App.css';
import './_sass/index.scss';

import MenuComponent from './components/MenuComponent/index';
import MainCard from './components/MainCard/MainCard';
import ProjectsCard from './components/ProjectsCard';
import ContactCard from './components/ContactCard';
import FooterCard from './components/FooterCard';

function App() {
  return (
    <div className="App">
      <MenuComponent/>
      <MainCard/>
      <ProjectsCard/>
      <ContactCard/>
      <FooterCard/>
    </div>
  );
}

export default App;
