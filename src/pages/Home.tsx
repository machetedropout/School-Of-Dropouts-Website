import React from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { Spine } from '../components/Spine';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Starting a business in Botswana</p>
          <h1 className="display">Taught step<br />by step,<br />idea to running<br />company</h1>
          <p className="lead">You do not need to know where to begin. That is what this is for. Move through it in order and you will understand how a company gets built here, one stage at a time.</p>
          <Link to="/validate" className="primary-btn">
            Start with stage one →
          </Link>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <div className="nums">
            <div className="num"><div className="fig">270</div><div className="cap">companies registered</div></div>
            <div className="num"><div className="fig">71K</div><div className="cap">followers</div></div>
            <div className="num"><div className="fig">8M</div><div className="cap">views</div></div>
          </div>
          <p>We have done this work 270 times. The rest of the country is watching us do it.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">The path</p>
          <h2 className="display" style={{ margin: '8px 0 14px' }}>Six stages. This is the order a business gets built in Botswana.</h2>
          <p className="muted" style={{ marginBottom: '34px', maxWidth: '46ch' }}>You are somewhere on this path right now. Find your stage and start there.</p>
          
          <Spine currentStage={0} />
        </div>
      </section>

      <div className="wrap">
        <svg className="fracture" viewBox="0 0 680 14" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 7 H150 L168 1 L190 13 L214 4 L240 7 H410 L430 12 L452 2 L470 7 H680" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">The teacher</p>
          <h2 className="display">Taught by someone who learned it the hard way</h2>
          <p>The founder's education came from the field, not the lecture hall. Filling stations. Construction sites. Behind the wheel of a cab. Inside telecoms companies across Botswana and Zimbabwe. Every job taught a piece of how business actually works here. School of Dropouts is what that adds up to. He has registered the companies, filed the taxes, lost money, and made it back. Nothing here is theory.</p>
          <p className="after"><Link className="pricing-link" to="/story" style={{ fontSize: '15px' }}>The whole story →</Link></p>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--s10)' }}>
        <div className="wrap">
          <p className="eyebrow">The room</p>
          <h2 className="display">A room of founders building in Botswana</h2>
          <p>Learning alone is slow. Inside the community you ask the question, someone who solved it last month answers, and you keep moving. 425 founders are already in.</p>
          <p className="after">
            <WaButton message="Hi School of Dropouts. I want to join the room of founders.">
              Join the room
            </WaButton>
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2 className="display">Not sure where you are on the path?</h2>
          <p style={{ margin: '14px 0 24px' }}>Tell us what you are building. We will tell you the next step.</p>
          <WaButton className="wa block" message="Hi School of Dropouts. Here is what I am building:">
            Tell us what you're building
          </WaButton>
        </div>
      </section>
    </Layout>
  );
}
