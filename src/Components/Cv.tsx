export const CV: React.FC = () => {
    const handleDownload = () => {
        window.open("public/assets/Carl Jonsén - CV English.pdf", "_blank");
      };
    return (
      <section id="cv" className="text-center">
        <div className="container">
          <h3 className="display-4">Download My-CV</h3>
          <p className="lead">Click the button below to open my CV in PDF format.</p>
          <button onClick={handleDownload} className="btn btn-primary btn-lg">
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>
      </section>
    );
  };