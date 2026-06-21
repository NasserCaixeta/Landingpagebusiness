import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Mail, Menu, Phone, Plus } from "lucide-react";
import "./styles.css";
import { news, stats, work, services, faqs, pricing, partners, images } from "./data/content";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

function currentPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function Link({ href, children, className = "" }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <span className="brand-mark">N</span>
        Norvin
      </Link>
      <nav>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className="pill">
        Start Project <ArrowUpRight size={16} />
      </Link>
      <button className="menu-button" aria-label="Menu">
        <Menu size={20} />
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">LOCATION</p>
        <p>No. 152 Thatcher Road, New York, NY 10012</p>
      </div>
      <div>
        <p className="eyebrow">INQUIRY</p>
        <p>hello@norvin.agency</p>
        <p>+0278346236</p>
      </div>
      <div>
        <p className="eyebrow">LINKS</p>
        {navItems.slice(1).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/privacy-policy">Privacy</Link>
      </div>
      <div className="newsletter">
        <p>We hope to empower users and simplify their everyday lives.</p>
        <label>
          Newsletter
          <span>
            <input placeholder="Email address" />
            <button>
              <ArrowUpRight size={18} />
            </button>
          </span>
        </label>
      </div>
      <p className="copyright">© 2026 Norvin Agency. All Rights Reserved</p>
    </footer>
  );
}

function Page({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function Hero({ label, title, text, image = images.hero }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-actions">
          <Link href="/works" className="button dark">
            View Work
          </Link>
          <Link href="/contact" className="button light">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="hero-media">
        <img src={image} alt="" />
        <div className="floating-note">
          <strong>63k+</strong>
          <span>Clients</span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-grid">
      {stats.map((item) => (
        <article key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ServiceGrid() {
  return (
    <section className="section">
      <SectionTitle
        kicker="What we do"
        title="Elevating brand presence through cohesive visual systems."
        text="We provide tailor-made services adapted for any business model to help growth happen faster."
      />
      <div className="service-grid">
        {services.map((service, index) => (
          <article key={service.title} className="service-card">
            <span>{String(index + 1).padStart(2, "0")}.</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkCards({ limit }) {
  const items = limit ? work.slice(0, limit) : work;
  return (
    <div className="work-grid">
      {items.map((item, index) => (
        <Link href={`/works/${item.slug}`} className="work-card" key={item.slug}>
          <img src={item.image} alt="" />
          <span>{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <small>{String(index + 1).padStart(2, "0")}</small>
        </Link>
      ))}
    </div>
  );
}

function NewsCards({ limit }) {
  const items = limit ? news.slice(0, limit) : news;
  return (
    <div className="news-grid">
      {items.map((item) => (
        <Link href={`/news/${item.slug}`} className="news-card" key={item.slug}>
          <span>{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <small>{item.date}</small>
        </Link>
      ))}
    </div>
  );
}

function Pricing() {
  return (
    <section className="section">
      <SectionTitle kicker="Pricing Plan" title="Flexible plans for growing brands." />
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <article className={plan.featured ? "price-card featured" : "price-card"} key={plan.name}>
            <p className="eyebrow">{plan.name}</p>
            <h3>{plan.price}</h3>
            <p>{plan.text}</p>
            {plan.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <Link href="/contact" className="button dark">
              Get Started
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq">
      <SectionTitle kicker="FAQS" title="Common asked questions." />
      <div>
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>
              {faq.q}
              <Plus size={18} />
            </summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="contact-block">
      <div>
        <p className="eyebrow">Hire us!!</p>
        <h2>Let us build something cool together.</h2>
        <p>Have a project in mind or just want to say hello? We are here to help.</p>
        <p className="contact-line">
          <Phone size={18} /> +0278346236
        </p>
        <p className="contact-line">
          <Mail size={18} /> hello@norvin.agency
        </p>
      </div>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Service" />
        <input placeholder="Budget" />
        <textarea placeholder="Message" rows="5" />
        <button className="button dark">Submit</button>
      </form>
    </section>
  );
}

function Home() {
  return (
    <Page>
      <Hero
        label="/ New York, USA"
        title="Award Winning Agency"
        text="A global design agency crafting high-end digital products and immersive experiences."
      />
      <Stats />
      <ServiceGrid />
      <section className="section">
        <SectionTitle kicker="Portfolio" title="Latest works" text="Projects crafted with strategy, creativity and precision." />
        <WorkCards limit={4} />
      </section>
      <section className="section split">
        <SectionTitle kicker="Reviews" title="Our growth would not be possible without Norvin's strategic support." />
        <div className="quote-card">
          <p>JULIAN BROOKS</p>
          <span>Founder, Velo Digital</span>
        </div>
      </section>
      <Pricing />
      <FAQ />
      <section className="partners">
        {partners.map((partner) => (
          <span key={partner}>{partner}</span>
        ))}
      </section>
      <ContactBlock />
    </Page>
  );
}

function About() {
  return (
    <Page>
      <Hero
        label="About"
        title="Our creativity with clear purpose."
        text="A creative studio focused on building brands that connect, inspire and grow."
        image={images.about}
      />
      <Stats />
      <ServiceGrid />
      <Pricing />
      <section className="section">
        <SectionTitle kicker="Our Experts" title="Top-notch experts with dedicated support." />
        <div className="team-grid">
          {["James Anderson", "Oliver Bennett", "William Carter"].map((name, index) => (
            <article key={name}>
              <img src={[images.person1, images.person2, images.person3][index]} alt="" />
              <h3>{name}</h3>
              <p>{["Design Lead", "Developer", "Market Strategist"][index]}</p>
            </article>
          ))}
        </div>
      </section>
      <FAQ />
      <ContactBlock />
    </Page>
  );
}

function Works() {
  return (
    <Page>
      <Hero label="Works" title="Our work that tells stories." text="A showcase of projects crafted with strategy, creativity, trend and precision." image={images.workHero} />
      <section className="section">
        <WorkCards />
      </section>
      <ContactBlock />
    </Page>
  );
}

function News() {
  return (
    <Page>
      <Hero label="News" title="News insights that drive creativity." text="Exploring design, strategies and creativity that shape modern brands." image={images.newsHero} />
      <section className="section">
        <NewsCards />
      </section>
      <ContactBlock />
    </Page>
  );
}

function DetailPage({ type, item }) {
  const isWork = type === "work";
  return (
    <Page>
      <section className="detail-hero">
        <p className="eyebrow">{isWork ? item.category : item.category}</p>
        <h1>{item.title}</h1>
        <p>{isWork ? item.summary : item.excerpt}</p>
        <div className="meta-row">
          <span>{isWork ? item.duration : item.date}</span>
          <span>{isWork ? item.category : "Article"}</span>
        </div>
      </section>
      {isWork && <img className="wide-image" src={item.image} alt="" />}
      <section className="article-body">
        {(item.sections || []).map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
        {isWork && (
          <Link className="button dark" href="/contact">
            View Live
          </Link>
        )}
      </section>
      <ContactBlock />
    </Page>
  );
}

function Contact() {
  return (
    <Page>
      <Hero label="Say Hi" title="Let's build something cool." text="Have a project in mind or just want to say hello? Let's make it happen." image={images.contactHero} />
      <ContactBlock />
      <FAQ />
    </Page>
  );
}

function Privacy() {
  return (
    <Page>
      <section className="detail-hero">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>This mock keeps the template's policy page as editable JSX content for later replacement.</p>
      </section>
      <section className="article-body">
        {["Information We Collect", "How We Use Information", "Contact"].map((title) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>
              Norvin may collect contact details submitted through forms, project context, and newsletter preferences. The data is used to respond to inquiries, improve services, and keep communication relevant.
            </p>
          </article>
        ))}
      </section>
    </Page>
  );
}

function App() {
  const path = currentPath();
  if (path === "/") return <Home />;
  if (path === "/about") return <About />;
  if (path === "/works") return <Works />;
  if (path === "/news") return <News />;
  if (path === "/contact") return <Contact />;
  if (path === "/privacy-policy") return <Privacy />;

  const newsMatch = path.match(/^\/news\/(.+)/);
  if (newsMatch) {
    const item = news.find((entry) => entry.slug === newsMatch[1]);
    if (item) return <DetailPage type="news" item={item} />;
  }

  const workMatch = path.match(/^\/works\/(.+)/);
  if (workMatch) {
    const item = work.find((entry) => entry.slug === workMatch[1]);
    if (item) return <DetailPage type="work" item={item} />;
  }

  return (
    <Page>
      <section className="detail-hero">
        <h1>Page not found</h1>
        <p>This route was not mapped in the mock yet.</p>
      </section>
    </Page>
  );
}

createRoot(document.getElementById("root")).render(<App />);
