import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function VoiceArt() {
  return (
    <div className="voice-art" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="art-cross cross-top">+</div>
      <div className="art-cross cross-bottom">+</div>
      <div className="voice-core">
        <div className="waveform">
          {[
            24, 42, 62, 35, 79, 110, 64, 142, 96, 166, 114, 76, 128, 88, 48, 67,
            31,
          ].map((height, i) => (
            <span
              key={i}
              style={{ "--height": `${height}px`, "--delay": `${i * -0.17}s` }}
            />
          ))}
        </div>
      </div>
      <div className="signal-label signal-top">
        <span className="status-dot" />A little more human.
      </div>
      <div className="signal-label signal-bottom">
        <span className="sound-icon">⌁</span>A lot more connected.
      </div>
      <div className="art-caption">YOUR NEXT CONVERSATION STARTS HERE</div>
    </div>
  );
}

function CallIllustration() {
  return (
    <div
      className="call-demo"
      aria-label="Illustration of an inbound conversation"
    >
      <div className="demo-top">
        <span>
          <i className="status-dot" /> INBOUND CONVERSATION
        </span>
        <span className="demo-icon" aria-hidden="true">
          ↙
        </span>
      </div>
      <div className="message message-caller">Hi, I have a quick question.</div>
      <div className="message message-yapn">Of course. How can I help?</div>
      <div className="message message-caller">Can someone get back to me?</div>
      <div className="message message-yapn">
        I can take your details for the team.
      </div>
      <div className="demo-result">
        <span className="check" aria-hidden="true">
          ✓
        </span>
        <div>
          Details captured.<small>Ready for your team to follow up.</small>
        </div>
      </div>
      <span className="illustration-label">Illustrative conversation</span>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> MAKE ROOM FOR EVERY CONVERSATION
            </p>
            <h1>
              Never miss
              <br />a <span className="accent-word">call.</span>
            </h1>
            <p className="hero-description">
              Your business has a lot to say.
              <br />
              We help you be there to say it.
            </p>
            <p className="hero-detail">
              AI that answers your calls and reaches out to your customers. So
              your team can keep doing its thing.
            </p>
            <div className="hero-actions">
              <a className="button button-cyan" href="#contact">
                Let’s talk <Arrow />
              </a>
              <a className="text-link" href="#what-we-do">
                Meet Yapn <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <VoiceArt />
        </section>
        <div className="capability-strip">
          <div className="container">
            <span>MORE CONVERSATION. LESS PHONE TAG.</span>
            <div>
              <span>Inbound calls</span>
              <i aria-hidden="true" />
              <span>Outbound campaigns</span>
              <i aria-hidden="true" />
              <span>Your team, connected</span>
            </div>
          </div>
        </div>
        <section className="services container" id="what-we-do">
          <div className="section-heading">
            <p className="eyebrow">A GOOD CALL FOR YOUR BUSINESS</p>
            <h2>
              On the other end.
              <br />
              <span className="muted">And on your side.</span>
            </h2>
          </div>
          <div className="service-row">
            <div className="service-copy">
              <p className="eyebrow">
                <span className="small-arrow">↙</span> INBOUND CALLS
              </p>
              <h3>
                Be there when
                <br />
                they call.
              </h3>
              <p>
                Questions, inquiries, and the calls that keep your business
                moving. Yapn helps you answer them, capture the details, and
                keep your team in the loop.
              </p>
              <div className="service-tags">
                <span>Answer questions</span>
                <span>Capture details</span>
                <span>Connect callers</span>
              </div>
            </div>
            <CallIllustration />
          </div>
          <div className="service-row outbound-row">
            <div
              className="outbound-demo"
              aria-label="Illustration of an outbound campaign"
            >
              <div className="demo-top">
                <span>OUTBOUND CAMPAIGNS</span>
                <span className="demo-icon" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="outbound-heading">
                Start the
                <br />
                next conversation<span>.</span>
              </div>
              <div className="outreach-line">
                <span className="outreach-symbol" aria-hidden="true">
                  ↗
                </span>
                <div>
                  Reach out<small>Make the introduction.</small>
                </div>
                <span className="line-end" aria-hidden="true">
                  +
                </span>
              </div>
              <div className="outreach-line">
                <span className="outreach-symbol" aria-hidden="true">
                  ⌁
                </span>
                <div>
                  Follow up<small>Keep the conversation going.</small>
                </div>
                <span className="line-end" aria-hidden="true">
                  +
                </span>
              </div>
              <span className="illustration-label">Illustrative campaign</span>
            </div>
            <div className="service-copy">
              <p className="eyebrow">
                <span className="small-arrow">↗</span> OUTBOUND CAMPAIGNS
              </p>
              <h3>
                Don’t wait for
                <br />
                the phone to ring.
              </h3>
              <p>
                Have something to share? Put the conversation in motion. Yapn
                helps your business reach out to customers and follow up through
                outbound calling campaigns.
              </p>
              <div className="service-tags">
                <span>Customer outreach</span>
                <span>Follow-ups</span>
                <span>Campaigns</span>
              </div>
            </div>
          </div>
        </section>
        <section className="statement">
          <div className="container">
            <span className="eyebrow">LESS JUGGLING. MORE CONNECTING.</span>
            <p>
              You do your thing.
              <br />
              We’ll take the <span>call.</span>
            </p>
            <a className="text-link" href="#contact">
              Let’s make it happen <Arrow />
            </a>
          </div>
          <div className="statement-lines" aria-hidden="true" />
        </section>
        <section className="contact-section container" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">
              <span className="status-dot" /> LET’S TALK
            </p>
            <h2>
              What’s your
              <br />
              next move<span>?</span>
            </h2>
            <p>
              Tell us about your business.
              <br />
              We’ll take it from there.
            </p>
            <a className="contact-email" href="mailto:team@yapn.ai">
              team@yapn.ai <Arrow />
            </a>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
