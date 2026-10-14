import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Icon from "./components/Icon";

const trades = [
  ["Restaurants", "c"],
  ["Clinics", "v"],
  ["Salons", "i"],
  ["Contractors", "c"],
  ["Shops", "v"],
];

const stickers = [
  { icon: "answer", title: "Question answered", note: "Saturday hours" },
  { icon: "link", title: "Link texted", note: "Booking page" },
  { icon: "mail", title: "Details emailed to you", note: "New lead: bridal trial" },
  { icon: "handoff", title: "Call passed to your team", note: "Over to Sam" },
];

const asks = [
  ["Restaurant", "Do you have gluten-free options?"],
  ["Contractor", "Can someone come look at my roof?"],
  ["Clinic", "Where do I park when I arrive?"],
];

const tiles = [
  {
    icon: "answer",
    fill: "c",
    title: "Answers questions",
    text: "Hours, services, location, menu. The things callers ask you every day.",
  },
  {
    icon: "bag",
    fill: "v",
    title: "Takes phone orders",
    text: "Callers can place an order over the phone, just like they would with you.",
  },
  {
    icon: "link",
    fill: "i",
    title: "Texts a link",
    text: "Directions, booking, ordering or payment, sent straight to the caller’s phone.",
  },
  {
    icon: "mail",
    fill: "c",
    title: "Emails you the lead",
    text: "Who called, what they need and how to reach them, sent to your team.",
  },
  {
    icon: "handoff",
    fill: "v",
    title: "Passes the call to you",
    text: "When a caller needs a real person, Yapn transfers them to your team.",
  },
  {
    icon: "notes",
    fill: "i",
    title: "Keeps a call log",
    text: "Each call is saved with a short summary you can look over whenever it suits you.",
  },
];

const campaign = [
  { initials: "PS", fill: "c", name: "Priya S.", when: "Thursday morning", status: "Confirmed", pill: "ok" },
  { initials: "ML", fill: "v", name: "Marcus L.", when: "Thursday midday", status: "Reminded", pill: "rem" },
  { initials: "JK", fill: "i", name: "Jo K.", when: "Thursday afternoon", status: "No answer, text sent", pill: "txt" },
  { initials: "AR", fill: "c", name: "Ana R.", when: "Thursday evening", status: "Calling", pill: "now" },
];

function HeroVisual() {
  return (
    <div
      className="visual"
      role="img"
      aria-label="Example call: a caller asks a salon about Saturday. Yapn answers, texts a booking link, emails the details to the team and passes the call to a stylist."
    >
      <div className="panel">
        <div className="dots">
          {Array.from({ length: 9 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
      <span className="example">
        <Icon name="phone" />
        Example call
      </span>
      <div className="call">
        <div className="call-top">
          <span className="avatar">FS</span>
          <div>
            <p className="call-name">Fern Street Salon</p>
            <p className="call-status">
              <i className="live" />
              Yapn is on the call
            </p>
          </div>
          <span className="wave">
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i} />
            ))}
          </span>
        </div>
        <div className="chat">
          <p className="msg them">
            <small>Caller</small>Hi! Are you open on Saturday?
          </p>
          <p className="msg yapn">
            <small>Yapn</small>We are! I’ve texted you our booking link so you
            can pick a time.
          </p>
          <p className="msg them">Lovely. Can I ask Sam about a bridal trial?</p>
          <p className="msg yapn">Of course. Putting you through to Sam now.</p>
        </div>
      </div>
      <ul className="stickers">
        {stickers.map((s, i) => (
          <li key={s.title} className={`sticker st-${i + 1}`}>
            <span className="st-ico">
              <Icon name={s.icon} />
            </span>
            <span className="st-text">
              <strong>{s.title}</strong>
              <small>{s.note}</small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CampaignVisual() {
  return (
    <div
      className="campaign"
      role="img"
      aria-label="Example campaign: appointment reminders for a physio clinic, with one customer confirmed, one reminded, one sent a text after no answer and one being called now."
    >
      <div className="camp-card">
        <div className="camp-head">
          <span className="camp-ico">
            <Icon name="calendar" />
          </span>
          <div>
            <p className="camp-kicker">Example campaign</p>
            <p className="camp-title">Northside Physio: Thursday reminders</p>
          </div>
        </div>
        <ul className="camp-list">
          {campaign.map((c) => (
            <li key={c.name}>
              <span className={`av fill-${c.fill}`}>{c.initials}</span>
              <span className="camp-who">
                <b>{c.name}</b>
                <small>{c.when}</small>
              </span>
              <span className={`pill pill-${c.pill}`}>
                {c.pill === "now" && <i />}
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sms">
        <small>
          <Icon name="text" />
          Text to Jo K.
        </small>
        <p>
          Hi Jo, it’s Northside Physio. Just a reminder about your appointment
          on Thursday afternoon. Need to change it? <u>Use this link</u>
        </p>
      </div>
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
      <main id="main" className="wrap">
        <section className="hero">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-badge">
                <Icon name="phone" />
              </span>
              An AI phone agent for small businesses
            </p>
            <h1 className="hero-title">
              <span className="line">Your phone rings.</span>{" "}
              <span className="line mark">
                <span>Yapn picks up.</span>
              </span>
            </h1>
            <p className="lede">
              Yapn is an AI that handles your business line for you. It answers
              questions, takes phone orders, texts callers the link they need
              and passes the call to your team when a person should take it. It
              can even call your customers to confirm appointments.
            </p>
            <div className="actions">
              <a className="btn" href="#contact">
                Talk to us
                <span className="btn-arrow">
                  <Icon name="arrow" />
                </span>
              </a>
              <a className="textlink" href="#how-it-works">
                See what Yapn does on a call
              </a>
            </div>
            <p className="trades">
              <span className="trades-label">Made for</span>
              {trades.map(([name, tint]) => (
                <span key={name} className={`chip-${tint}`}>
                  {name}
                </span>
              ))}
            </p>
          </div>
          <HeroVisual />
        </section>

        <section className="how" id="how-it-works">
          <div className="how-head">
            <div>
              <p className="kicker">How it works</p>
              <h2 className="section-title">
                <span className="line">It picks up when they call.</span>{" "}
                <span className="line">
                  It calls them when you need&nbsp;it&nbsp;to.
                </span>
              </h2>
            </div>
            <p>
              You tell Yapn about your business: your hours, services, location,
              menu and when a call should go to your team. Yapn uses that to
              look after your callers, and every call is logged with a short
              summary for you to read later.
            </p>
          </div>

          <div className="block block-in">
            <div className="block-copy">
              <span className="tag tag-in">
                <Icon name="in" />
                Calls coming in
              </span>
              <h3 className="block-title">When customers call, Yapn answers.</h3>
              <p>
                It greets callers in your business’s name, helps with what they
                need and knows when to bring in someone from your team.
              </p>
              <div className="asks">
                <p className="asks-label">Example questions</p>
                {asks.map(([trade, question]) => (
                  <p key={trade} className="ask">
                    <span>{trade}</span>
                    {question}
                  </p>
                ))}
              </div>
            </div>
            <ul className="tiles">
              {tiles.map((t) => (
                <li key={t.title} className="tile">
                  <span className={`tile-ico fill-${t.fill}`}>
                    <Icon name={t.icon} />
                  </span>
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="block block-out">
            <CampaignVisual />
            <div className="block-copy">
              <span className="tag tag-out">
                <Icon name="out" />
                Calls going out
              </span>
              <h3 className="block-title">
                When you need to reach them, Yapn makes the calls.
              </h3>
              <p>
                Set up a campaign and Yapn calls your customers to confirm their
                appointments or remind them one is coming up. If nobody picks
                up, it follows up with a text.
              </p>
              <ul className="checks">
                {[
                  "Appointment confirmations",
                  "Friendly reminders",
                  "A text when nobody answers",
                ].map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy">
            <p className="kicker">Let’s talk</p>
            <h2 className="contact-title">
              Curious how Yapn would sound on your line?
            </h2>
            <p>
              Tell us a little about your business and we’ll take it from
              there.
            </p>
            <a className="contact-email" href="mailto:team@yapn.ai">
              <Icon name="mail" />
              team@yapn.ai
            </a>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
