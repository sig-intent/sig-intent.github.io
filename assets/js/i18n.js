/* SIGINTENT — minimal i18n
   Usage: <element data-i18n="key.path">fallback</element>
   Toggle: button.lang-toggle  |  persisted in localStorage("lang")
*/

const DICT = {
  en: {
    nav: {
      services: "Engagements",
      approach: "Approach",
      about: "About",
      writing: "Writing",
      contact: "Contact",
    },
    cta: {
      book: "Book an intro call",
      how: "How I work",
      talk: "Let's talk",
      learn: "Read the full story",
    },
    home: {
      hero_eyebrow: "Fractional CTO · Cloud · AI · Architecture",
      hero_h1: "Most technology decisions are framed wrong before they're answered.",
      hero_lead: "For founders, CTOs and executive teams facing the cloud, AI and architecture bets you can't easily undo — I help you reframe the decision, then make the call.",

      strip_1_label: "Experience",
      strip_1_text: "Two decades across enterprise, consulting and startups.",
      strip_2_label: "Range",
      strip_2_text: "Architect-grade depth, executive-level perspective.",
      strip_3_label: "Mode",
      strip_3_text: "Fractional, advisory or project-based engagements.",

      services_eyebrow: "Engagements",
      services_h2: "Selective engagements where deep technical judgment changes the outcome.",
      services_lead: "I work with a small number of clients at a time, scoped around the decision that matters — not billable hours. And, unlike advisors who stop at the deck, I can stay to help carry the strategy into delivery.",

      svc1_title: "Fractional & Interim CTO",
      svc1_desc: "Executive technology leadership without a full-time hire — for startups, scale-ups and mid-market companies in transition.",
      svc1_b1: "Technology vision and roadmap",
      svc1_b2: "Engineering org design and hiring",
      svc1_b3: "Board and investor communication",
      svc1_b4: "Hands-on architecture when the team needs it",

      svc2_title: "Architecture Review",
      svc2_desc: "A focused diagnosis of where you are, where you should be, and the few moves that compound. Cloud, software architecture, distributed systems.",
      svc2_b1: "Current-state assessment and risk map",
      svc2_b2: "Target architecture and migration path",
      svc2_b3: "Cost, performance and reliability tradeoffs",
      svc2_b4: "Optional execution support post-review",

      svc3_title: "AI Strategy Sprint",
      svc3_desc: "A short, intensive engagement to identify where AI actually creates value — and how to ship it without burning a year on POCs.",
      svc3_b1: "Applied AI opportunity mapping",
      svc3_b2: "Build vs. buy and vendor strategy",
      svc3_b3: "LLM and agentic system architecture",
      svc3_b4: "Implementation oversight if needed",

      svc4_title: "Advisory Retainer",
      svc4_desc: "Ongoing access to strategic technology judgment. A standing call cadence, async input on hard calls, and a second pair of eyes on the decisions that matter.",
      svc4_b1: "Monthly cadence and async access",
      svc4_b2: "Decision support on hard tradeoffs",
      svc4_b3: "Architecture and hiring sounding board",
      svc4_b4: "Stakeholder and board navigation",

      why_eyebrow: "Why a generalist",
      why_h2: "In the age of AI, judgment is the bottleneck.",
      why_lead: "AI can generate any answer in seconds. That makes the answer cheap — and the question expensive. The bottleneck has moved upstream: knowing which problem to solve, which tradeoffs are real, and where a decision will compound. That's a judgment problem, not a tooling problem. Generalists who move fluently between architecture, product, strategy and operations are the ones best placed to make those calls — because the right answer rarely lives inside a single domain.",
      why_c1: "Fluent across architecture, product, strategy and org design.",
      why_c2: "Two decades of pattern recognition across enterprise, consulting and startups.",
      why_c3: "Strong opinions on what to do next; weak attachment to any specific stack or vendor.",

      approach_eyebrow: "Approach",
      approach_h2: "How I work.",
      approach_lead: "Most engagements follow the same rhythm — sharp listening before strong opinions.",

      step1_t: "Diagnose",
      step1_d: "Context first. I spend time with founders, engineers and stakeholders to understand the real problem — not just the symptoms in the brief.",
      step2_t: "Reframe",
      step2_d: "Most decisions are framed wrong before they're answered. I rewrite them in terms that make tradeoffs visible and the few choices that actually matter obvious.",
      step3_t: "Commit",
      step3_d: "Concrete recommendations and a clear path forward — written down, defensible, tied to your business reality. Then execution support when you need it.",

      clients_eyebrow: "Selected experience",
      clients_h2: "Companies and clients.",

      about_eyebrow: "About",
      about_h2: "A polymathic technologist with real depth.",
      about_lead: "I'm Antonio Elena. I work at the intersection of technology, strategy and systems thinking. Over the past two decades I've worked across enterprise, consulting and startups as an architect, engineering leader and CTO — designing systems, shaping strategy and helping organizations modernize at scale.",
      about_p1: "My core domains are AI, cloud (with a strong PaaS and serverless bias), software architecture and modern software engineering. But my work increasingly sits one level above: connecting architecture decisions with business strategy, operating models and long-term technology bets.",
      about_p2: "I'm a generalist by design — combining deep technical expertise with cross-domain transfer, moving between architecture, product, strategy and organizational design. This lets me work both hands-on and at executive level, depending on what the situation requires.",
      about_p3: "I'm currently CTO of an AI-driven energy startup, and I take on a small number of selective advisory engagements alongside that.",

      cred_h: "Background",
      cred_1: "Currently CTO at BEAI Energy — AI-driven energy startup",
      cred_2: "Previously Global Head of Architecture & Technology at SGS, reporting to the Group CIO",
      cred_3: "Past clients include KPMG, Aviva, Maersk, Experian, Equifax, Siemens and PwC",
      cred_4: "Digital MBA for Technology Leaders — CTO Academy",
      cred_5: "Business Strategy & Financial Performance — INSEAD",
      cred_6: "Master in Data Engineering — datahack school",
      cred_7: "English · Spanish (native) · Italian (working)",

      writing_eyebrow: "Writing",
      writing_h2: "Notes on technology, architecture and strategy.",
      writing_lead: "Selected essays and pieces. The full archive lives on GitHub.",
      writing_view_all: "View the full archive on GitHub",

      contact_eyebrow: "Contact",
      contact_h2: "Let's talk.",
      contact_lead: "The fastest way to reach me is by email. If there's a fit, we'll set up a 30-minute intro call.",
      contact_h_email: "Email",
      contact_h_linkedin: "LinkedIn",
      contact_h_github: "GitHub",
      contact_h_location: "Location",
      contact_loc: "Madrid, Spain — working internationally",

      closing_h2: "Have a decision to make? Let's talk.",
      closing_lead: "A 30-minute intro call, no obligation, to see if there's a fit.",
    },
    footer: {
      tagline: "Independent technology advisory — fractional CTO, cloud, AI and architecture.",
      h_nav: "Navigate",
      h_contact: "Contact",
      legal: "© 2026 SIGINTENT · Antonio Elena. All rights reserved.",
      built: "Made in Madrid.",
    },
  },

  es: {
    nav: {
      services: "Cómo trabajo",
      approach: "Enfoque y approach",
      about: "Sobre mí",
      writing: "Artículos y posts",
      contact: "Contacto",
    },
    cta: {
      book: "",
      how: "Cómo trabajo",
      talk: "Hablemos",
      learn: "La Versión Completa",
    },
    home: {
      hero_eyebrow: "CTO Fraccional · Cloud · IA · Arquitectura",
      hero_h1: "La mayoría de las decisiones tecnológicas están mal planteadas antes de empezar a ser respondidas.",
      hero_lead: "Para fundadores, CTOs y equipos directivos que se enfrentan a retos y decisiones estratégicos en cloud, IA y arquitectura que no se deshacen fácilmente / te ayudo a enfocar o replantear y tomar la decisión correcta.",

      strip_1_label: "Experiencia",
      strip_1_text: "Más de dos décadas en grandes empresas multinacionales, consultoría y startups.",
      strip_2_label: "Rango",
      strip_2_text: "Profundidad de arquitecto, fuerte base técnica, curtido, y perspectiva de ejecutivo.",
      strip_3_label: "Modalidad",
      strip_3_text: "Fraccional, advisory, bolsa de horas o proyectos cerrados.",

      services_eyebrow: "¿Cómo trabajaremos?",
      services_h2: "Colaboraciones selectivas donde el criterio técnico marca la diferencia.",
      services_lead: "Trabajo con un número reducido de clientes a la vez, alrededor de la decisión que importa / no de horas facturables. Y, a diferencia de los asesores que acaban en el humo y la presentación, no solo entenderé tu caso para darte estrategia, diagnosis o prescripción, puedo validate el approach con MVP o v1.0 o liderar la ejecución hasta la entrega con tu proveedor de confianza. Lo hablamos y vemos lo mejor.",

      svc1_title: "CTO Fraccional o Interim",
      svc1_desc: "Liderazgo tecnológico ejecutivo sin necesidad de contratar a tiempo completo — para startups, scale-ups y empresas que no necesitan este rol o están en transición.",
      svc1_b1: "Visión y hoja de ruta tecnológica",
      svc1_b2: "Diseño organizativo y contratación",
      svc1_b3: "Comunicación con consejo e inversores",
      svc1_b4: "Arquitectura práctica cuando el equipo lo necesita",

      svc2_title: "Revisión y Advisory de Arquitectura",
      svc2_desc: "Un diagnóstico enfocado de dónde estás, dónde deberías estar y los pocos movimientos que generan ventaja compuesta. Cloud, arquitectura de software, sistemas distribuidos.",
      svc2_b1: "Evaluación del estado actual y mapa de riesgos",
      svc2_b2: "Arquitectura objetivo y plan de migración",
      svc2_b3: "Equilibrio entre coste, rendimiento y fiabilidad",
      svc2_b4: "Apoyo opcional en la ejecución posterior",

      svc3_title: "Sprint de Estrategia IA",
      svc3_desc: "Un compromiso corto e intensivo para identificar dónde la IA realmente aporta valor — y cómo ponerla en producción sin quemar un año en pruebas de concepto.",
      svc3_b1: "Mapeo de oportunidades de IA aplicada",
      svc3_b2: "Estrategia build vs. buy y selección de proveedores",
      svc3_b3: "Arquitectura de sistemas LLM y agénticos",
      svc3_b4: "Supervisión de la implementación si hace falta",

      svc4_title: "Asesoría Recurrente",
      svc4_desc: "Acceso continuo a criterio tecnológico estratégico. Cadencia regular de llamadas, input asíncrono sobre decisiones difíciles y un segundo par de ojos sobre lo que importa.",
      svc4_b1: "Cadencia mensual y acceso asíncrono",
      svc4_b2: "Apoyo en decisiones de tradeoffs complejos",
      svc4_b3: "Caja de resonancia para arquitectura y contratación",
      svc4_b4: "Navegación con stakeholders y consejo",

      why_eyebrow: "Por qué un perfil generalista",
      why_h2: "En la era de la IA, el cuello de botella es el criterio.",
      why_lead: "La IA puede generar cualquier respuesta en segundos. Eso abarata la respuesta pero puede enmascarar la pregunta correcta. El cuello de botella se ha movido hacia arriba: saber qué problema resolver, qué tradeoffs son reales y dónde las consecuencias de una decisión se verán solo con el paso del tiempo. Eso es un problema de criterio, no de herramientas. Los perfiles generalistas que se mueven con fluidez entre arquitectura, código, infraestructura, producto, estrategia y operaciones son los mejor posicionados para tomar esas decisiones porque la respuesta correcta rara vez vive dentro de un único dominio.",
      why_c1: "Fluidez entre arquitectura, código, infraestructura,producto, estrategia y diseño organizativo.",
      why_c2: "Dos décadas de reconocimiento de patrones en gran empresa, como consultor autónomo y a sueldo y startups.",
      why_c3: "Opiniones fuertes sobre qué hacer; apego débil a cualquier stack o proveedor concreto.",

      approach_eyebrow: "Enfoque",
      approach_h2: "Cómo trabajo.",
      approach_lead: "La mayoría de los compromisos siguen el mismo ritmo, escucha activa antes de dar diagnóstico.",

      step1_t: "Diagnosticar",
      step1_d: "Primero el contexto. Dedico tiempo a fundadores, ingenieros y stakeholders para entender el problema real, no solo los síntomas que aparecen en el brief. Hay que ir más allá.",
      step2_t: "Replantear",
      step2_d: "La mayoría de las decisiones están mal planteadas antes de ser respondidas. Las reescribo en términos que hagan visibles los tradeoffs y las pocas elecciones que realmente importan.",
      step3_t: "Comprometerse",
      step3_d: "Recomendaciones concretas y un camino claro a seguir — por escrito, defendible, atado a la realidad del negocio. Y soporte de ejecución si hace falta.",

      clients_eyebrow: "Experiencia seleccionada",
      clients_h2: "Empresas y clientes.",

      about_eyebrow: "Sobre mí",
      about_h2: "Un tecnólogo polimático con profundidad real.",
      about_lead: "Soy Antonio Elena. Trabajo en la intersección de la tecnología, la estrategia y el pensamiento sistémico. Durante las dos últimas décadas he trabajado en entornos corporativos, de consultoría y startups como arquitecto, líder de ingeniería y CTO — diseñando sistemas, dando forma a la estrategia y ayudando a organizaciones a modernizarse a escala.",
      about_p1: "Mis dominios principales son IA, cloud (con un fuerte sesgo hacia PaaS y serverless), arquitectura de software e ingeniería de software modernos. Pero mi trabajo se sitúa cada vez más un nivel por encima: conectando decisiones de arquitectura con estrategia de negocio, modelos operativos y apuestas tecnológicas estratégicas.",
      about_p2: "Soy generalista combinando profundidad técnica con transferencia entre dominios, moviéndome entre arquitectura, producto, estrategia y diseño organizativo con distintas metodologías. Esto me permite trabajar tanto en lo práctico como a nivel ejecutivo, según lo requiera la situación.",
      about_p3: "Actualmente soy CTO de una startup de IA en el sector energético, y compagino ese rol con un número reducido de asesorías selectivas.",

      cred_h: "Trayectoria",
      cred_1: "Actualmente CTO en BEAI Energy — startup de IA en sector energético",
      cred_2: "Antes Global Head of Architecture & Technology en SGS, reportando al Group CIO",
      cred_3: "Clientes pasados: KPMG, Aviva, Maersk, Experian, Equifax, Siemens, PwC",
      cred_4: "Digital MBA for Technology Leaders — CTO Academy",
      cred_5: "Business Strategy & Financial Performance — INSEAD",
      cred_6: "Máster en Data Engineering — datahack school",
      cred_7: "Inglés · Español (nativo) · Italiano (profesional)",

      writing_eyebrow: "Escritos",
      writing_h2: "Notas sobre tecnología, arquitectura y estrategia.",
      writing_lead: "Ensayos y piezas seleccionadas. El archivo completo vive en GitHub.",
      writing_view_all: "Ver el archivo completo en GitHub",

      contact_eyebrow: "Contacto",
      contact_h2: "Hablemos.",
      contact_lead: "La forma más rápida de contactar conmigo es por email. Si hay encaje, agendamos una llamada de 30 minutos.",
      contact_h_email: "Email",
      contact_h_linkedin: "LinkedIn",
      contact_h_github: "GitHub",
      contact_h_location: "Ubicación",
      contact_loc: "Madrid, España — trabajando internacionalmente",

      closing_h2: "¿Tienes una decisión que tomar? Hablemos.",
      closing_lead: "Una llamada de 30 minutos, sin compromiso, para ver si hay encaje.",
    },
    footer: {
      tagline: "Asesoría tecnológica independiente — CTO fraccional, cloud, IA y arquitectura.",
      h_nav: "Navegar",
      h_contact: "Contacto",
      legal: "© 2026 SIGINTENT · Antonio Elena. Todos los derechos reservados.",
      built: "Hecho en Madrid.",
    },
  },
};

function get(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
}

function applyLang(lang) {
  const dict = DICT[lang] || DICT.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = get(dict, key);
    if (typeof val === "string") el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const spec = el.getAttribute("data-i18n-attr");
    spec.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const val = get(dict, key);
      if (typeof val === "string") el.setAttribute(attr, val);
    });
  });

  document.querySelectorAll("[data-lang-opt]").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-lang-opt") === lang);
  });

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function initI18n() {
  let lang = "en";
  try {
    const saved = localStorage.getItem("lang");
    if (saved && DICT[saved]) lang = saved;
    else if ((navigator.language || "").toLowerCase().startsWith("es")) lang = "es";
  } catch (e) {}

  applyLang(lang);

  document.querySelectorAll("[data-lang-opt]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      applyLang(el.getAttribute("data-lang-opt"));
    });
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
