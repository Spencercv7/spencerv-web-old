import '../../sass/main.scss';

// Layout
import Header from "../layout/Header";
import AboutMe from '../layout/AboutMe';
import Skills from '../layout/Skills';
import Projects from '../layout/Projects';
import References from '../layout/References';


function App() {

  return (
    <div className="App">

        <div className="content-view">

            <div className="content-view__background"></div>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <References/>

        </div>
    </div>
  );
}

export default App;
