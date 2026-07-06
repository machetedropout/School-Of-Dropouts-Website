import React from 'react';
import { Link } from 'react-router-dom';

interface SpineProps {
  currentStage: number;
}

export function Spine({ currentStage }: SpineProps) {
  return (
    <nav className="spine" aria-label="The six stages">
      <Link className={`stage ${currentStage === 1 ? 'here' : ''}`} to="/validate">
        <span className="idx">1</span>
        <span className="name">Validate <span className="arrow">→</span></span>
        <span className="desc">Is this a business or is it still an idea. Learn the difference before you spend a thebe.</span>
      </Link>
      <Link className={`stage ${currentStage === 2 ? 'here' : ''}`} to="/register">
        <span className="idx">2</span>
        <span className="name">Register <span className="arrow">→</span></span>
        <span className="desc">This is how you become a real company. CIPA, the forms, the cost, the order it happens in.</span>
      </Link>
      <Link className={`stage ${currentStage === 3 ? 'here' : ''}`} to="/comply">
        <span className="idx">3</span>
        <span className="name">Comply <span className="arrow">→</span></span>
        <span className="desc">BURS, tax, and the licences that keep you on the right side of the law.</span>
      </Link>
      <Link className={`stage ${currentStage === 4 ? 'here' : ''}`} to="/fund">
        <span className="idx">4</span>
        <span className="name">Fund <span className="arrow">→</span></span>
        <span className="desc">What money exists in Botswana, and who actually gets it.</span>
      </Link>
      <Link className={`stage ${currentStage === 5 ? 'here' : ''}`} to="/market">
        <span className="idx">5</span>
        <span className="name">Market <span className="arrow">→</span></span>
        <span className="desc">How you find your first customers, and the ones after that.</span>
      </Link>
      <Link className={`stage ${currentStage === 6 ? 'here' : ''}`} to="/grow">
        <span className="idx">6</span>
        <span className="name">Grow <span className="arrow">→</span></span>
        <span className="desc">Tenders, PPRA codes, and the bigger contracts that come with them.</span>
      </Link>
    </nav>
  );
}
