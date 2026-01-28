import React from 'react';
import styles from './GladiaLandingPage.module.css';

// Asset paths
const coverImage = "/images/cover.png";
const logoWhite = "/images/logo-white.png";
const gladiaLogo = "/images/gladia-logo.svg";
const socialIcons = "/images/social-icons.svg";
const headerLogo = "/images/header-logo.svg";

// Animated button text component
function AnimatedText({ children }) {
  return (
    <span className={styles.btnTextWrapper}>
      <span className={styles.btnText}>{children}</span>
      <span className={styles.btnTextClone}>{children}</span>
    </span>
  );
}

export default function GladiaLandingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Navigation Bar */}
        <nav className={styles.navbar}>
          <img src={headerLogo} alt="Gladia" className={styles.navLogo} />

          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Product</a>
            <a href="#" className={styles.navLink}>Solutions</a>
            <a href="#" className={styles.navLink}>Pricing</a>
            <a href="#" className={styles.navLink}>Developers</a>
            <a href="#" className={styles.navLink}>Resources</a>
            <a href="#" className={styles.navLink}>Company</a>
          </div>

          <div className={styles.navButtons}>
            <button className={styles.btnSecondary}>
              <AnimatedText>Request a demo</AnimatedText>
            </button>
            <button className={styles.btnPrimary}>
              <AnimatedText>Sign up</AnimatedText>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            {/* Left: Text + Form */}
            <div className={styles.heroLeft}>
              <div className={styles.heroText}>
                <h1 className={styles.displayLg}>
                  <span className={styles.displayItalic}>Building</span> End-to-End Voice Agents
                </h1>
                <p className={styles.heroSubhead}>
                  Voice agents are moving from demos to production. The STT API you choose now will shape your latency, accuracy, cost structure, and ability to scale.
                </p>
              </div>

              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Get the guide</h3>
                <form className={styles.form}>
                  <div className={styles.formRow}>
                    <input type="text" placeholder="First Name" className={styles.formInput} />
                    <input type="text" placeholder="Last Name" className={styles.formInput} />
                  </div>
                  <input type="text" placeholder="Company Name" className={styles.formInput} />
                  <select className={styles.formSelect} defaultValue="">
                    <option value="" disabled>Your Industry/use case</option>
                    <option value="saas">SaaS</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="media">Media</option>
                    <option value="other">Other</option>
                  </select>
                  <input type="text" placeholder="Job Title" className={styles.formInput} />
                  <input type="email" placeholder="Business Email" className={styles.formInput} />
                  <p className={styles.formDisclaimer}>
                    By submitting this form, you agree to the{' '}
                    <a href="#" className={styles.formLink}>Privacy Policy</a>
                  </p>
                  <button type="submit" className={styles.formSubmit}>
                    <AnimatedText>Get your copy now</AnimatedText>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Ebook Cover */}
            <div className={styles.heroRight}>
              <div className={styles.ebookCover}>
                <img src={coverImage} alt="" className={styles.ebookImage} />
                <img src={logoWhite} alt="Gladia" className={styles.ebookLogo} />
                <div className={styles.ebookText}>
                  <p>The Ultimate</p>
                  <p>Guide to Building</p>
                  <p>Production</p>
                  <p>Voice Agents</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Content Section - 1200px container */}
      <section className={styles.contentWrapper}>
        <div className={styles.contentContainer}>

          {/* Section 01: Why This Guide - Text | Diagram */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01</span>
            <span className={styles.sectionLabel}>WHY THIS GUIDE</span>
          </div>

          <div className={styles.layoutTextDiagram}>
            <div className={styles.layoutText}>
              <h2 className={styles.headingLg}>
                Choosing an STT API is harder than it looks.
              </h2>
              <p className={styles.bodyText}>
                Most teams jump into vendor comparisons before defining what they actually need. The result: decisions based on incomplete criteria, and problems that surface later.
              </p>
              <p className={styles.bodyText}>
                This guide gives technical leaders a clear framework for evaluating STT vendors and designing a full pipeline that's fast, reliable, and future-proof.
              </p>
            </div>
            <div className={styles.diagram}>
              <div className={styles.diagramFlow}>
                <div className={styles.diagramNode}>
                  <span className={styles.diagramIcon}>?</span>
                  <span className={styles.diagramLabel}>Requirements</span>
                </div>
                <div className={styles.diagramArrow}></div>
                <div className={styles.diagramNode}>
                  <span className={styles.diagramIcon}>!</span>
                  <span className={styles.diagramLabel}>Evaluation</span>
                </div>
                <div className={styles.diagramArrow}></div>
                <div className={styles.diagramNodeHighlight}>
                  <span className={styles.diagramIcon}>✓</span>
                  <span className={styles.diagramLabel}>Decision</span>
                </div>
              </div>
              <p className={styles.diagramCaption}>Most teams skip step 1</p>
            </div>
          </div>

          {/* Section 02: The Framework - Dark Block */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02</span>
            <span className={styles.sectionLabel}>THE FRAMEWORK</span>
          </div>

          <div className={styles.frameworkBlock}>
            <h2 className={styles.frameworkHeading}>
              <span className={styles.frameworkHeadingAccent}>Take the time</span> to do this right.
            </h2>

            <div className={styles.frameworkFlow}>
              <div className={styles.frameworkStep}>
                <div className={styles.frameworkStepIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
                  </svg>
                </div>
                <span className={styles.frameworkStepLabel}>Who</span>
              </div>
              <div className={styles.frameworkArrow}>→</div>
              <div className={styles.frameworkStep}>
                <div className={styles.frameworkStepIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L4 6v6c0 5.5 3.5 10 8 12 4.5-2 8-6.5 8-12V6l-8-4z"/>
                    <path d="M7 10h10M7 14h10"/>
                  </svg>
                </div>
                <span className={styles.frameworkStepLabel}>What</span>
              </div>
              <div className={styles.frameworkArrow}>→</div>
              <div className={styles.frameworkStep}>
                <div className={styles.frameworkStepIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                </div>
                <span className={styles.frameworkStepLabel}>Environment</span>
              </div>
              <div className={styles.frameworkArrow}>→</div>
              <div className={styles.frameworkStep}>
                <div className={styles.frameworkStepIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                  </svg>
                </div>
                <span className={styles.frameworkStepLabel}>Device</span>
              </div>
            </div>

            <p className={styles.frameworkText}>
              A clear understanding of <strong>what you're building, who you're building for, and how it'll be used</strong> is the foundation for building something that actually works—something your customers will use, love, and come to rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialContent}>
            <p className={styles.testimonialQuote}>
              "As someone who's worked with a wide range of companies to integrate speech-to-text—from early-stage startups to global platforms—one of the most common mistakes I see is jumping straight into a vendor search without first clarifying internal objectives. The question isn't just can you build it in-house—but should you, based on your team's focus, infrastructure, and product goals.
            </p>
            <p className={styles.testimonialQuote}>
              That's why I always recommend teams start with this simple framework to define their requirements. It's been used by founders, CTOs, and product leaders across industries to bring clarity to their STT search."
            </p>
          </div>
          <div className={styles.testimonialImage}>
            <img src="/images/jean-louis.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* Content Section continues */}
      <section className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          {/* Section 03: Key Tensions - Bento Grid */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03</span>
            <span className={styles.sectionLabel}>KEY TENSIONS</span>
          </div>

          <div className={styles.tensionsIntro}>
            <h2 className={styles.headingXl}>Four trade-offs every team must navigate.</h2>
            <p className={styles.leadText}>There's no perfect STT API. But there's the right one for your constraints.</p>
          </div>

          <div className={styles.bentoGrid}>
            <div className={styles.bentoCard}>
              <div className={styles.bentoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10M18 20V4M6 20v-4"/>
                </svg>
              </div>
              <div className={styles.bentoContent}>
                <h3 className={styles.bentoTitle}>Accuracy vs. Real-World</h3>
                <p className={styles.bentoDesc}>
                  Benchmarks use clean data. Your users don't.<br/>How does it perform in production?
                </p>
              </div>
              <div className={styles.bentoVisual}>
                <div className={styles.tensionBar}>
                  <div className={styles.tensionBarFill} style={{width: '85%'}}></div>
                </div>
                <div className={styles.tensionLabels}>
                  <span>Benchmark</span>
                  <span>Production</span>
                </div>
              </div>
            </div>

            <div className={styles.bentoCard}>
              <div className={styles.bentoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div className={styles.bentoContent}>
                <h3 className={styles.bentoTitle}>Latency vs. Experience</h3>
                <p className={styles.bentoDesc}>
                  Voice agents live or die by response time.<br/>What's the end-to-end latency?
                </p>
              </div>
              <div className={styles.bentoVisual}>
                <div className={styles.latencyProgress}>
                  <div className={styles.latencyLine}>
                    <div className={styles.latencyLineFill}></div>
                  </div>
                  <div className={styles.latencyDots}>
                    <div className={styles.latencyDot}>
                      <span className={styles.dotFast}></span>
                      <span className={styles.dotValue}>300ms</span>
                      <span className={styles.dotLabel}>GOOD</span>
                    </div>
                    <div className={styles.latencyDot}>
                      <span className={styles.dotMed}></span>
                      <span className={styles.dotValue}>500ms</span>
                      <span className={styles.dotLabel}>AVERAGE</span>
                    </div>
                    <div className={styles.latencyDot}>
                      <span className={styles.dotSlow}></span>
                      <span className={styles.dotValue}>1000ms</span>
                      <span className={styles.dotLabel}>BAD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bentoCard}>
              <div className={styles.bentoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </div>
              <div className={styles.bentoContent}>
                <h3 className={styles.bentoTitle}>Features vs. Complexity</h3>
                <p className={styles.bentoDesc}>
                  Diarization, vocabulary, sentiment, timestamps.<br/>What's the overhead of each feature?
                </p>
              </div>
              <div className={styles.bentoVisual}>
                <div className={styles.featureStack}>
                  <span className={styles.featureTag}>Core STT</span>
                  <span className={styles.featureTag}>+ Diarization</span>
                  <span className={styles.featureTag}>+ Sentiment</span>
                  <span className={styles.featureTagMuted}>+ More...</span>
                </div>
              </div>
            </div>

            <div className={styles.bentoCard}>
              <div className={styles.bentoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className={styles.bentoContent}>
                <h3 className={styles.bentoTitle}>Scale, Cost & Compliance</h3>
                <p className={styles.bentoDesc}>
                  How does pricing scale with volume?<br/>What certifications are available?
                </p>
              </div>
              <div className={styles.bentoVisual}>
                <div className={styles.scaleIcons}>
                  <div className={styles.scaleIcon}>
                    <span>$</span>
                    <span className={styles.scaleLabel}>Cost</span>
                  </div>
                  <div className={styles.scaleIcon}>
                    <span>↗</span>
                    <span className={styles.scaleLabel}>Scale</span>
                  </div>
                  <div className={styles.scaleIcon}>
                    <span>🔒</span>
                    <span className={styles.scaleLabel}>Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 04: What's Inside - Checklist Layout */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04</span>
            <span className={styles.sectionLabel}>WHAT'S INSIDE</span>
          </div>

          <div className={styles.checklistSection}>
            <div className={styles.checklistLeft}>
              <h2 className={styles.headingLg}>Everything you need to make the right call.</h2>
              <p className={styles.bodyText}>
                The guide includes practical frameworks, vendor evaluation checklists, and real-world examples from production deployments.
              </p>
            </div>
            <div className={styles.checklistRight}>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Decision framework for STT selection</span>
              </div>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>30+ vendor evaluation questions</span>
              </div>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Latency optimization strategies</span>
              </div>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Cost modeling templates</span>
              </div>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Compliance requirements checklist</span>
              </div>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Real production case studies</span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className={styles.finalCta}>
            <p className={styles.ctaText}>
              Make your STT decision with a clear framework, not guesswork.
            </p>
            <button className={styles.btnHero}>
              <AnimatedText>Download the guide</AnimatedText>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <span className={styles.footerTitle}>Product</span>
              <a href="#" className={styles.footerLink}>Speech-to-Text</a>
              <a href="#" className={styles.footerLink}>Real-time streaming</a>
              <a href="#" className={styles.footerLink}>Pricing</a>
            </div>
            <div className={styles.footerColumn}>
              <span className={styles.footerTitle}>Use cases</span>
              <a href="#" className={styles.footerLink}>Customer support</a>
              <a href="#" className={styles.footerLink}>Sales enablement</a>
              <a href="#" className={styles.footerLink}>Media</a>
            </div>
            <div className={styles.footerColumn}>
              <span className={styles.footerTitle}>Developers</span>
              <a href="#" className={styles.footerLink}>Documentation</a>
              <a href="#" className={styles.footerLink}>API Reference</a>
              <a href="#" className={styles.footerLink}>Status</a>
            </div>
            <div className={styles.footerColumn}>
              <span className={styles.footerTitle}>Company</span>
              <a href="#" className={styles.footerLink}>About</a>
              <a href="#" className={styles.footerLink}>Blog</a>
              <a href="#" className={styles.footerLink}>Careers</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <img src={gladiaLogo} alt="Gladia" className={styles.footerLogo} />
            <img src={socialIcons} alt="Social media" className={styles.socialIcons} />
            <span className={styles.footerTagline}>AI-powered speech recognition for developers</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
