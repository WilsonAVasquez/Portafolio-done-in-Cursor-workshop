export type Lang = "es" | "en";

export function resolveLang(value?: string | string[] | null): Lang {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw === "en" ? "en" : "es";
}

export function langHref(lang: Lang): string {
  return `/?lang=${lang}`;
}

const translations = {
  meta: {
    title: {
      es: "Wilson A. Vásquez, PhD | Profesor Titular, Escuela Politécnica Nacional",
      en: "Wilson A. Vásquez, PhD | Full Professor, National Polytechnic School",
    },
    description: {
      es: "Portafolio académico de Wilson A. Vásquez, PhD: sistemas eléctricos de potencia, confiabilidad de activos, generación distribuida y docencia en la Escuela Politécnica Nacional.",
      en: "Academic portfolio of Wilson A. Vásquez, PhD: electrical power systems, asset reliability, distributed generation, and teaching at Escuela Politécnica Nacional.",
    },
  },
  nav: {
    about: { es: "Sobre mi trabajo", en: "About my work" },
    research: { es: "Investigación", en: "Research" },
    publications: { es: "Publicaciones", en: "Publications" },
    teaching: { es: "Docencia", en: "Teaching" },
    contact: { es: "Contacto", en: "Contact" },
    langLabel: { es: "Idioma", en: "Language" },
    english: { es: "English", en: "English" },
    spanish: { es: "Español", en: "Español" },
  },
  hero: {
    name: { es: "Wilson A. Vásquez, PhD", en: "Wilson A. Vásquez, PhD" },
    role: {
      es: "Profesor Titular, Departamento de Energía Eléctrica, Escuela Politécnica Nacional",
      en: "Full Professor, Department of Electrical Energy, Escuela Politécnica Nacional",
    },
    focus: {
      es: "Sistemas eléctricos de potencia: confiabilidad, mantenimiento y retiro de activos envejecidos, y generación distribuida.",
      en: "Electrical power systems: reliability, maintenance and retirement of ageing assets, and distributed generation.",
    },
    tagline: {
      es: "Modelo fallas, priorizo mantenimiento y ayudo a planificar el retiro de equipos eléctricos de potencia.",
      en: "I model failures, prioritize maintenance, and help plan the retirement of power system equipment.",
    },
    cta: { es: "Contáctame", en: "Contact me" },
    photoAlt: {
      es: "Placeholder elegante para el retrato de Wilson A. Vásquez, PhD. Reemplazar con una fotografía profesional.",
      en: "Elegant placeholder for the portrait of Wilson A. Vásquez, PhD. Replace with a professional photograph.",
    },
    photoCredit: {
      es: "Foto: placeholder — reemplazar con retrato propio.",
      en: "Photo: placeholder — replace with your own portrait.",
    },
  },
  about: {
    title: { es: "Sobre mi trabajo", en: "About my work" },
    lead: {
      es: "Trabajo en la frontera entre la ingeniería de potencia, la regulación y la enseñanza universitaria.",
      en: "I work at the intersection of power engineering, regulation, and university teaching.",
    },
    body: {
      es: "Soy un profesional en sistemas eléctricos de potencia, con más de diez años de experiencia en industria, investigación y docencia. En ARCONEL participé en el desarrollo de la regulación para generación distribuida de autoconsumo (Regulación Nro. ARCERNNR-008/23). En la University of Birmingham desarrollé modelos matemáticos de falla de equipos envejecidos y métodos para priorizar su mantenimiento y retiro. Hoy enseño Alto Voltaje y Electromagnetismo en la Escuela Politécnica Nacional.",
      en: "I am a power systems professional with more than ten years of experience in industry, research, and teaching. At ARCONEL I contributed to the regulatory framework for distributed generation for self-consumption (Regulation No. ARCERNNR-008/23). At the University of Birmingham I developed mathematical failure models for ageing equipment and methods to prioritize maintenance and retirement. Today I teach High Voltage and Electromagnetism at Escuela Politécnica Nacional.",
    },
  },
  research: {
    title: { es: "Líneas de investigación", en: "Research themes" },
    intro: {
      es: "Mis proyectos conectan modelos de falla, decisión bajo riesgo y la operación real de redes eléctricas.",
      en: "My projects connect failure models, risk-based decisions, and the real operation of power networks.",
    },
    items: [
      {
        title: {
          es: "Confiabilidad de activos envejecidos",
          en: "Reliability of ageing assets",
        },
        body: {
          es: "Modelos de falla reparable y de fin de vida para cables subterráneos, conductores aéreos y transformadores, considerando carga, clima y edad aparente.",
          en: "Repairable and end-of-life failure models for underground cables, overhead conductors, and transformers, accounting for loading, weather, and apparent age.",
        },
      },
      {
        title: {
          es: "Mantenimiento y retiro basados en riesgo",
          en: "Risk-based maintenance and retirement",
        },
        body: {
          es: "Métodos para priorizar mantenimiento y reemplazo de equipos cuando el presupuesto es limitado y el riesgo operativo importa.",
          en: "Methods to prioritize maintenance and replacement when budgets are limited and operational risk matters.",
        },
      },
      {
        title: {
          es: "Generación distribuida y regulación",
          en: "Distributed generation and regulation",
        },
        body: {
          es: "Evaluación técnica y regulatoria del autoconsumo, factor de potencia y el impacto de la generación distribuida en redes de distribución.",
          en: "Technical and regulatory assessment of self-consumption, power factor, and the impact of distributed generation on distribution networks.",
        },
      },
      {
        title: {
          es: "Refuerzo de transmisión y riesgo sísmico",
          en: "Transmission reinforcement and seismic risk",
        },
        body: {
          es: "Línea de trabajo de mi doctorado: retiro de activos envejecidos y refuerzo de sistemas de transmisión considerando riesgo sísmico.",
          en: "A theme from my PhD: retirement of ageing assets and reinforcement of transmission systems under seismic risk.",
        },
      },
    ],
  },
  publications: {
    title: { es: "Publicaciones", en: "Publications" },
    intro: {
      es: "Selección de artículos y trabajos recientes. La lista completa está en Google Scholar.",
      en: "A selection of recent articles and papers. The full list is on Google Scholar.",
    },
    scholarCta: {
      es: "Ver perfil en Google Scholar",
      en: "View Google Scholar profile",
    },
    venueLabel: { es: "Medio", en: "Venue" },
    yearLabel: { es: "Año", en: "Year" },
    items: [
      {
        title: {
          es: "Evaluación del Factor de Potencia en Usuarios con Equipos de Generación para Autoabastecimiento",
          en: "Power Factor Assessment for Users with Self-Supply Generation Equipment",
        },
        venue: {
          es: "Revista Técnica energía",
          en: "Revista Técnica energía",
        },
        year: "2024",
        href: "https://doi.org/10.37116/revistaenergia.v21.n1.2024.655",
      },
      {
        title: {
          es: "A Study of Repairable Failure Models of Aging Underground Power Distribution Cables",
          en: "A Study of Repairable Failure Models of Aging Underground Power Distribution Cables",
        },
        venue: {
          es: "IEEE PES ISGT Europe",
          en: "IEEE PES ISGT Europe",
        },
        year: "2021",
        href: "https://ieeexplore.ieee.org/abstract/document/9639956",
      },
      {
        title: {
          es: "Risk-based approach for power transformer replacement considering temperature, apparent age, and expected capacity",
          en: "Risk-based approach for power transformer replacement considering temperature, apparent age, and expected capacity",
        },
        venue: {
          es: "IET Generation, Transmission & Distribution",
          en: "IET Generation, Transmission & Distribution",
        },
        year: "2020",
        href: "https://doi.org/10.1049/iet-gtd.2020.1006",
      },
      {
        title: {
          es: "Prioritization of Aging Underground Power Distribution Cables for Maintenance Activities",
          en: "Prioritization of Aging Underground Power Distribution Cables for Maintenance Activities",
        },
        venue: {
          es: "IEEE PMAPS",
          en: "IEEE PMAPS",
        },
        year: "2020",
        href: "https://doi.org/10.1109/PMAPS47429.2020.9183566",
      },
      {
        title: {
          es: "Methodology for Overhead Conductor Replacement Considering Operational Stress and Aging Characteristics",
          en: "Methodology for Overhead Conductor Replacement Considering Operational Stress and Aging Characteristics",
        },
        venue: {
          es: "IEEE PES General Meeting",
          en: "IEEE PES General Meeting",
        },
        year: "2018",
        href: "https://doi.org/10.1109/PESGM.2018.8586012",
      },
      {
        title: {
          es: "Maintenance and retirement of ageing power system assets and reinforcement of transmission systems with seismic risk (tesis doctoral)",
          en: "Maintenance and retirement of ageing power system assets and reinforcement of transmission systems with seismic risk (PhD thesis)",
        },
        venue: {
          es: "University of Birmingham",
          en: "University of Birmingham",
        },
        year: "2022",
        href: "https://etheses.bham.ac.uk/id/eprint/12627/",
      },
    ],
  },
  teaching: {
    title: { es: "Docencia", en: "Teaching" },
    intro: {
      es: "Imparto cursos de pregrado y posgrado en ingeniería eléctrica, con énfasis en alto voltaje, máquinas y operación de sistemas.",
      en: "I teach undergraduate and graduate courses in electrical engineering, with emphasis on high voltage, machines, and power system operation.",
    },
    currentLabel: { es: "Actual", en: "Current" },
    pastLabel: { es: "Anterior", en: "Previous" },
    courses: [
      {
        name: { es: "Alto Voltaje", en: "High Voltage" },
        detail: {
          es: "Escuela Politécnica Nacional — Profesor Titular",
          en: "Escuela Politécnica Nacional — Full Professor",
        },
        status: "current" as const,
      },
      {
        name: { es: "Electromagnetismo", en: "Electromagnetism" },
        detail: {
          es: "Escuela Politécnica Nacional — Profesor Titular",
          en: "Escuela Politécnica Nacional — Full Professor",
        },
        status: "current" as const,
      },
      {
        name: {
          es: "Transformadores y Máquinas de Corriente Continua",
          en: "Transformers and Direct Current Machines",
        },
        detail: {
          es: "Universidad Politécnica Salesiana",
          en: "Universidad Politécnica Salesiana",
        },
        status: "past" as const,
      },
      {
        name: {
          es: "Operación y Control de Sistemas Eléctricos de Potencia",
          en: "Power System Operation and Control",
        },
        detail: {
          es: "Universidad Politécnica Salesiana",
          en: "Universidad Politécnica Salesiana",
        },
        status: "past" as const,
      },
      {
        name: {
          es: "Equipo Eléctrico de Transmisión y Distribución",
          en: "Transmission and Distribution Equipment",
        },
        detail: {
          es: "Universidad Técnica de Cotopaxi — Maestría en Electricidad",
          en: "Universidad Técnica de Cotopaxi — Master's in Electrical Power Systems",
        },
        status: "past" as const,
      },
      {
        name: {
          es: "Matemáticas de Ingeniería y Probabilidad",
          en: "Engineering Mathematics and Probability",
        },
        detail: {
          es: "University of Birmingham y Escuela Politécnica Nacional",
          en: "University of Birmingham and Escuela Politécnica Nacional",
        },
        status: "past" as const,
      },
    ],
  },
  contact: {
    title: { es: "Contacto", en: "Contact" },
    intro: {
      es: "Escribe si eres estudiante, colega, periodista o posible colaborador. Respondo con gusto.",
      en: "Write if you are a student, colleague, journalist, or potential collaborator. I am happy to hear from you.",
    },
    emailLabel: { es: "Correo", en: "Email" },
    profilesLabel: { es: "Perfiles", en: "Profiles" },
    email: "wilson.vasquez@epn.edu.ec",
    links: [
      {
        label: { es: "Google Scholar", en: "Google Scholar" },
        href: "https://scholar.google.com/citations?user=LLnZTAsAAAAJ&hl=en",
      },
      {
        label: { es: "LinkedIn", en: "LinkedIn" },
        href: "https://www.linkedin.com/in/wilson-a-vasquez-phd/",
      },
      {
        label: { es: "GitHub", en: "GitHub" },
        href: "https://github.com/WilsonAVasquez",
      },
    ],
  },
  footer: {
    note: {
      es: "Portafolio académico de Wilson A. Vásquez, PhD · Quito, Ecuador",
      en: "Academic portfolio of Wilson A. Vásquez, PhD · Quito, Ecuador",
    },
  },
} as const;

export type Translations = typeof translations;

export function t<T extends Record<Lang, string>>(value: T, lang: Lang): string {
  return value[lang];
}

export { translations };
