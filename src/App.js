// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>


      <Header />

      <main className='main'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />

    </>
  );
}

export default App;
