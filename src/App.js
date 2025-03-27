
/* main "app" thing*/
/**/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  /*import router to create one*/
import Header from './components/Header'; /*import components*/
import Navigation from './components/Navigation';

//import FeaturedPost from './components/FeaturedPost';
import Home from './pages/Home'; /*import the pages in the app*/
import MainRead from './pages/MainRead';
import Submit from './pages/Submit';
import About from './pages/About';
import Contact from './pages/Contact';
import Read from './pages/Read';
import './App.css';
import Poetry from './pages/Poetry';
import Art from './pages/Art';
import Fiction from './pages/Fiction';
import Nonfiction from './pages/Nonfiction';


function App() {
  return (
    <Router> {/*create router thing*/}
      <div className="App">
        <Header /> {/*components*/}
        <Navigation />
        <main>
          <Routes> {/*container for all route definitions*/}
            <Route path="/" element={<Home />} /> {/*when URL is "/", show Home Component*/}
            <Route path="/mainread" element={<MainRead />} /> {/*Route path is URL that will trigger this route*/}
            <Route path="/submit" element={<Submit />} /> {/*element is component to display when path matches*/}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Read/:documentId" element={<Read />} />
            <Route path="/fiction" element={<Fiction />} />
            <Route path="/nonfiction" element={<Nonfiction />} />
            <Route path="/art" element={<Art />} />
            <Route path="/poetry" element={<Poetry />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
