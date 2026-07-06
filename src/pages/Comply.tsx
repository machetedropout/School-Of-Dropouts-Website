import React from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { Spine } from '../components/Spine';
import { Link } from 'react-router-dom';

export function Comply() {
  return (
    <Layout>
      <div className="wrap stagehead">
        <p className="crumb"><Link to="/">← The path</Link></p>
        <p className="stagenum">Stage three of six</p>
        <h1 className="display">Staying on the<br />right side of the law</h1>
        <p className="lead">A certificate makes you a company. It does not make you compliant. This stage is what keeps the company legal after the paperwork is done.</p>
      </div>

      <div className="wrap teach">
        <h2>Registered is not the same as compliant</h2>
        <p>Compliance is the set of things you keep doing so the company stays legal and in good standing. Ignore it and the penalties grow quietly, until one day they are bigger than your profit. This is the stage founders most love to skip, and it is the one that costs them most.</p>

        <h2>Register with BURS</h2>
        <p><span className="term">BURS</span> is the Botswana Unified Revenue Service, the tax authority. Every company registers with BURS and receives a tax identification number. This is how the company pays its tax, and how it proves it is in good standing when a client or a bank asks.</p>

        <h2>Know which taxes apply to you</h2>
        <ul>
          <li><strong>Company tax</strong> on the profit the business makes.</li>
          <li><strong>VAT</strong>, value added tax, once your turnover crosses the registration threshold. Below it, registering is optional.</li>
          <li><strong>PAYE</strong>, pay as you earn, if you employ people and deduct tax from their salaries.</li>
        </ul>
        <p>You do not have to memorise the rates. You have to know which ones apply to you, and file them on time.</p>

        <h2>Get your trading licence</h2>
        <p>Many businesses also need a licence from the local council or a sector regulator before they can legally trade. A restaurant, a bar, a clinic, and a security firm each have their own. Trading without the right licence is a fast way to be shut down.</p>

        <h2>Keep records from day one</h2>
        <p>Compliance is easy when your records are clean and painful when they are not. Keep every invoice, every receipt, and every bank statement from the first day. This is also exactly what every funder will ask to see later.</p>

        <h2>What comes next</h2>
        <p>A registered, compliant company is one a bank or a funder will take seriously. That is the door to funding, the next stage.</p>

        <div className="shortcut">
          <div className="lab">The shortcut</div>
          <h3>We keep companies compliant</h3>
          <p>Tax registration, bookkeeping, returns, and trading licences. We set it up correctly and keep it running, so you never wake up to a penalty you did not see coming.</p>
          <p><strong>Secretary, tax & bank account · P1,000</strong></p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <WaButton message="Hi School of Dropouts. I want my compliance set up.">
              I want my compliance set up
            </WaButton>
            <Link className="pricing-link" to="/pricing#comply">See full pricing →</Link>
          </div>
        </div>

        <Link className="next" to="/fund">
          <span><span className="lab">Next stage</span><br /><span className="nm">Fund</span></span>
          <span className="nm">→</span>
        </Link>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">The whole path</p>
          <h2 className="display" style={{ margin: '8px 0 28px' }}>Where you are</h2>
          <Spine currentStage={3} />
        </div>
      </section>
    </Layout>
  );
}
