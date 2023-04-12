import './App.css';
import NavBar from './components/navbar';
import AboutMe from './components/aboutMe';
import MusicalTastes from './components/musicalTastes';
import Hobbies from './components/hobbies';
import Family from './components/family';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <body>
        <AboutMe/>
        <MusicalTastes/>
        <Hobbies/>
        <Family/>
      </body>
    </div>
  );
}

export default App;
