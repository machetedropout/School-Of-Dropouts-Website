import React from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { Spine } from '../components/Spine';
import { Link } from 'react-router-dom';

export function Register() {
  return (
    <Layout>
      <div className="wrap stagehead">
        <p className="crumb"><Link to="/">← The path</Link></p>
        <p className="stagenum">Stage two of six</p>
        <h1 className="display">How you become<br />a real company</h1>
        <p className="lead">This is the stage most people think of when they think of starting a business. Here is what it actually involves, in the order it happens.</p>
      </div>

      <div className="wrap teach">
        <h2>What registering actually means</h2>
        <p>Registering a company means recording it with <span className="term">CIPA</span>, the Companies and Intellectual Property Authority. CIPA is the government office that keeps the official list of every company in Botswana. Once you are on that list you are a real company. You can invoice in the company name, open a business bank account, and bid for work that informal traders cannot touch.</p>

        <h2>What you need before you start</h2>
        <ul>
          <li><strong>A company name.</strong> You reserve it with CIPA first, so no one else can take it.</li>
          <li><strong>A registered office.</strong> A physical address in Botswana where official letters reach you.</li>
          <li><strong>At least one director.</strong> The person responsible for the company.</li>
          <li><strong>A company secretary.</strong> The person who keeps the company's records in order and files with CIPA. Many founders appoint us as their secretary so this part is simply handled.</li>
          <li><strong>A share structure.</strong> Who owns the company, and in what portions.</li>
        </ul>

        <h2>The order it happens in</h2>
        <ol>
          <li>Reserve your name with CIPA and wait for it to be approved.</li>
          <li>File the incorporation documents with the directors, secretary, address, and shares.</li>
          <li>Pay the CIPA fee.</li>
          <li>Receive your certificate of incorporation. You are now a company.</li>
        </ol>

        <h2>What it costs and how long it takes</h2>
        <p>The government fees are modest. The cost most founders underestimate is time. The back and forth when a name is rejected, or a form is filled in wrong, is where the weeks go. A clean application goes through in a few days. A messy one can drag for a month.</p>

        <h2>What comes right after</h2>
        <p>A certificate is not the finish line. The day you are registered, the clock starts on tax. You now have to register with <span className="term">BURS</span>, the tax authority, and keep the company compliant. That is the next stage, and skipping it is the most common and most expensive mistake founders make.</p>

        <div className="shortcut">
          <div className="lab">The shortcut</div>
          <h3>We register companies. 270 and counting.</h3>
          <p>You have seen the whole job. If you would rather not learn the forms, we do this every week. Name reservation, incorporation, secretary appointment, and your certificate, handled end to end.</p>
          <p><strong>Basic Company · P2,000 · ready in 5 working days</strong></p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <WaButton message="Hi School of Dropouts. I want the Basic Company package.">
              I want the Basic Company package
            </WaButton>
            <Link className="pricing-link" to="/pricing#register">See full pricing →</Link>
          </div>
        </div>

        <Link className="next" to="/comply">
          <span><span className="lab">Next stage</span><br /><span className="nm">Comply</span></span>
          <span className="nm">→</span>
        </Link>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">The whole path</p>
          <h2 className="display" style={{ margin: '8px 0 28px' }}>Where you are</h2>
          <Spine currentStage={2} />
        </div>
      </section>
    </Layout>
  );
}
