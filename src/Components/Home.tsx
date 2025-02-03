import React from 'react'


export const Home: React.FC = () => (
  <section className="home-section container">
    <div className="row align-items-center">
      <div className="col-md-6 text-center">
        <img src="public/assets/DSC01149_Original.jpg" alt="Carl Jonsén" className="img-fluid rounded-circle" />
      </div>
      <div className="col-md-6">
        <h1 className="display-5">Welcome to My First Website</h1>
        <p className="lead">
          Hi! My name is <strong>Carl Jonsén</strong>, and this is my portfolio website.
        </p>
      </div>
    </div>
  </section>
);