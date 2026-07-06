import React from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { Spine } from '../components/Spine';
import { Link } from 'react-router-dom';

export function Grow() {
  return (
    <Layout>
      <div className="wrap stagehead">
        <p className="crumb"><Link to="/">← The path</Link></p>
        <p className="stagenum">Stage six of six</p>
        <h1 className="display">Tenders, and the<br />contracts that follow</h1>
        <p className="lead">At some point the way to grow is to win bigger contracts. Many of the biggest in Botswana are awarded through tenders. This stage is how you become eligible to bid.</p>
      </div>

      <div className="wrap teach">
        <h2>The contracts that change a business</h2>
        <p>Many of the largest contracts in Botswana come from government and large institutions, and they are awarded through tenders. Win one and you have a contract bigger than most walk-in customers will ever bring.</p>

        <h2>What a tender is</h2>
        <p>A tender is a formal invitation to bid for work. The buyer publishes what they need, and registered suppliers submit a price and a proposal. The best complete bid wins the contract.</p>

        <h2>Get your PPRA registration</h2>
        <p>To bid for public tenders you register with <span className="term">PPRA</span>, the Public Procurement Regulatory Authority. PPRA keeps the register of suppliers allowed to do business with government. Your PPRA code is what proves you are eligible to bid. To get there you need:</p>
        <ul>
          <li>A registered, compliant company. Everything from the earlier stages is the entry ticket.</li>
          <li>Your PPRA registration and supplier code.</li>
          <li>Tax clearance from BURS showing you are in good standing.</li>
          <li>A proposal that meets every requirement the tender asks for, exactly.</li>
        </ul>

        <h2>Why most bids lose</h2>
        <p>Most bids lose on small things. A missing document. A late submission. A price that was guessed instead of calculated. Winning is often a matter of being complete and on time when others are not.</p>

        <h2>You have walked the whole path</h2>
        <p>Validate, register, comply, fund, market, grow. This is the full journey of a business in Botswana. You do not have to walk it alone, and you do not have to walk it in the dark.</p>

        <div className="shortcut">
          <div className="lab">The shortcut</div>
          <h3>We get you tender-ready</h3>
          <p>PPRA registration, supplier codes, tax clearance, and tender proposals built to win. This is how a small company starts competing for big contracts.</p>
          <p><strong>Tender-ready company · from P5,500 · 21 working days</strong></p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <WaButton message="Hi School of Dropouts. I want to become tender-ready.">
              I want to become tender-ready
            </WaButton>
            <Link className="pricing-link" to="/pricing#grow">See full pricing →</Link>
          </div>
        </div>

        <Link className="next" to="/story">
          <span><span className="lab">Where this all came from</span><br /><span className="nm">The story</span></span>
          <span className="nm">→</span>
        </Link>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">The whole path</p>
          <h2 className="display" style={{ margin: '8px 0 28px' }}>Where you are</h2>
          <Spine currentStage={6} />
        </div>
      </section>
    </Layout>
  );
}
