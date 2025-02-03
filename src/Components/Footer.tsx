import React from 'react'

export const Footer: React.FC = () => (
  <footer className="bg-dark text-light py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="mb-0">Email: Carl.jonsen@yh.nackademin.se</p>
                    <p className="mb-0">Phone: 079-347 16 86</p>
                    <p className="mb-0">Adress: Ardennervägen 19, 18494, Åkersberga</p>
                </div>
                <div className="col-md-6 text-md-end">
                    <a href="https://github.com/CarlJonsen" className="text-light me-3" target="_blank" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/carl-jonsen-2b5873276/?originalSubdomain=se" className="text-light me-3" target="_blank" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/carljonsenn/" className="text-light" target="_blank" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
);
