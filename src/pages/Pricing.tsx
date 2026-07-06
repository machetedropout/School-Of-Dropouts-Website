import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { WaButton } from '../components/WaButton';
import { useLocation } from 'react-router-dom';

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  isFrom: boolean;
  timeDays?: number;
  timeLabel?: string;
  category: string;
}

const SERVICES: ServiceOption[] = [
  // Packages
  { id: 'pkg-basic', name: 'Basic Company', price: 2000, isFrom: true, timeDays: 5, timeLabel: '5 working days', category: 'packages' },
  { id: 'pkg-eng', name: 'Engineering Company', price: 6500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'packages' },
  { id: 'pkg-works', name: 'Works Company', price: 5500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'packages' },
  { id: 'pkg-supplies', name: 'Supplies Company', price: 7500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'packages' },
  { id: 'pkg-services', name: 'Services Company', price: 7500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'packages' },
  { id: 'pkg-special', name: 'Special Company', price: 10000, isFrom: true, timeDays: 21, timeLabel: '21 working days', category: 'packages' },
  { id: 'pkg-mfg', name: 'Manufacturing Company', price: 15000, isFrom: true, timeDays: 21, timeLabel: '21 working days', category: 'packages' },
  
  { id: 'pkg-soc', name: 'Society, Club or Church', price: 5000, isFrom: false, timeDays: 90, timeLabel: '90 days', category: 'packages' },
  { id: 'pkg-clg', name: 'Company Limited by Guarantee', price: 12000, isFrom: false, timeDays: 90, timeLabel: '90 days', category: 'packages' },
  { id: 'pkg-trust', name: 'Charitable Trust or Foundation', price: 15000, isFrom: false, timeDays: 90, timeLabel: '90 days', category: 'packages' },
  
  // Validate
  { id: 'val-virtual', name: 'Virtual Consultation', price: 250, isFrom: false, category: 'validate' },
  { id: 'val-person', name: 'In Person Consultation', price: 500, isFrom: false, category: 'validate' },
  
  // Register
  { id: 'reg-cert', name: 'Certificate of Incorporation', price: 1000, isFrom: false, timeDays: 2, timeLabel: '48 hours', category: 'register' },
  { id: 'reg-sec', name: 'Secretary Appointment', price: 500, isFrom: false, timeDays: 2, timeLabel: '48 hours', category: 'register' },
  { id: 'reg-const', name: 'Constitution', price: 750, isFrom: false, category: 'register' },
  { id: 'reg-share', name: 'Share Transfer, Change of Director, Shareholder or Beneficial Owner', price: 350, isFrom: false, category: 'register' },

  // Comply
  { id: 'cmp-tax', name: 'Tax Registration', price: 750, isFrom: false, timeDays: 1, timeLabel: '24 hours', category: 'comply' },
  { id: 'cmp-bank', name: 'Bank Account Opening', price: 750, isFrom: false, timeDays: 1, timeLabel: '24 hours', category: 'comply' },
  { id: 'cmp-tcc', name: 'Tax Clearance Certificate Renewal', price: 1000, isFrom: false, timeDays: 1, timeLabel: '24 hours', category: 'comply' },
  { id: 'cmp-fix', name: 'Fixing a Tax Compliance Report', price: 1500, isFrom: false, timeDays: 5, timeLabel: '5 working days', category: 'comply' },
  { id: 'cmp-sat', name: 'Self Assessed Tax', price: 2500, isFrom: false, category: 'comply' },
  { id: 'cmp-edd', name: 'Economic Diversification Drive (EDD)', price: 1500, isFrom: false, timeDays: 5, timeLabel: '5 working days', category: 'comply' },
  { id: 'cmp-trad-res', name: 'Trading Licence, Residential', price: 2500, isFrom: false, timeDays: 5, timeLabel: '5 working days', category: 'comply' },
  { id: 'cmp-trad-com', name: 'Trading Licence, Commercial', price: 4500, isFrom: false, timeDays: 5, timeLabel: '5 working days', category: 'comply' },
  { id: 'cmp-ind', name: 'Industrial Licence', price: 5500, isFrom: false, timeDays: 5, timeLabel: '5 working days', category: 'comply' },
  { id: 'cmp-tour', name: 'Tourism Licences', price: 7500, isFrom: true, timeDays: 21, timeLabel: '21 working days', category: 'comply' },
  { id: 'cmp-mfg', name: 'Manufacturing Licence', price: 10000, isFrom: false, timeDays: 10, timeLabel: '10 working days', category: 'comply' },
  { id: 'cmp-micro', name: 'Micro Lending Licence (NBIFIRA)', price: 12000, isFrom: false, timeDays: 90, timeLabel: 'about 90 working days', category: 'comply' },
  { id: 'cmp-pawn', name: 'Pawn Shop Licence (NBIFIRA)', price: 12000, isFrom: false, timeDays: 90, timeLabel: 'about 90 working days', category: 'comply' },
  
  // Fund
  { id: 'fnd-lic', name: 'Licence Business Plan', price: 3500, isFrom: true, timeDays: 3, timeLabel: '3 working days', category: 'fund' },
  { id: 'fnd-ydf', name: 'YDF Business Plan', price: 5000, isFrom: true, timeDays: 14, timeLabel: '2 weeks', category: 'fund' },
  { id: 'fnd-ceda', name: 'CEDA Business Plan', price: 10000, isFrom: true, timeDays: 21, timeLabel: '3 weeks', category: 'fund' },
  { id: 'fnd-ndb', name: 'NDB Business Plan', price: 12000, isFrom: true, timeDays: 21, timeLabel: '3 weeks', category: 'fund' },
  
  // Market
  { id: 'mkt-logo', name: 'Logo', price: 500, isFrom: false, timeDays: 2, timeLabel: '48 hours', category: 'market' },
  { id: 'mkt-prof', name: 'Company Profile', price: 750, isFrom: false, timeDays: 2, timeLabel: '48 hours', category: 'market' },
  { id: 'mkt-tm', name: 'Trademarked Logo', price: 2500, isFrom: false, timeDays: 2, timeLabel: '48 hours', category: 'market' },
  { id: 'mkt-brand', name: 'Basic Branding', price: 2500, isFrom: false, timeDays: 2, timeLabel: '48 hours', category: 'market' },

  // Grow
  { id: 'grw-ppra', name: 'PPRA Registration', price: 500, isFrom: false, timeDays: 5, timeLabel: '5 working days', category: 'grow' },
  { id: 'grw-sup', name: 'Supplies Tendering Subcodes', price: 1000, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-srv', name: 'Services Tendering Subcodes', price: 1000, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-cns', name: 'Consultancy Tendering Subcodes', price: 2500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-con', name: 'Construction Tendering Subcodes', price: 2500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-eng', name: 'Engineering Tendering Subcodes', price: 3500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-oca', name: 'Works Upgrade OC to A', price: 7500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-ab', name: 'Works Upgrade A to B', price: 12500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-bc', name: 'Works Upgrade B to C', price: 17500, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-cd', name: 'Works Upgrade C to D', price: 25000, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' },
  { id: 'grw-de', name: 'Works Upgrade D to E', price: 30000, isFrom: false, timeDays: 21, timeLabel: '21 working days', category: 'grow' }
];

const formatPrice = (price: number) => `P${price.toLocaleString('en-BW')}`;
const formatPriceLabel = (price: number, isFrom: boolean) => `${isFrom ? 'from ' : ''}${formatPrice(price)}`;

const STAGES = [
  { id: 'packages', label: 'Packages' },
  { id: 'validate', label: 'Validate' },
  { id: 'register', label: 'Register' },
  { id: 'comply', label: 'Comply' },
  { id: 'fund', label: 'Fund' },
  { id: 'market', label: 'Market' },
  { id: 'grow', label: 'Grow' }
];

const PkgCard = ({ name, desc, price, time, message, isHero = false }: { name: string, desc: string, price: string, time?: string, message?: string, isHero?: boolean }) => (
  <div className={`pkg-card fade-in-up ${isHero ? 'hero' : ''}`}>
    <h3 className="pricing-name">{name}</h3>
    <p className="pricing-desc" style={{ flex: 1, margin: 0 }}>{desc}</p>
    <div>
      <div className="pricing-price">{price}</div>
      {time && <div className="pricing-time">{time}</div>}
    </div>
    <div style={{ marginTop: '8px' }}>
      <WaButton className="wa sm" message={message || `Hi School of Dropouts. I want the ${name}.`}>
        I want this
      </WaButton>
    </div>
  </div>
);

const ServiceRow = ({ name, desc, price, time, message }: { name: string, desc?: string, price: string, time?: string, message?: string }) => (
  <div className="pricing-row fade-in-up">
    <div className="pricing-info">
      <h3 className="pricing-name">{name}</h3>
      {desc && <p className="pricing-desc">{desc}</p>}
    </div>
    <div className="pricing-meta">
      <div className="pricing-price">{price}</div>
      {time && <div className="pricing-time">{time}</div>}
    </div>
    <div className="pricing-action">
      <WaButton className="wa sm" message={message || `Hi School of Dropouts. I want the ${name}.`}>
        I want this
      </WaButton>
    </div>
  </div>
);

function Estimator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };
  
  const clear = () => setSelected(new Set());

  const selectedItems = Array.from(selected).map(id => SERVICES.find(s => s.id === id)!);
  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const hasFrom = selectedItems.some(item => item.isFrom);
  const maxTimeItem = selectedItems.reduce((max, item) => 
    ((item.timeDays || 0) > (max?.timeDays || 0) ? item : max), 
    null as ServiceOption | null
  );

  const message = `Hi School of Dropouts. I want a quote for: ${selectedItems.map(i => i.name).join(', ')}. Estimated total: ${hasFrom ? 'from ' : ''}${formatPrice(total)}.`;

  return (
    <div className="estimator fade-in-up">
      <h2 className="display" style={{ fontSize: '20px', marginBottom: '24px' }}>BUILD YOUR QUOTE</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {STAGES.map(stage => {
          const items = SERVICES.filter(s => s.category === stage.id);
          if (!items.length) return null;
          return (
            <div key={stage.id} className="est-group">
              <div className="est-group-title">{stage.label}</div>
              {items.map(item => (
                <label key={item.id} className="est-item">
                  <input type="checkbox" checked={selected.has(item.id)} onChange={() => toggle(item.id)} />
                  <div className="est-item-info">
                    <div className="est-item-name">{item.name}</div>
                    <div className="est-item-meta">{formatPriceLabel(item.price, item.isFrom)} {item.timeLabel && `· ${item.timeLabel}`}</div>
                  </div>
                </label>
              ))}
            </div>
          );
        })}
      </div>
      
      {selected.size > 0 && (
        <div className="est-summary">
          <div className="est-total-wrap">
            <div className="est-total-label">{selected.size} item{selected.size !== 1 ? 's' : ''} selected</div>
            <div className="est-total">{hasFrom ? 'from ' : ''}{formatPrice(total)}</div>
            {maxTimeItem?.timeLabel && <div className="est-time">Longest step: {maxTimeItem.timeLabel}</div>}
            {hasFrom && <div className="est-time" style={{ opacity: 0.8 }}>* Variable items scoped on enquiry</div>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={clear} className="est-clear">Clear</button>
            <WaButton className="wa sm" message={message}>
              Get quote
            </WaButton>
          </div>
        </div>
      )}
    </div>
  );
}

export function Pricing() {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState('packages');

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-100px 0px -80% 0px' });
    
    STAGES.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="wrap stagehead">
        <p className="eyebrow">PRICING</p>
        <h1 className="display">What it costs</h1>
        <p className="lead">Every service, with its price and how long it takes. Most founders start with a package. If you are not sure what you need, tell us what you are building and we will point you to the right one.</p>
        <WaButton message="Hi School of Dropouts. I am not sure what I need. Here is what I am building:">
          Not sure? Tell us what you're building
        </WaButton>
      </div>

      <div className="wrap" style={{ marginTop: '40px' }}>
        <Estimator />
      </div>

      <div className="subnav-wrap">
        <div className="subnav">
          {STAGES.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'active' : ''}>{s.label}</a>
          ))}
        </div>
      </div>

      <section id="packages" className="pricing-section">
        <div className="wrap">
          <h2 className="display" style={{ fontSize: '24px', borderBottom: '2px solid var(--s20)', paddingBottom: '12px' }}>Company Packages</h2>
          
          <div className="pkg-grid">
            <PkgCard 
              name="Basic Company"
              desc="Name reservation, constitution, secretary, certificate of incorporation, BURS registration, tax clearance, bank account opening."
              price="from P2,000"
              time="5 working days"
              isHero={true}
            />
            <PkgCard 
              name="Engineering Company"
              desc="Basic Company plus five engineering subcodes plus basic branding."
              price="P6,500"
              time="21 working days"
            />
            <PkgCard 
              name="Works Company"
              desc="Basic Company plus five works subcodes plus basic branding."
              price="P5,500"
              time="21 working days"
            />
            <PkgCard 
              name="Supplies Company"
              desc="Basic Company plus five supplies subcodes, basic branding, and a supplies licence."
              price="P7,500"
              time="21 working days"
            />
            <PkgCard 
              name="Services Company"
              desc="Basic Company plus five services subcodes, basic branding, and a services licence. Covers services needing a council licence only."
              price="P7,500"
              time="21 working days"
            />
            <PkgCard 
              name="Special Company"
              desc="Basic Company plus an NBIFIRA, security, or travel and tours licence. Varies by industry."
              price="from P10,000"
              time="21 working days"
            />
            <PkgCard 
              name="Manufacturing Company"
              desc="Basic Company plus five manufacturing subcodes, basic branding, and a manufacturing licence. Varies by industry."
              price="from P15,000"
              time="21 working days"
            />
          </div>

          <h3 className="eyebrow fade-in-up" style={{ marginTop: '40px', marginBottom: '16px' }}>Non-profit and special entities</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            <PkgCard 
              name="Society, Club or Church"
              desc="A non-profit with twenty or more members. Constitution, bank account, basic branding."
              price="P5,000"
              time="90 days"
            />
            <PkgCard 
              name="Company Limited by Guarantee"
              desc="A non-profit registered with CIPA. Constitution, bank account, basic branding."
              price="P12,000"
              time="90 days"
            />
            <PkgCard 
              name="Charitable Trust or Foundation"
              desc="A charitable trust or foundation with bank account and basic branding."
              price="P15,000"
              time="90 days"
            />
          </div>
        </div>
      </section>

      <section id="validate" className="pricing-section">
        <div className="wrap">
          <h2 className="display fade-in-up" style={{ fontSize: '24px', borderBottom: '2px solid var(--s20)', paddingBottom: '12px', marginBottom: '24px' }}>Validate</h2>
          <ServiceRow 
            name="Virtual Consultation"
            desc="A consultation over a video or audio call."
            price="P250"
          />
          <ServiceRow 
            name="In Person Consultation"
            desc="A face-to-face consultation session."
            price="P500"
          />
        </div>
      </section>

      <section id="register" className="pricing-section">
        <div className="wrap">
          <h2 className="display fade-in-up" style={{ fontSize: '24px', borderBottom: '2px solid var(--s20)', paddingBottom: '12px', marginBottom: '24px' }}>Register</h2>
          <ServiceRow 
            name="Certificate of Incorporation"
            desc="Name reservation, constitution, consent forms, application."
            price="P1,000"
            time="48 hours"
          />
          <ServiceRow 
            name="Secretary Appointment"
            desc="Practising certificate and appointment. (Commonly taken with bank account opening for P750, or with tax registration and bank account opening for P1,000.)"
            price="P500"
            time="48 hours"
          />
          <ServiceRow 
            name="Constitution"
            desc="Editing and uploading."
            price="P750"
          />
          <ServiceRow 
            name="Share Transfer, Change of Director, Shareholder or Beneficial Owner"
            desc="Filing changes to company structure."
            price="P350"
          />
        </div>
      </section>

      <section id="comply" className="pricing-section">
        <div className="wrap">
          <h2 className="display fade-in-up" style={{ fontSize: '24px', borderBottom: '2px solid var(--s20)', paddingBottom: '12px', marginBottom: '24px' }}>Comply</h2>
          <ServiceRow 
            name="Tax Registration"
            desc="BURS e-service registration and tax clearance certificate."
            price="P750"
            time="24 hours"
          />
          <ServiceRow 
            name="Bank Account Opening"
            desc="KYC documents prepared and submitted."
            price="P750"
            time="24 hours"
          />
          <ServiceRow 
            name="Tax Clearance Certificate Renewal"
            desc="Company transfer on e-service and basic income tax filing."
            price="P1,000"
            time="24 hours"
          />
          <ServiceRow 
            name="Fixing a Tax Compliance Report"
            desc="Company transfer and a tax compliance report to find pending returns and open cases."
            price="P1,500"
            time="5 working days"
          />
          <ServiceRow 
            name="Self Assessed Tax"
            desc="Monthly or quarterly bookkeeping, tax filing, and financial statements."
            price="P2,500"
          />
          <ServiceRow 
            name="Economic Diversification Drive (EDD)"
            price="P1,500"
            time="5 working days"
          />
          <ServiceRow 
            name="Trading Licence, Residential"
            desc="Licence to trade from a residential address."
            price="P2,500"
            time="5 working days"
          />
          <ServiceRow 
            name="Trading Licence, Commercial"
            desc="Licence to trade from a commercial premises."
            price="P4,500"
            time="5 working days"
          />
          <ServiceRow 
            name="Industrial Licence"
            desc="Licence for industrial operations."
            price="P5,500"
            time="5 working days"
          />
          <ServiceRow 
            name="Tourism Licences"
            desc="Tourism enterprise licences A to L. Prices may vary."
            price="from P7,500"
            time="21 working days"
          />
          <ServiceRow 
            name="Manufacturing Licence"
            desc="Licence for manufacturing businesses."
            price="P10,000"
            time="10 working days"
          />
          <ServiceRow 
            name="Micro Lending Licence (NBIFIRA)"
            desc="Regulatory licence for micro lending."
            price="P12,000"
            time="about 90 working days"
          />
          <ServiceRow 
            name="Pawn Shop Licence (NBIFIRA)"
            desc="Regulatory licence for pawn shops."
            price="P12,000"
            time="about 90 working days"
          />
        </div>
      </section>

      <section id="fund" className="pricing-section">
        <div className="wrap">
          <h2 className="display fade-in-up" style={{ fontSize: '24px', borderBottom: '2px solid var(--s20)', paddingBottom: '12px', marginBottom: '24px' }}>Fund</h2>
          <ServiceRow 
            name="Licence Business Plan"
            desc="Business plan required for licence applications."
            price="from P3,500"
            time="3 working days"
          />
          <ServiceRow 
            name="YDF Business Plan"
            desc="Business plan for Youth Development Fund applications."
            price="from P5,000"
            time="2 weeks"
          />
          <ServiceRow 
            name="CEDA Business Plan"
            desc="Business plan for CEDA funding applications."
            price="from P10,000"
            time="3 weeks"
          />
          <ServiceRow 
            name="NDB Business Plan"
            desc="Business plan for National Development Bank applications."
            price="from P12,000"
            time="3 weeks"
          />
        </div>
      </section>

      <section id="market" className="pricing-section">
        <div className="wrap">
          <h2 className="display fade-in-up" style={{ fontSize: '24px', borderBottom: '2px solid var(--s20)', paddingBottom: '12px', marginBottom: '24px' }}>Market</h2>
          <ServiceRow 
            name="Logo"
            desc="Custom logo design for your business."
            price="P500"
            time="48 hours"
          />
          <ServiceRow 
            name="Company Profile"
            desc="Professional company profile document."
            price="P750"
            time="48 hours"
          />
          <ServiceRow 
            name="Trademarked Logo"
            desc="Logo design registered as a trademark."
            price="P2,500"
            time="48 hours"
          />
          <ServiceRow 
            name="Basic Branding"
            desc="Core brand identity assets and guidelines."
            price="P2,500"
            time="48 hours"
          />
        </div>
      </section>

      <section id="grow" className="pricing-section">
        <div className="wrap">
          <h2 className="display fade-in-up" style={{ fontSize: '24px', borderBottom: '2px solid var(--s20)', paddingBottom: '12px', marginBottom: '24px' }}>Grow</h2>
          <ServiceRow 
            name="PPRA Registration"
            desc="Public Procurement Regulatory Authority registration."
            price="P500"
            time="5 working days"
          />
          <ServiceRow 
            name="Supplies Tendering Subcodes"
            desc="Addition of supplies subcodes to your PPRA profile."
            price="P1,000"
            time="21 working days"
          />
          <ServiceRow 
            name="Services Tendering Subcodes"
            desc="Addition of services subcodes to your PPRA profile."
            price="P1,000"
            time="21 working days"
          />
          <ServiceRow 
            name="Consultancy Tendering Subcodes"
            desc="Addition of consultancy subcodes to your PPRA profile."
            price="P2,500"
            time="21 working days"
          />
          <ServiceRow 
            name="Construction Tendering Subcodes"
            desc="Addition of construction subcodes to your PPRA profile."
            price="P2,500"
            time="21 working days"
          />
          <ServiceRow 
            name="Engineering Tendering Subcodes"
            desc="Addition of engineering subcodes to your PPRA profile."
            price="P3,500"
            time="21 working days"
          />
          <ServiceRow 
            name="Works Upgrade OC to A"
            desc="Upgrade your works category from OC to A."
            price="P7,500"
            time="21 working days"
          />
          <ServiceRow 
            name="Works Upgrade A to B"
            desc="Upgrade your works category from A to B."
            price="P12,500"
            time="21 working days"
          />
          <ServiceRow 
            name="Works Upgrade B to C"
            desc="Upgrade your works category from B to C."
            price="P17,500"
            time="21 working days"
          />
          <ServiceRow 
            name="Works Upgrade C to D"
            desc="Upgrade your works category from C to D."
            price="P25,000"
            time="21 working days"
          />
          <ServiceRow 
            name="Works Upgrade D to E"
            desc="Upgrade your works category from D to E."
            price="P30,000"
            time="21 working days"
          />
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <WaButton className="wa block" message="Hi School of Dropouts. I am not sure where to start. Here is what I am building:">
            Not sure where to start? Tell us what you're building.
          </WaButton>
        </div>
      </section>
    </Layout>
  );
}
