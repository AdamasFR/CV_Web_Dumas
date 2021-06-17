import './App.css';
import './_sass/index.scss';

import MenuComponent from './components/MenuComponent/index';
import MainCard from './components/MainCard/MainCard';
import ProjectsCard from './components/ProjectsCard';
import ContactCard from './components/ContactCard';
import FooterCard from './components/FooterCard';

function App() {
	var meta = document.createElement('meta');
	meta.content = "red";
	meta.name = "theme-color";
	document.getElementsByTagName('head')[0].appendChild(meta);
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
