import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Meetourteam from './components/Meetourteam';
import Socialmedia from './components/Socialmedia';

function App() {
  return (
    <section id='app'>
      <div className="container-fuild">
        <Navbar/>
        <Banner/>
        <Aboutus/>
        <Meetourteam/>
        <Socialmedia/>
        <Footer/>
      </div>
    </section>
  );
}

export default App;
