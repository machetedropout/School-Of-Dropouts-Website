import React from 'react';
import { Link } from 'react-router-dom';
import { MarkLogo } from './MarkLogo';

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <Link className="brand foot" to="/" aria-label="School of Dropouts home">
          <div className="mark" style={{ height: '34px', display: 'flex', alignItems: 'center' }}>
            <MarkLogo src="/mark-paper.png" />
          </div>
          <span className="display">School of Dropouts</span>
        </Link>
        <nav className="paths" aria-label="The path">
          <Link to="/validate">Validate</Link>
          <Link to="/register">Register</Link>
          <Link to="/comply">Comply</Link>
          <Link to="/fund">Fund</Link>
          <Link to="/market">Market</Link>
          <Link to="/grow">Grow</Link>
          <Link to="/story">The story</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>
        <div className="contact">
          <a href="mailto:machete@schoolofdropouts.co.bw">machete@schoolofdropouts.co.bw</a>
          <a href="tel:+26774249333">+267 74 249 333</a>
          <span>Plot 51078, Kgale View, Gaborone</span>
        </div>
        <nav className="socials" aria-label="Social channels">
          <a href="https://www.youtube.com/@crazydropouts" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://x.com/crazydropouts" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/company/crazydropouts" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/crazydropouts/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://web.facebook.com/crazydropouts/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://substack.com/@crazydropouts" target="_blank" rel="noopener noreferrer">Substack</a>
        </nav>
        <p className="fine">School of Dropouts (Pty) Ltd. Gaborone, Botswana. Entrepreneurship is problem solving for profit.</p>
      </div>
    </footer>
  );
}
