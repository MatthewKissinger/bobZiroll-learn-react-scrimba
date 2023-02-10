import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



