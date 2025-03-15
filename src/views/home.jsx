import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import './styles/home.css';

function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
                <div className="container">
                    <h2>Your Future Starts Here, How are you  </h2>
                    <p>Join the community of scholars at XYZ College. Explore various courses, research opportunities, and a vibrant campus life.</p>
                    <a href="#" className="cta-button">Learn More</a>
                </div>
      </section>
      <Footer />
    </div>
  )
};

export default Home;
