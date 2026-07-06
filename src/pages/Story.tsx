import React from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { Link } from 'react-router-dom';

export function Story() {
  return (
    <Layout>
      <div className="wrap stagehead">
        <p className="crumb"><Link to="/">← The path</Link></p>
        <p className="stagenum">The story</p>
        <h1 className="display">Taught by someone<br />who learned it<br />the hard way</h1>
        <p className="lead">The founder's education came from the field, not the lecture hall. This is where School of Dropouts came from.</p>
      </div>

      <div className="wrap teach">
        <h2>The classroom was the work</h2>
        <p>The founder grew up in Natale, a village in Botswana. The lessons that built School of Dropouts did not come from a lecture hall. They came from the jobs. Filling stations. Construction sites. Behind the wheel of a cab. Inside telecoms companies across Botswana and Zimbabwe. Each one taught a piece of how business actually works in this country, and what it costs the people who get it wrong.</p>

        <h2>Every job taught a piece</h2>
        <p>The filling station taught how cash moves and how thin a margin can be. Construction taught how a contract is won and how it is lost. Driving a cab taught that a customer is a person, not a transaction. Telecoms taught how a big company is built and run. None of it felt like school at the time. All of it was.</p>

        <h2>The pattern underneath</h2>
        <p>The same problem kept appearing. People in Botswana had good businesses inside them and no map for getting them out. They did not know how to register. They did not know what BURS would ask of them. They did not know which funding existed or why their applications kept failing. The knowledge existed, but it was scattered, guarded, and written in a language ordinary founders did not speak.</p>

        <h2>So we built the map</h2>
        <p>School of Dropouts is the map. It is the thing the founder wishes someone had handed him on his first day. We register the companies. We file the taxes. We build the plans and the bids. And we teach, in plain words, so the next founder does not have to learn it the hard way too. We have done this work 270 times now, and we are not slowing down.</p>

        <h2>Why dropouts</h2>
        <p>A dropout, here, is not someone who quit. A dropout is someone who refused the path everyone pointed at and went to build the thing instead. The street vendor who becomes a company. The graduate who chooses to create a job rather than wait for one. Entrepreneurship is problem solving for profit, and it is how a country moves forward. That is who this school is for.</p>

        <div className="shortcut">
          <div className="lab">Start here</div>
          <h3>Tell us what you're building</h3>
          <p>Wherever you are on the path, there is a next step. Tell us what you are working on and we will tell you what it is.</p>
          <WaButton message="Hi School of Dropouts. I read your story. Here is what I am building:">
            Tell us what you're building
          </WaButton>
        </div>

        <Link className="next" to="/validate">
          <span><span className="lab">Begin the path</span><br /><span className="nm">Validate</span></span>
          <span className="nm">→</span>
        </Link>
      </div>
    </Layout>
  );
}
