import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { resolveLang, translations, t } from "@/lib/i18n";

type HomeProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const lang = resolveLang(params.lang);
  const copy = translations;

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-tight text-[var(--ink)] sm:text-base"
          >
            {t(copy.hero.name, lang)}
          </a>
          <nav
            className="hidden items-center gap-5 text-sm text-[var(--ink-soft)] md:flex"
            aria-label={t(copy.nav.primary, lang)}
          >
            <a href={`#about`} className="hover:text-[var(--ink)]">
              {t(copy.nav.about, lang)}
            </a>
            <a href={`#research`} className="hover:text-[var(--ink)]">
              {t(copy.nav.research, lang)}
            </a>
            <a href={`#publications`} className="hover:text-[var(--ink)]">
              {t(copy.nav.publications, lang)}
            </a>
            <a href={`#teaching`} className="hover:text-[var(--ink)]">
              {t(copy.nav.teaching, lang)}
            </a>
            <a href={`#contact`} className="hover:text-[var(--ink)]">
              {t(copy.nav.contact, lang)}
            </a>
          </nav>
          <LanguageSwitcher lang={lang} />
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-name">
          <div className="hero-media motion-hero-media">
            <Image
              src="/wilson-vasquez.png"
              alt={t(copy.hero.photoAlt, lang)}
              fill
              priority
              sizes="(max-width: 959px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="hero-copy">
            <h1
              id="hero-name"
              className="motion-fade-up font-display text-[2.35rem] leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-[3.5rem]"
            >
              {t(copy.hero.name, lang)}
            </h1>
            <p className="motion-fade-up motion-fade-up-delay mt-4 max-w-xl text-base font-medium leading-snug text-[var(--teal)] sm:text-lg">
              {t(copy.hero.role, lang)}
            </p>
            <p className="motion-fade-up motion-fade-up-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
              {t(copy.hero.focus, lang)}
            </p>
            <p className="motion-fade-up motion-fade-up-delay-2 mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              {t(copy.hero.tagline, lang)}
            </p>
            <div className="motion-fade-up motion-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                {t(copy.hero.cta, lang)}
              </a>
              <a
                href={copy.contact.links[0].href}
                className="btn-secondary text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(copy.publications.scholarCta, lang)}
              </a>
            </div>
            <p className="mt-6 text-xs text-[var(--muted)]">
              {t(copy.hero.photoCredit, lang)}
            </p>
          </div>
        </section>

        <section
          id="about"
          className="section border-t border-[var(--line)]"
          aria-labelledby="about-title"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="section-kicker">{t(copy.nav.about, lang)}</p>
            <h2
              id="about-title"
              className="font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              {t(copy.about.title, lang)}
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-[var(--teal)]">
              {t(copy.about.lead, lang)}
            </p>
            <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              {t(copy.about.body, lang)}
            </p>
          </div>
        </section>

        <section
          id="research"
          className="section border-t border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)]"
          aria-labelledby="research-title"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="section-kicker">{t(copy.nav.research, lang)}</p>
            <h2
              id="research-title"
              className="max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              {t(copy.research.title, lang)}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              {t(copy.research.intro, lang)}
            </p>
            <div className="research-grid mt-10">
              {copy.research.items.map((item) => (
                <article key={t(item.title, "en")} className="research-card">
                  <h3 className="font-display text-xl text-[var(--ink)]">
                    {t(item.title, lang)}
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--ink-soft)]">
                    {t(item.body, lang)}
                  </p>
                </article>
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
            <p className="section-kicker">{t(copy.nav.publications, lang)}</p>
            <h2
              id="publications-title"
              className="font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              {t(copy.publications.title, lang)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              {t(copy.publications.intro, lang)}
            </p>
            <ul className="mt-8">
              {copy.publications.items.map((pub) => (
                <li key={pub.href} className="pub-item">
                  <span className="font-display text-lg text-[var(--brass)]">
                    {pub.year}
                  </span>
                  <div>
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold leading-snug text-[var(--ink)] hover:text-[var(--teal)] sm:text-lg"
                    >
                      {t(pub.title, lang)}
                    </a>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      <span className="sr-only">
                        {t(copy.publications.venueLabel, lang)}:{" "}
                      </span>
                      {t(pub.venue, lang)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={copy.contact.links[0].href}
              className="btn-secondary mt-8 inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(copy.publications.scholarCta, lang)} →
            </a>
          </div>
        </section>

        <section
          id="teaching"
          className="section border-t border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)]"
          aria-labelledby="teaching-title"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="section-kicker">{t(copy.nav.teaching, lang)}</p>
            <h2
              id="teaching-title"
              className="font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              {t(copy.teaching.title, lang)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              {t(copy.teaching.intro, lang)}
            </p>
            <ul className="mt-8">
              {copy.teaching.courses.map((course) => (
                <li
                  key={`${t(course.name, "en")}-${course.status}`}
                  className="course-row"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brass)]">
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
          id="contact"
          className="section border-t border-[var(--line)]"
          aria-labelledby="contact-title"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="section-kicker">{t(copy.nav.contact, lang)}</p>
            <h2
              id="contact-title"
              className="font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              {t(copy.contact.title, lang)}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              {t(copy.contact.intro, lang)}
            </p>
            <div className="contact-panel mt-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brass)]">
                  {t(copy.contact.emailLabel, lang)}
                </p>
                <a
                  href={`mailto:${copy.contact.email}`}
                  className="mt-2 inline-block font-display text-2xl text-[var(--ink)] hover:text-[var(--teal)] sm:text-3xl"
                >
                  {copy.contact.email}
                </a>
                <div className="mt-6">
                  <a href={`mailto:${copy.contact.email}`} className="btn-primary">
                    {t(copy.hero.cta, lang)}
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brass)]">
                  {t(copy.contact.profilesLabel, lang)}
                </p>
                <ul className="mt-3 space-y-2">
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
