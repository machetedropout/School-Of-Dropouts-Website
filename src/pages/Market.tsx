import React from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { Spine } from '../components/Spine';
import { Link } from 'react-router-dom';

export function Market() {
  return (
    <Layout>
      <div className="wrap stagehead">
        <p className="crumb"><Link to="/">← The path</Link></p>
        <p className="stagenum">Stage five of six</p>
        <h1 className="display">Finding your<br />first customers</h1>
        <p className="lead">Marketing sounds complicated. It is not. This stage is about getting in front of the people who already have the problem you solve.</p>
      </div>

      <div className="wrap teach">
        <h2>Marketing is finding the people with the problem</h2>
        <p>Marketing is finding the people who already have the problem you solve and showing them that you solve it. Everything else is detail. If you keep that one sentence in mind you will waste far less money than founders who chase tactics.</p>

        <h2>Start where your customers already are</h2>
        <p>You do not need a big budget. You need to be where your customers spend their attention. In Botswana that is often WhatsApp, Facebook, and word of mouth long before it is anything expensive.</p>
        <ul>
          <li><strong>Be findable.</strong> People should be able to search your name and find you.</li>
          <li><strong>Be clear.</strong> Say exactly what you do and who it is for, in one line.</li>
          <li><strong>Be consistent.</strong> Show up often enough that people remember you when the need arrives.</li>
        </ul>

        <h2>Your brand is a promise, not a logo</h2>
        <p>A logo is the smallest part of a brand. Your brand is what people expect when they deal with you. Do what you say, on time, every time, and your brand starts doing the selling for you.</p>

        <h2>Get the first ten, then the next</h2>
        <p>The first ten customers are the hardest. Treat them so well that they tell others. Referrals are the cheapest marketing there is, and they only come from work done right.</p>

        <h2>What comes next</h2>
        <p>Once you have steady customers, you are ready to chase bigger contracts. Tenders, and the codes you need to bid for them. That is the last stage.</p>

        <div className="shortcut">
          <div className="lab">The shortcut</div>
          <h3>We get you found and remembered</h3>
          <p>Digital marketing, brand identity, and the content that turns attention into customers. We do this for ourselves every day. We can do it for you.</p>
          <p><strong>Trademarked Logo · P2,500 · ready in 48 hours</strong></p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <WaButton message="Hi School of Dropouts. I want a trademarked logo.">
              I want a trademarked logo
            </WaButton>
            <Link className="pricing-link" to="/pricing#market">See full pricing →</Link>
          </div>
        </div>

        <Link className="next" to="/grow">
          <span><span className="lab">Next stage</span><br /><span className="nm">Grow</span></span>
          <span className="nm">→</span>
        </Link>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">The whole path</p>
          <h2 className="display" style={{ margin: '8px 0 28px' }}>Where you are</h2>
          <Spine currentStage={5} />
        </div>
      </section>
    </Layout>
  );
}
