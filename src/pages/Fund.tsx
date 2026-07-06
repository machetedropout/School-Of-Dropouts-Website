import React from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { Spine } from '../components/Spine';
import { Link } from 'react-router-dom';

export function Fund() {
  return (
    <Layout>
      <div className="wrap stagehead">
        <p className="crumb"><Link to="/">← The path</Link></p>
        <p className="stagenum">Stage four of six</p>
        <h1 className="display">What money exists,<br />and who gets it</h1>
        <p className="lead">There is more funding in Botswana than most founders realise. The problem is rarely that the money does not exist. The problem is being ready to receive it.</p>
      </div>

      <div className="wrap teach">
        <h2>Where business money comes from here</h2>
        <ul>
          <li><strong>CEDA</strong>, the Citizen Entrepreneurial Development Agency. Government funding for citizen-owned businesses.</li>
          <li><strong>Banks</strong>, which lend against a plan and a track record.</li>
          <li><strong>Grants and competitions</strong>, which give money you do not repay but ask a great deal in return.</li>
          <li><strong>Your own revenue</strong>, the cheapest and most underrated source of all.</li>
        </ul>

        <h2>What funders actually want</h2>
        <p>Every funder is asking the same quiet question. Will I get this money back. You answer it by being the kind of business that looks safe to fund.</p>
        <ol>
          <li>A registered, compliant company. Funders do not lend to informal traders.</li>
          <li>Clean records that show money coming in and going out.</li>
          <li>A business plan that proves you understand your own numbers.</li>
          <li>Some traction. Even small revenue beats a big idea with none.</li>
        </ol>

        <h2>Why most applications fail</h2>
        <p>Most applications fail before they are read. The company is not registered. The records are missing. The plan is a dream with no numbers in it. Fixing those is most of the work, and it is work you can do.</p>

        <h2>What comes next</h2>
        <p>Money does not sell your product for you. Funded or not, you have to find customers. That is the next stage.</p>

        <div className="shortcut">
          <div className="lab">The shortcut</div>
          <h3>We build the plan and the application</h3>
          <p>Business plans, cash flow projections, and funding applications that funders take seriously. We have packaged the documents that get founders through the door.</p>
          <p><strong>Business Plans · from P3,500</strong></p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <WaButton message="Hi School of Dropouts. I want help with a business plan.">
              I want help with a business plan
            </WaButton>
            <Link className="pricing-link" to="/pricing#fund">See full pricing →</Link>
          </div>
        </div>

        <Link className="next" to="/market">
          <span><span className="lab">Next stage</span><br /><span className="nm">Market</span></span>
          <span className="nm">→</span>
        </Link>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">The whole path</p>
          <h2 className="display" style={{ margin: '8px 0 28px' }}>Where you are</h2>
          <Spine currentStage={4} />
        </div>
      </section>
    </Layout>
  );
}
