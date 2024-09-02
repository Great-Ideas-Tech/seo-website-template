import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setSticky(window.scrollY > 500); // Adjust the offset if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <style>{`
    .visible{
        visibility: visible;
    }
    `}</style>
    {/* Back to Top Button */}
    {scrollPosition > 400 && (
        <div  className={`back-to-top ${isSticky ? 'visible' : ''}`} onClick={scrollToTop}>
        </div>
      )}
    <header>
      <nav className={`navbar navbar-expand-lg navbar-light bg-white ${isSticky ? 'fixed sticky' : ''}`} data-offset={500}>
        <div className="container">
          <Link href="/" className="navbar-brand">
            Seo<span className="text-primary">Gram.</span>
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about" >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog" >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact" >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary ml-lg-2" href="/">
                  Free Analytics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      
    </header>
    </>
  );
}

export default Navbar;
