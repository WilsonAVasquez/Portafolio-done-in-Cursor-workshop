import Image from "next/image";
import { BathtubCurve } from "@/components/BathtubCurve";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Reveal } from "@/components/Reveal";
import { resolveLang, translations, t } from "@/lib/i18n";

type HomeProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const lang = resolveLang(params.lang);
  const copy = translations;

  const navItems = [
    { href: "#about", label: t(copy.nav.about, lang) },
    { href: "#research", label: t(copy.nav.research, lang) },
    { href: "#publications", label: t(copy.nav.publications, lang) },
    { href: "#trajectory", label: t(copy.nav.trajectory, lang) },
    { href: "#teaching", label: t(copy.nav.teaching, lang) },
    { href: "#talks", label: t(copy.nav.talks, lang) },
    { href: "#students", label: t(copy.nav.students, lang) },
    { href: "#contact", label: t(copy.nav.contact, lang) },
  ];

  const featuredPubs = copy.publications.items.filter((p) => p.featured);
  const otherPubs = copy.publications.items.filter((p) => !p.featured);
  const orderedPubs = [...featuredPubs, ...otherPubs];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__bar mx-auto max-w-6xl px-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-[0.95rem] tracking-tight text-[var(--ink)] sm:text-base"
          >
            {t(copy.hero.name, lang)}
          </a>
          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label={t(copy.nav.primary, lang)}
          >
            {navItems.slice(0, 5).map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="nav-link">
              {t(copy.nav.contact, lang)}
            </a>
          </nav>
          <LanguageSwitcher lang={lang} />
        </div>
        <nav
          className="mobile-nav border-t border-[var(--line)] lg:hidden"
          aria-label={t(copy.nav.primary, lang)}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-name">
          <div className="hero-copy">
            <BathtubCurve className="hero-motif motion-fade-in" />
            <div className="hero-copy-inner">
              <p className="hero-field motion-fade-up">
                {t(copy.hero.field, lang)}
              </p>
              <h1 id="hero-name" className="hero-name motion-fade-up motion-fade-up-delay">
                {t(copy.hero.name, lang)}
                <span className="hero-credential">{t(copy.hero.credential, lang)}</span>
              </h1>
              <p className="hero-role motion-fade-up motion-fade-up-delay">
                {t(copy.hero.role, lang)}
              </p>
              <p className="hero-focus motion-fade-up motion-fade-up-delay-2">
                {t(copy.hero.focus, lang)}
              </p>
              <div className="hero-actions motion-fade-up motion-fade-up-delay-3">
                <a href="#contact" className="btn-primary">
                  {t(copy.hero.cta, lang)}
                </a>
                <a href="#publications" className="btn-secondary">
                  {t(copy.hero.ctaSecondary, lang)} →
                </a>
              </div>
              <p className="mt-8 font-mono-label text-[0.68rem] tracking-[0.12em] text-[var(--muted)] uppercase">
                {t(copy.hero.motifLabel, lang)}
              </p>
            </div>
          </div>
          <div className="hero-media motion-hero-media">
            <Image
              src="/wilson-vasquez.png"
              alt={t(copy.hero.photoAlt, lang)}
              fill
              priority
              sizes="(max-width: 959px) 100vw, 46vw"
              className="object-cover object-top"
            />
            <p className="hero-photo-credit">{t(copy.hero.photoCredit, lang)}</p>
          </div>
        </section>

        <section
          id="about"
          className="section border-t border-[var(--line)]"
          aria-labelledby="about-title"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.nav.about, lang)}</p>
              <h2 id="about-title" className="section-title">
                {t(copy.about.title, lang)}
              </h2>
              <p className="mt-5 font-display text-xl leading-snug text-[var(--steel-deep)] sm:text-2xl">
                {t(copy.about.lead, lang)}
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
                {t(copy.about.body, lang)}
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="research"
          className="section section-band border-t border-[var(--line)]"
          aria-labelledby="research-title"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.nav.research, lang)}</p>
              <h2 id="research-title" className="section-title max-w-2xl">
                {t(copy.research.title, lang)}
              </h2>
              <p className="section-lead">{t(copy.research.intro, lang)}</p>
            </Reveal>
            <div className="research-list">
              {copy.research.items.map((item, index) => (
                <Reveal key={item.code} delayMs={index * 60}>
                  <article className="research-item">
                    <span className="research-code" aria-hidden>
                      {item.code}
                    </span>
                    <div>
                      <h3>{t(item.title, lang)}</h3>
                      <p>{t(item.body, lang)}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="publications"
          className="section border-t border-[var(--line)]"
          aria-labelledby="publications-title"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.nav.publications, lang)}</p>
              <h2 id="publications-title" className="section-title">
                {t(copy.publications.title, lang)}
              </h2>
              <p className="section-lead">{t(copy.publications.intro, lang)}</p>
            </Reveal>
            <ul className="pub-list">
              {orderedPubs.map((pub, index) => (
                <Reveal key={pub.href} delayMs={index * 40}>
                  <li className={`pub-item${pub.featured ? " is-featured" : ""}`}>
                    <span className="pub-year">{pub.year}</span>
                    <div>
                      {pub.featured ? (
                        <span className="pub-badge">
                          {t(copy.publications.featuredLabel, lang)}
                        </span>
                      ) : null}
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-title"
                      >
                        {t(pub.title, lang)}
                      </a>
                      <p className="pub-meta">
                        <span className="sr-only">
                          {t(copy.publications.venueLabel, lang)}:{" "}
                        </span>
                        {t(pub.venue, lang)}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <a
                href={copy.contact.links[0].href}
                className="btn-secondary mt-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(copy.publications.scholarCta, lang)} →
              </a>
            </Reveal>
          </div>
        </section>

        <section
          id="trajectory"
          className="section section-band border-t border-[var(--line)]"
          aria-labelledby="trajectory-title"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.nav.trajectory, lang)}</p>
              <h2 id="trajectory-title" className="section-title">
                {t(copy.trajectory.title, lang)}
              </h2>
              <p className="section-lead">{t(copy.trajectory.intro, lang)}</p>
            </Reveal>
            <ol className="timeline">
              {copy.trajectory.items.map((item, index) => (
                <Reveal key={`${item.year}-${index}`} delayMs={index * 50}>
                  <li className="timeline-item">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{t(item.title, lang)}</h3>
                    <p>{t(item.detail, lang)}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="teaching"
          className="section border-t border-[var(--line)]"
          aria-labelledby="teaching-title"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.nav.teaching, lang)}</p>
              <h2 id="teaching-title" className="section-title">
                {t(copy.teaching.title, lang)}
              </h2>
              <p className="section-lead">{t(copy.teaching.intro, lang)}</p>
            </Reveal>
            <ul className="mt-8">
              {copy.teaching.courses.map((course) => (
                <li
                  key={`${t(course.name, "en")}-${course.status}`}
                  className={`course-row${course.status === "past" ? " is-past" : ""}`}
                >
                  <span className="course-status">
                    {course.status === "current"
                      ? t(copy.teaching.currentLabel, lang)
                      : t(copy.teaching.pastLabel, lang)}
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">
                      {t(course.name, lang)}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {t(course.detail, lang)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="talks"
          className="section section-band border-t border-[var(--line)]"
          aria-labelledby="talks-title"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.nav.talks, lang)}</p>
              <h2 id="talks-title" className="section-title">
                {t(copy.talks.title, lang)}
              </h2>
              <p className="section-lead">{t(copy.talks.intro, lang)}</p>
            </Reveal>
            <ul className="mt-8">
              {copy.talks.items.map((talk) => (
                <li key={t(talk.title, "en")} className="talk-row">
                  <span className="pub-year">{talk.year}</span>
                  <div>
                    <p className="font-mono-label text-[0.7rem] tracking-[0.12em] text-[var(--muted)] uppercase">
                      {t(talk.type, lang)}
                      {talk.example ? (
                        <span className="example-tag">
                          {t(copy.talks.exampleLabel, lang)}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-1 font-semibold text-[var(--ink)]">
                      {t(talk.title, lang)}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {t(talk.venue, lang)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="quotes"
          className="section border-t border-[var(--line)]"
          aria-labelledby="quotes-title"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.quotes.kicker, lang)}</p>
              <h2 id="quotes-title" className="section-title">
                {t(copy.quotes.title, lang)}
              </h2>
              <p className="section-lead">{t(copy.quotes.intro, lang)}</p>
            </Reveal>
            <div className="quote-grid">
              {copy.quotes.items.map((item, index) => (
                <Reveal key={t(item.attribution, "en")} delayMs={index * 80}>
                  <figure className="quote-block">
                    <blockquote>
                      <p>“{t(item.quote, lang)}”</p>
                    </blockquote>
                    <figcaption className="mt-4 text-sm text-[var(--muted)]">
                      {t(item.attribution, lang)}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="students"
          className="section section-band border-t border-[var(--line)]"
          aria-labelledby="faq-title"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.nav.students, lang)}</p>
              <h2 id="faq-title" className="section-title">
                {t(copy.faq.title, lang)}
              </h2>
              <p className="section-lead">{t(copy.faq.intro, lang)}</p>
            </Reveal>
            <div className="faq-list">
              {copy.faq.items.map((item) => (
                <Reveal key={t(item.q, "en")}>
                  <div className="faq-item">
                    <h3>{t(item.q, lang)}</h3>
                    <p>{t(item.a, lang)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section border-t border-[var(--line)]"
          aria-labelledby="contact-title"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <p className="section-kicker">{t(copy.nav.contact, lang)}</p>
              <h2 id="contact-title" className="section-title">
                {t(copy.contact.title, lang)}
              </h2>
              <p className="section-lead">{t(copy.contact.intro, lang)}</p>
            </Reveal>
            <div className="contact-panel">
              <div>
                <p className="contact-label">{t(copy.contact.emailLabel, lang)}</p>
                <a
                  href={`mailto:${copy.contact.email}`}
                  className="contact-email"
                >
                  {copy.contact.email}
                </a>
                <div className="mt-7">
                  <a href={`mailto:${copy.contact.email}`} className="btn-primary">
                    {t(copy.hero.cta, lang)}
                  </a>
                </div>
              </div>
              <div>
                <p className="contact-label">
                  {t(copy.contact.profilesLabel, lang)}
                </p>
                <ul className="profile-links">
                  {copy.contact.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        {t(link.label, lang)} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm text-[var(--muted)]">{t(copy.footer.note, lang)}</p>
          <LanguageSwitcher lang={lang} />
        </div>
      </footer>
    </div>
  );
}
