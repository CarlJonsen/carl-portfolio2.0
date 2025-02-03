import React from 'react'

export const About: React.FC = () => (
    <section id="about" className="py-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h2 className="display-4">About Me</h2>
                    <p className="lead">Get to know me a little better.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>
                        Hello! My name is <strong>Carl Jonsén</strong>. I'm a passionate developer currently studying at Nackademin to become a .NET Developer. My skills include C#, HTML, CSS, JavaScript, and more. I have a keen interest in coding, solving problems, and creating meaningful projects.
                    </p>
                    <p>
                        Outside of work, Im disciplined, goal-oriented, and love staying active through regular workouts. My journey in technology has been fueled by curiosity and a drive to constantly learn and grow.
                    </p>
                    <div className="col-12 text-center mb-4">
                        <h2 className="display-4">Knowledge:</h2>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-check-circle text-primary"></i> C# and .NET Development</li>
                            <li><i className="fas fa-check-circle text-primary"></i> Frontend Development (HTML, CSS, JavaScript)</li>
                            <li><i className="fas fa-check-circle text-primary"></i> SQL and Database Management</li>
                            <li><i className="fas fa-check-circle text-primary"></i> Teamwork and Communication</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

);
