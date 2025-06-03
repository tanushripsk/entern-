import React from 'react';

const InternPage = () => {
  return (
    <div className="intern-page">
      <header className="hero-section">
        <div className="container">
          <h1>Intern</h1>
          {/* <p className="breadcrumb">
            <span>
              <a href="/" className="hover-underline">
                Home
              </a>
            </span>
            <span className="separator">›</span>
            <span>
              <a href="/join/intern" className="hover-underline">
                Student
              </a>
            </span>
          </p> */}
        </div>
      </header>

      <style jsx>{`
        .intern-page {
          width: 100%;
        }
        .hero-section {
          background-color: #3cc0c7;
          color: white;
          padding: 64px 16px;
          text-align: center;
           height: 400px;
            margin-top: 20px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        h1 {
          font-size: 3.75rem;
          font-weight: 800;
          margin-top: 50px
        }
        .breadcrumb {
          font-size: 0.875rem;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InternPage;

