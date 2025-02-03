import React from 'react'

export const Projects: React.FC = () => (
  <section id="projects" className="py-5 bg-light">
  <div className="container text-center">
      <h2 className="display-4">My Recent Projects</h2>
      <div className="row">
          <div className="col-md-6 mb-4">
              <div className="card">
                  <img src="./assets/shotguns game.png" className="card-img-top" alt="Shotgun Game"></img>
                  <div className="card-body">
                      <h5 className="card-title">Shotgun</h5>
                      <p className="card-text">A fun one-player game where you gamble against the computer. Built with C# and Windows Forms.</p>
                      <a href="https://github.com/CarlJonsen/Inl-mningsuppgift-2.Shotgun" className="btn btn-primary" target="_blank">View on GitHub</a>
                  </div>
              </div>
          </div>
          <div className="col-md-6 mb-4">
              <div className="card">
                  <img src="./assets/Blocket applikation.png" className="card-img-top" alt="Ebay in Windows Forms"></img>
                  <div className="card-body">
                      <h5 className="card-title">Ebay in Windows Forms</h5>
                      <p className="card-text">A Windows Forms application simulating an e-commerce platform, built with C# and SQL.</p>
                      <a href="https://github.com/CarlJonsen/Inl-mningsuppgift-1-Databasteknik" className="btn btn-primary" target="_blank">View on GitHub</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
);