import React from 'react';
import './Home.css';
import Typical from 'react-typical'
import Navigation from '../../Shared/Nav/Navigation';




const Home = () => {
  return (
    <div className="home-content">
      <Navigation />
      <div className="home-text">
        <h1>Welcome to Suffix IT</h1>
        <p>
          <Typical
            steps={[

              'The Ultimate Solution is Here', 3000,
              '', 1000,

            ]}
            loop={Infinity}
            wrapper="p"
          />
        </p>

      </div>
    </div>
  );
};

export default Home;