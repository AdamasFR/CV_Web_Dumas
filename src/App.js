import './App.css';
import './_sass/index.scss';

import { lazy, Suspense } from 'react';


const MenuComponent = lazy(() => import('./components/MenuComponent/index'));
const MainCard = lazy(() => import('./components/MainCard/MainCard'));
const ProjectsCard = lazy(() => import('./components/ProjectsCard'));
const ContactCard = lazy(() => import('./components/ContactCard'));
const FooterCard = lazy(() => import('./components/FooterCard'));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className="App">
      <Suspense className="topNavigation" fallback={renderLoader()}>
        <MenuComponent />
        <MainCard />
      </Suspense>
      <Suspense fallback={renderLoader()}>
        <ProjectsCard />
        <ContactCard />
        <FooterCard />
      </Suspense>
    </div>
  );
}

export default App;
