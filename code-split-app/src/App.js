import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';

//Lazy Load component
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
function App() {
  return (
    <Router>
            <div className="App">
                <nav className="navbar">
                    <ul className="navbar-menu">
                        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
                        <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
                        <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact</Link></li>
                    </ul>
                </nav>
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    
  );
}

export default App;
