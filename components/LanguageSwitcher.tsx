import { langHref, type Lang, translations, t } from "@/lib/i18n";

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const options: { code: Lang; flag: string; label: string }[] = [
    { code: "en", flag: "🇺🇸", label: t(translations.nav.english, lang) },
    { code: "es", flag: "🇪🇸", label: t(translations.nav.spanish, lang) },
  ];

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t(translations.nav.langLabel, lang)}
    >
      {options.map((option, index) => {
        const active = option.code === lang;
        return (
          <span key={option.code} className="contents">
            {index > 0 ? (
              <span className="lang-switch__sep" aria-hidden>
                |
              </span>
            ) : null}
            <a
              href={langHref(option.code)}
              className={`lang-switch__option${active ? " is-active" : ""}`}
              aria-current={active ? "true" : undefined}
              hrefLang={option.code}
              lang={option.code}
            >
              <span aria-hidden>{option.flag}</span> {option.label}
            </a>
          </span>
        );
      })}
    </div>
  );
}
