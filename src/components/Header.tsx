import React from 'react';
import { Link } from 'react-router-dom';
import { WaButton } from './WaButton';
import { MarkLogo } from './MarkLogo';

export function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <Link className="brand" to="/" aria-label="School of Dropouts home">
          <div className="mark" style={{ height: '30px', display: 'flex', alignItems: 'center' }}>
            <MarkLogo src="/mark-ink.png" />
          </div>
          <span className="name">School of<br />Dropouts</span>
        </Link>
        <WaButton className="wa sm outline" message="Hi School of Dropouts. I found you on your website.">
          Talk to us
        </WaButton>
      </div>
    </header>
  );
}
