import React from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { Spine } from '../components/Spine';
import { Link } from 'react-router-dom';

export function Validate() {
  return (
    <Layout>
      <div className="wrap stagehead">
        <p className="crumb"><Link to="/">← The path</Link></p>
        <p className="stagenum">Stage one of six</p>
        <h1 className="display">Is this a business,<br />or still an idea?</h1>
        <p className="lead">Before you register anything, before you spend a thebe, you answer one question. This stage is how you answer it.</p>
      </div>

      <div className="wrap teach">
        <h2>Start with one question</h2>
        <p>Will someone pay you for this. Not will they like it. Not will they say it is a good idea. Will they take out money and pay. Every business in the world begins and ends with that question, and most people skip it.</p>

        <h2>An idea is not a business yet</h2>
        <p>An idea becomes a business the day a stranger pays for it. Until then it is a guess, however good it feels. These are the signs it is still a guess:</p>
        <ul>
          <li>The only people who said yes are your friends and your family.</li>
          <li>You have never told anyone the actual price out loud.</li>
          <li>You are waiting until everything is perfect before you sell.</li>
        </ul>

        <h2>How to test it cheaply</h2>
        <p>You do not need a company, a logo, or a loan to test an idea. You need one paying customer. Here is the cheapest way to find out if you have a business.</p>
        <ol>
          <li>Write down the exact problem you solve and who has it.</li>
          <li>Set a real price you would actually charge.</li>
          <li>Offer it to ten people who have that problem.</li>
          <li>Watch what they do, not what they say.</li>
        </ol>
        <p>If a few of them pay, you have something real. If none of them pay, you have learned that cheaply, before it cost you a registration fee or a loan.</p>

        <h2>What comes next</h2>
        <p>Once people pay, you are ready to become a company the government and the banks recognise. That is the next stage. Registering lets you invoice in the company name, open a business account, and bid for work informal traders cannot touch.</p>

        <div className="shortcut">
          <div className="lab">The shortcut</div>
          <h3>We can pressure-test your idea</h3>
          <p>Bring us what you are building. We will help you find the real customer, set the price, and decide if it is ready. We have watched 260 founders cross this line.</p>
          <p><strong>Start with a free chat. A full consultation is P250.</strong></p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <WaButton message="Hi School of Dropouts. I want to test my business idea before I register.">
              Tell us what you're building
            </WaButton>
            <Link className="pricing-link" to="/pricing#validate">See full pricing →</Link>
          </div>
        </div>

        <Link className="next" to="/register">
          <span><span className="lab">Next stage</span><br /><span className="nm">Register</span></span>
          <span className="nm">→</span>
        </Link>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">The whole path</p>
          <h2 className="display" style={{ margin: '8px 0 28px' }}>Where you are</h2>
          <Spine currentStage={1} />
        </div>
      </section>
    </Layout>
  );
}
