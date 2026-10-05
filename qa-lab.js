const topics = [
  {
    id: "amable",
    title: "Sé amable y natural",
    icon: "sun",
    tag: "experience",
    description: "Crea confianza desde el primer contacto.",
    intro: "Habla con cercanía, adapta el tono y evita respuestas que suenen memorizadas.",
    formula: ["Saluda con intención", "Adapta el tono", "Conversa, no recites"],
    effective: {
      title: "Cercanía clara",
      text: "La respuesta es cordial, directa y adecuada al canal.",
      call: ["Hola, quiero información.", "Claro, con gusto. ¿Qué te gustaría estudiar?"],
      chat: ["¿Me ayudan con una carrera?", "Sí. Cuéntame qué área te interesa y revisamos opciones."]
    },
    exceeds: {
      title: "Conexión genuina",
      text: "Además de orientar, reconoce el contexto de la persona.",
      call: ["Trabajo y no sé si pueda estudiar.", "Entiendo. Revisemos una opción que se ajuste a tu horario."],
      chat: ["Me da miedo no tener tiempo.", "Es válido. ¿Cómo es tu semana? Así buscamos una modalidad realista."]
    }
  },
  {
    id: "descubre",
    title: "Descubre necesidades",
    icon: "compass",
    tag: "conversion",
    description: "Pregunta para entender qué necesita la persona.",
    intro: "Explora la motivación, el contexto y las prioridades antes de recomendar una opción.",
    formula: ["Pregunta", "Profundiza", "Confirma"],
    effective: {
      title: "Preguntas útiles",
      text: "Obtiene información suficiente para orientar la conversación.",
      call: ["Quiero estudiar Administración.", "¿Qué te gustaría lograr con esa carrera?"],
      chat: ["Busco una universidad.", "¿Qué es lo más importante para ti: horario, modalidad o plan de estudios?"]
    },
    exceeds: {
      title: "Motivación conectada",
      text: "Relaciona las respuestas y valida la necesidad principal.",
      call: ["Quiero crecer en mi trabajo.", "Entonces buscas una opción que puedas aplicar mientras trabajas, ¿correcto?"],
      chat: ["Tengo un negocio propio.", "¿Quieres ordenar mejor la operación o prepararte para hacerlo crecer?"]
    }
  },
  {
    id: "escucha",
    title: "Escucha activa",
    icon: "ear",
    tag: "experience",
    description: "Retoma lo importante y demuestra comprensión.",
    intro: "Escuchar es usar lo que la persona dijo para construir la siguiente respuesta.",
    formula: ["Identifica la idea", "Reconoce", "Conecta"],
    effective: {
      title: "Respuesta conectada",
      text: "Retoma un dato relevante antes de continuar.",
      call: ["Trabajo de lunes a sábado.", "Con ese horario, revisemos modalidades que no te obliguen a asistir diario."],
      chat: ["Ya tengo experiencia laboral.", "Esa experiencia puede ayudarte a aprovechar mejor la carrera."]
    },
    exceeds: {
      title: "Comprensión precisa",
      text: "Reconoce emoción, contexto y objetivo sin asumir.",
      call: ["Llevo años haciendo lo mismo.", "Suena a que buscas un cambio real, no solo un título. ¿Qué puesto te interesa?"],
      chat: ["Mi familia me anima, pero tengo dudas.", "Tienes apoyo y también inquietudes. ¿Cuál pesa más hoy?"]
    }
  },
  {
    id: "palabras",
    title: "Elige tus palabras",
    icon: "message",
    tag: "experience",
    description: "Comunica con claridad y enfoque en soluciones.",
    intro: "Usa lenguaje simple, positivo y específico. Explica posibilidades sin prometer de más.",
    formula: ["Simplifica", "Enfoca en opciones", "Sé preciso"],
    effective: {
      title: "Mensaje fácil de entender",
      text: "Evita tecnicismos y responde de forma concreta.",
      call: ["¿Puedo pagar después?", "Podemos revisar las fechas y opciones de pago disponibles."],
      chat: ["No puedo ir entre semana.", "Tenemos alternativas con mayor flexibilidad. Te explico cómo funcionan."]
    },
    exceeds: {
      title: "Claridad que tranquiliza",
      text: "Reformula la preocupación y ofrece un camino verificable.",
      call: ["No sé si sea el momento.", "Podemos revisar tiempo y presupuesto para que decidas con información clara."],
      chat: ["Me preocupa no continuar.", "Revisemos la carga y el acompañamiento antes de que tomes una decisión."]
    }
  },
  {
    id: "resolucion",
    title: "Resolución",
    icon: "check-circle",
    tag: "conversion",
    description: "Resuelve la duda y orienta el siguiente paso.",
    intro: "Una buena respuesta cierra la duda actual y deja claro qué puede hacer la persona después.",
    formula: ["Responde", "Verifica", "Orienta"],
    effective: {
      title: "Solución completa",
      text: "Responde de manera directa y propone una acción.",
      call: ["¿Cuánto dura la carrera?", "Te confirmo la duración del plan y después revisamos tu fecha de inicio."],
      chat: ["¿Qué necesito para iniciar?", "Necesitas estos documentos. Si quieres, revisamos ahora cuáles ya tienes."]
    },
    exceeds: {
      title: "Solución anticipada",
      text: "Además de resolver, previene la siguiente duda relevante.",
      call: ["Trabajo tiempo completo.", "Sí puedes estudiar. Revisemos modalidad, carga sugerida y horarios de apoyo."],
      chat: ["¿Tienen modalidad en línea?", "Sí. Te explico cómo se cursa y qué acompañamiento recibes."]
    }
  },
  {
    id: "embajador",
    title: "Embajador Talisis",
    icon: "spark",
    tag: "conversion",
    description: "Convierte atributos en beneficios relevantes.",
    intro: "Habla de la institución desde la necesidad expresada, no desde una lista de características.",
    formula: ["Escucha la meta", "Elige un atributo", "Traduce el beneficio"],
    effective: {
      title: "Beneficio relevante",
      text: "Relaciona una característica con el contexto del prospecto.",
      call: ["Quiero seguir trabajando.", "La flexibilidad te permite avanzar sin pausar tu experiencia laboral."],
      chat: ["Busco crecer en mi empleo.", "El enfoque práctico te ayuda a aplicar lo aprendido desde ahora."]
    },
    exceeds: {
      title: "Valor personalizado",
      text: "Conecta varios beneficios sin convertir la respuesta en un discurso.",
      call: ["No tengo mucho tiempo.", "Podemos combinar flexibilidad y acompañamiento para que organices un ritmo sostenible."],
      chat: ["¿Por qué elegirlos?", "Por lo que buscas, destacan la modalidad flexible y la orientación durante tu avance."]
    }
  },
  {
    id: "oferta",
    title: "Oferta efectiva",
    icon: "offer",
    tag: "conversion",
    description: "Presenta la opción correcta y facilita el avance.",
    intro: "Resume lo entendido, recomienda una alternativa y propone un siguiente paso concreto.",
    formula: ["Resume", "Recomienda", "Avanza"],
    effective: {
      title: "Recomendación con sentido",
      text: "La oferta responde a una necesidad que ya fue confirmada.",
      call: ["No quiero dejar mi negocio.", "Por tu situación, la modalidad flexible es la mejor opción. Revisemos horarios."],
      chat: ["Me interesa Administración.", "Por tu meta laboral, esta carrera encaja. ¿Quieres revisar el plan o el proceso de ingreso?"]
    },
    exceeds: {
      title: "Oferta fácil de decidir",
      text: "Compara opciones relevantes y reduce fricción para avanzar.",
      call: ["Necesito pensarlo.", "Claro. Para ayudarte, resumamos costo, tiempo y modalidad antes de cerrar."],
      chat: ["Estoy comparando opciones.", "Te comparto los tres puntos que responden a lo que buscas y agendamos seguimiento."]
    }
  },
  {
    id: "negociacion",
    title: "Negociación",
    icon: "handshake",
    tag: "conversion",
    description: "Entiende la objeción y construye alternativas.",
    intro: "No contradigas de inmediato. Aclara la resistencia, valida y explora una solución posible.",
    formula: ["Aclara", "Valida", "Propón"],
    effective: {
      title: "Objeción atendida",
      text: "Reconoce la inquietud y ofrece una alternativa pertinente.",
      call: ["Se me hace muy caro.", "Entiendo. ¿Te preocupa el pago inicial o el monto mensual?"],
      chat: ["No tengo tiempo.", "Revisemos tu semana y veamos si existe una carga que sí puedas sostener."]
    },
    exceeds: {
      title: "Acuerdo construido",
      text: "Confirma la causa real y acuerda una acción sin presionar.",
      call: ["Debo consultarlo con mi familia.", "Claro. ¿Qué información necesitan para revisarlo juntos? Te la preparo."],
      chat: ["No sé si sea para mí.", "¿La duda es por la modalidad o por el esfuerzo que requiere? Revisemos ese punto."]
    }
  },
  {
    id: "expectativas",
    title: "Manejo de expectativas",
    icon: "clock",
    tag: "experience",
    description: "Cierra con acuerdos, tiempos y canales claros.",
    intro: "Antes de terminar, confirma qué ocurrirá, quién hará cada acción y cuándo habrá seguimiento.",
    formula: ["Resume acuerdos", "Define responsable", "Confirma tiempo"],
    effective: {
      title: "Cierre sin dudas",
      text: "Indica el siguiente paso y el canal de contacto.",
      call: ["¿Qué sigue?", "Hoy te envío la información y mañana te contacto para resolver dudas."],
      chat: ["¿Dónde recibiré los datos?", "Te llegarán a este correo en unos minutos. Confírmame cuando los veas."]
    },
    exceeds: {
      title: "Seguimiento prevenido",
      text: "Confirma acuerdos y explica qué hacer si algo cambia.",
      call: ["¿Y si no puedo asistir?", "Puedes cambiar el horario desde este enlace o avisarme y lo ajustamos."],
      chat: ["¿Qué llevo a la cita?", "Necesitas estos documentos. Te enviaré la lista y un recordatorio antes de la cita."]
    }
  }
];

const scenarioBank = {
  amable: ["Me interesa estudiar, pero no sé por dónde empezar.", "Quiero estudiar Administración porque ya trabajo en una empresa.", "Hace tiempo quiero estudiar, pero siempre surge algo."],
  descubre: ["Quiero estudiar, pero no sé si sea el momento.", "Me interesa Administración porque quiero mejorar mi negocio.", "Busco una opción que se adapte a mi vida actual."],
  escucha: ["Quiero estudiar porque llevo cinco años haciendo lo mismo.", "Trabajo de lunes a sábado y no sé si pueda con el tiempo.", "Mi familia me motiva, pero tengo muchas responsabilidades."],
  palabras: ["¿Y si no puedo pagar todo junto?", "No puedo asistir entre semana, ¿qué opciones tengo?", "Me preocupa comprometerme y después no continuar."],
  resolucion: ["¿Cuánto tiempo tardaría en terminar la carrera?", "¿Puedo estudiar si trabajo de tiempo completo?", "¿Qué necesito para iniciar?"],
  embajador: ["Trabajo todo el día, por eso no sé si pueda estudiar.", "Quiero seguir trabajando mientras estudio.", "¿Por qué debería estudiar con ustedes?"],
  oferta: ["Quiero estudiar Administración, pero no quiero dejar mi negocio.", "La modalidad me interesa, pero necesito pensarlo.", "Quiero comparar opciones antes de decidir."],
  negociacion: ["Me interesa, pero se me hace muy caro.", "Necesito consultarlo con mi familia.", "No estoy seguro de que esta modalidad sea para mí."],
  expectativas: ["¿Qué sigue después de esta llamada?", "¿Por dónde me enviarán la información?", "Si no puedo asistir, ¿cómo cambio el horario?"]
};

const teamUsers = [
  { name: "Carlos Luna", email: "carlos.luna@talisis.com", role: "Supervisor" },
  { name: "Valeria Perez", email: "valeria.perez@talisis.com", role: "Supervisor" },
  { name: "Leonardo Planes", email: "leonardo.planes@talisis.com", role: "Supervisor" },
  { name: "Priscila Cantu", email: "priscila.cantu@talisis.com", role: "Especialista de RA" },
  { name: "Victoria Ledesma", email: "victoria.ledesma@talisis.com", role: "Supervisora" },
  { name: "Jesus Vallejo", email: "jesus.vallejo@talisis.com", role: "Jefe de piso" },
  { name: "Ricardo Santillana", email: "ricardo.santillana@talisis.com", role: "Account Manager" },
  { name: "Maat Arredondo", email: "maat.arredondo@talisis.com", role: "Analista de Calidad" }
];

const authUsers = [
  { ...teamUsers[0], password: "QAL-Ca9!Vx27", canSupervisor: true },
  { ...teamUsers[1], password: "QAL-Vp4#Lm82", canSupervisor: true },
  { ...teamUsers[2], password: "QAL-Lp7@Rs41", canSupervisor: true },
  { ...teamUsers[3], password: "QAL-Pc3!Nd76", canSupervisor: true },
  { ...teamUsers[4], password: "QAL-Vl8#Kq53", canSupervisor: true },
  { ...teamUsers[5], password: "QAL-Jv5@Hm94", canSupervisor: true },
  { ...teamUsers[6], password: "QAL-Rs2!Tb68", canSupervisor: true },
  { ...teamUsers[7], password: "QAL-Ma6#Zp31", canSupervisor: true }
];

const iconPaths = {
  home: '<path d="M3 10.7 12 3l9 7.7"/><path d="M5.5 9.4V21h13V9.4M9 21v-7h6v7"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  practice: '<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  dashboard: '<rect x="3" y="3" width="7" height="18" rx="1.5"/><rect x="14" y="3" width="7" height="8" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/>',
  spark: '<path d="m12 3 1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  logout: '<path d="M10 5H5v14h5M14 8l4 4-4 4M18 12H9"/>',
  eye: '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.7"/>',
  "eye-off": '<path d="m3 3 18 18M10.6 6.1A9.9 9.9 0 0 1 12 6c6 0 9.5 6 9.5 6a17 17 0 0 1-2.1 2.8M6.2 6.3A16.2 16.2 0 0 0 2.5 12s3.5 6 9.5 6a9.7 9.7 0 0 0 3.2-.5M9.9 9.8a3 3 0 0 0 4.3 4.3"/>',
  chevron: '<path d="m7 9 5 5 5-5"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 8A7 7 0 0 1 18.7 9.5L20 12M4 12l1.3 2.5A7 7 0 0 0 17.9 16"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.2a4 4 0 0 1 0 7.7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  trend: '<path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  ear: '<path d="M6.8 9a5.2 5.2 0 1 1 9.7 2.6c-.7 1.3-1.9 1.9-2.6 3.1-.8 1.3-.8 3.3-2.8 3.3-1.6 0-2.6-1.2-2.6-2.6"/><path d="M10 9.2a2.5 2.5 0 1 1 4.6 1.4c-.5.8-1.4 1.1-1.7 2"/>',
  message: '<path d="M4 4h16v12H8l-4 4z"/><path d="M8 8h8M8 12h5"/>',
  "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/>',
  offer: '<path d="M4 19V5h8l4 4v10z"/><path d="M12 5v4h4M8 13h4M8 16h6"/>',
  handshake: '<path d="m8 11 3-3a2 2 0 0 1 3 0l5 5M2 12l5 5 3-3M22 12l-5 5-5-5"/><path d="m9 15 2 2a2 2 0 0 0 3 0l1-1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  mic: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1M12 19v3M8 22h8"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4"/>'
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function iconSvg(name) {
  const paths = iconPaths[name] || iconPaths.spark;
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;
}

function hydrateIcons(root = document) {
  $$('[data-icon]', root).forEach((element) => {
    element.innerHTML = iconSvg(element.dataset.icon);
  });
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;"
  })[character]);
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

const state = {
  currentUser: null,
  currentTopic: null,
  recognition: null,
  toastTimer: null,
  attempts: readJson("qaLabAttempts_v4", [])
};

const dom = {
  loginScreen: $("#loginScreen"),
  loginForm: $("#loginForm"),
  loginEmail: $("#loginEmail"),
  loginPassword: $("#loginPassword"),
  loginError: $("#loginError"),
  passwordToggle: $("#passwordToggle"),
  appShell: $("#appShell"),
  main: $("#mainContent"),
  homeView: $("#homeView"),
  detailView: $("#detailView"),
  supervisorView: $("#supervisorView"),
  topicGrid: $("#topicGrid"),
  search: $("#searchInput"),
  filter: $("#topicFilter"),
  crumb: $("#crumbCurrent"),
  toast: $("#toast"),
  sidebar: $("#sidebar"),
  drawerScrim: $("#drawerScrim"),
  menuButton: $("#menuButton")
};

function todayKey(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function todayAttempts() {
  return state.attempts.filter((attempt) => attempt.day === todayKey());
}

function topicById(id) {
  return topics.find((topic) => topic.id === id);
}

function getInitials(name) {
  return name.split(/\s+/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function showToast(message) {
  clearTimeout(state.toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  state.toastTimer = setTimeout(() => dom.toast.classList.remove("is-visible"), 3200);
}

function closeDrawer({ returnFocus = false } = {}) {
  dom.sidebar.classList.remove("is-open");
  dom.drawerScrim.hidden = true;
  document.body.classList.remove("drawer-open");
  dom.menuButton.setAttribute("aria-expanded", "false");
  dom.menuButton.setAttribute("aria-label", "Abrir menú");
  if (returnFocus) dom.menuButton.focus();
}

function openDrawer() {
  dom.sidebar.classList.add("is-open");
  dom.drawerScrim.hidden = false;
  document.body.classList.add("drawer-open");
  dom.menuButton.setAttribute("aria-expanded", "true");
  dom.menuButton.setAttribute("aria-label", "Cerrar menú");
  $(".nav-item", dom.sidebar)?.focus();
}

function setActiveNav(route) {
  $$(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === route));
}

function revealView(view) {
  [dom.homeView, dom.detailView, dom.supervisorView].forEach((item) => {
    item.hidden = item !== view;
    item.classList.remove("is-entering");
  });
  view.classList.add("is-entering");
  setTimeout(() => view.classList.remove("is-entering"), 300);
}

function showHome(anchor) {
  state.currentTopic = null;
  revealView(dom.homeView);
  dom.crumb.textContent = "Inicio";
  setActiveNav("home");
  renderTopics();
  renderDailyBoard();
  if (anchor) {
    requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
    dom.main.focus({ preventScroll: true });
  }
}

function showSupervisor() {
  if (!state.currentUser?.canSupervisor) {
    location.hash = "#inicio";
    return;
  }
  state.currentTopic = null;
  revealView(dom.supervisorView);
  dom.crumb.textContent = "Panel supervisor";
  setActiveNav("supervisor");
  renderSupervisor();
  window.scrollTo({ top: 0, behavior: "auto" });
  dom.main.focus({ preventScroll: true });
}

function handleRoute() {
  if (!state.currentUser) return;
  closeDrawer();
  const hash = decodeURIComponent(location.hash || "#inicio");
  if (hash === "#supervisor") {
    showSupervisor();
    return;
  }
  if (hash.startsWith("#tema/")) {
    openTopic(hash.slice(6));
    return;
  }
  if (hash === "#comportamientos") {
    showHome("behaviors");
    return;
  }
  if (hash === "#practica") {
    showHome("dailyPractice");
    return;
  }
  showHome();
}

function renderTopics() {
  const query = dom.search.value.trim().toLocaleLowerCase("es-MX");
  const filter = dom.filter.value;
  const list = topics.filter((topic) => {
    const matchesFilter = filter === "all" || topic.tag === filter;
    const searchable = `${topic.title} ${topic.description}`.toLocaleLowerCase("es-MX");
    return matchesFilter && (!query || searchable.includes(query));
  });

  if (!list.length) {
    dom.topicGrid.innerHTML = '<div class="empty-state"><strong>Sin coincidencias</strong><span>Prueba con otra palabra o cambia el filtro.</span></div>';
    return;
  }

  dom.topicGrid.innerHTML = list.map((topic, index) => `
    <button class="topic-card" type="button" data-topic="${topic.id}" style="--stagger:${index}">
      <span class="topic-card__top">
        <span class="topic-icon topic-icon--${topic.tag}">${iconSvg(topic.icon)}</span>
        <span class="tag">${topic.tag === "conversion" ? "Conversión" : "Experiencia"}</span>
      </span>
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
      <span class="topic-card__action">Consultar guía ${iconSvg("arrow")}</span>
    </button>
  `).join("");
}

function getBestAttempts(attempts = todayAttempts()) {
  const bestByPerson = new Map();
  attempts.forEach((attempt) => {
    const previous = bestByPerson.get(attempt.email);
    if (!previous || attempt.score > previous.score) bestByPerson.set(attempt.email, attempt);
  });
  return [...bestByPerson.values()].sort((a, b) => b.score - a.score).slice(0, 3);
}

function rankRows(attempts = todayAttempts()) {
  const rows = getBestAttempts(attempts);
  if (!rows.length) {
    return '<div class="empty-state"><strong>Aún no hay resultados</strong><span>Completa una práctica para iniciar el ranking.</span></div>';
  }
  return rows.map((attempt, index) => `
    <div class="rank-row">
      <span class="rank-number">${index + 1}</span>
      <span class="rank-person"><strong>${escapeHtml(attempt.name)}</strong><small>${escapeHtml(attempt.role)}</small></span>
      <span class="rank-topic">${escapeHtml(attempt.topic)}</span>
      <span class="rank-score">${attempt.score} pts</span>
    </div>
  `).join("");
}

function renderDailyBoard() {
  $("#dailyBoard").innerHTML = rankRows();
}

function conversationTemplate(title, channel, lines) {
  return `
    <article class="conversation">
      <div class="conversation__heading"><span>${title}</span><span>${channel}</span></div>
      ${lines.map((line, index) => `
        <div class="message"><strong>${index % 2 === 0 ? "Prospecto" : "Asesor"}</strong>${escapeHtml(line)}</div>
      `).join("")}
    </article>
  `;
}

function levelTemplate(level, exceeds = false) {
  return `
    <article class="content-card">
      <span class="level-badge ${exceeds ? "level-badge--exceeds" : ""}">${exceeds ? "Nivel excede" : "Nivel efectivo"}</span>
      <h2>${level.title}</h2>
      <p class="level-summary">${level.text}</p>
      <div class="example-grid">
        ${conversationTemplate("Ejemplo", "Llamada", level.call)}
        ${conversationTemplate("Ejemplo", "Chat", level.chat)}
      </div>
    </article>
  `;
}

function practiceTemplate(topic) {
  return `
    <div class="practice-grid">
      <article class="scenario-card">
        <p class="kicker kicker--light">Reto de aplicación</p>
        <h2>Responde como asesor</h2>
        <p>Tu respuesta se evalúa con cuatro criterios.</p>
        <div class="scenario-question" id="scenarioQuestion"></div>
        <div class="scenario-meta"><span id="attemptCount">Sin intentos en este tema</span><span>Práctica ilimitada</span></div>

        <div class="mode-switch" aria-label="Modo de respuesta">
          <button class="mode-button" type="button" data-mode="text" aria-pressed="true">${iconSvg("edit")}Texto</button>
          <button class="mode-button" type="button" data-mode="voice" aria-pressed="false">${iconSvg("mic")}Voz</button>
        </div>

        <div class="voice-control" id="voiceControl" hidden>
          <span class="voice-dot" aria-hidden="true"></span>
          <span id="voiceStatus">Dicta tu respuesta y revisa la transcripción.</span>
          <button class="button button--light" id="recordButton" type="button">Iniciar dictado</button>
        </div>

        <label class="answer-label" for="answerInput">
          <span id="answerLabel">Tu respuesta</span>
          <textarea class="answer-area" id="answerInput" placeholder="Escribe cómo responderías al prospecto"></textarea>
        </label>

        <div class="practice-actions">
          <button class="button button--primary" id="evaluateButton" type="button">Evaluar respuesta</button>
          <button class="button button--secondary" id="nextScenarioButton" type="button">Otro caso</button>
        </div>
        <p class="practice-feedback" id="practiceFeedback" role="status" hidden></p>
      </article>

      <div class="score-stack">
        <article class="score-card">
          <h2>Tu evaluación</h2>
          <div class="score-summary">
            <div class="score-ring" id="scoreRing"><strong id="scoreValue">—</strong></div>
            <div class="score-summary__copy"><strong id="scoreTitle">Aún no evaluada</strong><span id="scoreText">Responde el caso para ver tu resultado.</span></div>
          </div>
          ${metricTemplate("clarity", "Claridad")}
          ${metricTemplate("empathy", "Empatía")}
          ${metricTemplate("personal", "Personalización")}
          ${metricTemplate("advance", "Avance")}
        </article>
        <div class="leaderboard" id="topicRanking"></div>
      </div>
    </div>
  `;
}

function metricTemplate(id, label) {
  return `
    <div class="metric-row">
      <span>${label}</span>
      <span class="metric-track"><span id="metric-${id}"></span></span>
      <span class="metric-value" id="metric-${id}-value">0</span>
    </div>
  `;
}

function openTopic(id) {
  const topic = topicById(id);
  if (!topic) {
    location.hash = "#inicio";
    return;
  }

  state.currentTopic = topic;
  revealView(dom.detailView);
  dom.crumb.textContent = topic.title;
  setActiveNav("");
  dom.detailView.innerHTML = `
    <a class="back-link" href="#comportamientos">${iconSvg("arrow")}Volver a comportamientos</a>
    <div class="detail-heading">
      <div class="detail-heading__title">
        <span class="topic-icon topic-icon--${topic.tag}">${iconSvg(topic.icon)}</span>
        <div><h1>${topic.title}</h1><p>${topic.description}</p></div>
      </div>
      <span class="tag">${topic.tag === "conversion" ? "Conversión" : "Experiencia"}</span>
    </div>

    <div class="detail-tabs" role="tablist" aria-label="Contenido del comportamiento">
      <button class="tab-button" type="button" role="tab" id="tab-guide" aria-controls="panel-guide" aria-selected="true" tabindex="0">Guía breve</button>
      <button class="tab-button" type="button" role="tab" id="tab-effective" aria-controls="panel-effective" aria-selected="false" tabindex="-1">Nivel efectivo</button>
      <button class="tab-button" type="button" role="tab" id="tab-exceeds" aria-controls="panel-exceeds" aria-selected="false" tabindex="-1">Nivel excede</button>
      <button class="tab-button" type="button" role="tab" id="tab-practice" aria-controls="panel-practice" aria-selected="false" tabindex="-1">Practicar</button>
    </div>

    <div class="tab-panel is-active" id="panel-guide" role="tabpanel" aria-labelledby="tab-guide">
      <div class="guide-grid">
        <article class="content-card">
          <h2>Idea central</h2>
          <p>${topic.intro}</p>
          <ul class="formula-list">${topic.formula.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="content-card">
          <h2>Antes de responder</h2>
          <ul class="check-list">
            ${topic.formula.map((item) => `<li>${iconSvg("check")}<span>${item}</span></li>`).join("")}
            <li>${iconSvg("check")}<span>Ajusta el mensaje al canal y a la persona.</span></li>
          </ul>
        </article>
      </div>
    </div>
    <div class="tab-panel" id="panel-effective" role="tabpanel" aria-labelledby="tab-effective" hidden>${levelTemplate(topic.effective)}</div>
    <div class="tab-panel" id="panel-exceeds" role="tabpanel" aria-labelledby="tab-exceeds" hidden>${levelTemplate(topic.exceeds, true)}</div>
    <div class="tab-panel" id="panel-practice" role="tabpanel" aria-labelledby="tab-practice" hidden>${practiceTemplate(topic)}</div>
  `;

  setupTabs();
  setupPractice(topic);
  window.scrollTo({ top: 0, behavior: "auto" });
  dom.main.focus({ preventScroll: true });
}

function activateTab(tab) {
  const tabs = $$('.tab-button', dom.detailView);
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(item.getAttribute("aria-controls"));
    panel.hidden = !selected;
    panel.classList.toggle("is-active", selected);
  });
}

function setupTabs() {
  const tabs = $$('.tab-button', dom.detailView);
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      activateTab(tabs[nextIndex]);
      tabs[nextIndex].focus();
    });
  });
}

function nextScenario(topic) {
  const bank = scenarioBank[topic.id] || scenarioBank.amable;
  const storageKey = `qaLabSeen_${topic.id}`;
  let seen = readJson(storageKey, []).filter((index) => Number.isInteger(index) && index >= 0 && index < bank.length);
  let available = bank.map((text, index) => ({ text, index })).filter((item) => !seen.includes(item.index));
  if (!available.length) {
    seen = [];
    available = bank.map((text, index) => ({ text, index }));
  }
  const picked = available[Math.floor(Math.random() * available.length)];
  localStorage.setItem(storageKey, JSON.stringify([...seen, picked.index]));
  $("#scenarioQuestion").textContent = `“${picked.text}”`;
  return picked.text;
}

function normalizeText(value) {
  return value.toLocaleLowerCase("es-MX").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function evaluateAnswer(answer) {
  const text = normalizeText(answer);
  const hasQuestion = /[?¿]/.test(answer);
  const empathyWords = /\b(entiendo|comprendo|claro|gracias|valido|importante)\b/.test(text);
  const personalWords = /\b(tu|tus|te|contigo|por lo que|mencionas)\b/.test(text);
  const advanceWords = /\b(podemos|revisar|cuentame|agendar|enviar|siguiente|horario|opcion)\b/.test(text);
  const clarity = Math.min(100, 48 + (answer.length >= 55 ? 22 : 0) + (answer.length >= 110 ? 12 : 0) + (hasQuestion ? 12 : 0));
  const empathy = Math.min(100, 48 + (empathyWords ? 38 : 0) + (hasQuestion ? 8 : 0));
  const personal = Math.min(100, 45 + (personalWords ? 36 : 0) + (answer.length >= 80 ? 8 : 0));
  const advance = Math.min(100, 45 + (advanceWords ? 38 : 0) + (hasQuestion ? 8 : 0));
  return { clarity, empathy, personal, advance };
}

function setupPractice(topic) {
  nextScenario(topic);
  const attemptsForTopic = todayAttempts().filter((attempt) => attempt.email === state.currentUser.email && attempt.topicId === topic.id).length;
  $("#attemptCount").textContent = attemptsForTopic ? `${attemptsForTopic} intento${attemptsForTopic === 1 ? "" : "s"} hoy` : "Sin intentos en este tema";
  $("#topicRanking").innerHTML = rankRows();

  $$('.mode-button', dom.detailView).forEach((button) => {
    button.addEventListener("click", () => {
      const voiceMode = button.dataset.mode === "voice";
      $$('.mode-button', dom.detailView).forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      $("#voiceControl").hidden = !voiceMode;
      $("#answerLabel").textContent = voiceMode ? "Transcripción" : "Tu respuesta";
      if (!voiceMode && state.recognition) {
        state.recognition.stop();
        state.recognition = null;
      }
    });
  });

  $("#recordButton").addEventListener("click", toggleVoiceRecognition);
  $("#nextScenarioButton").addEventListener("click", () => resetPractice(topic));
  $("#evaluateButton").addEventListener("click", () => evaluatePractice(topic));
}

function toggleVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const control = $("#voiceControl");
  const button = $("#recordButton");
  const status = $("#voiceStatus");

  if (state.recognition) {
    state.recognition.stop();
    return;
  }
  if (!SpeechRecognition) {
    status.textContent = "El dictado no está disponible en este navegador. Escribe tu respuesta.";
    showToast("El dictado no está disponible; puedes responder por texto.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "es-MX";
  recognition.continuous = true;
  recognition.interimResults = true;
  let finalTranscript = $("#answerInput").value.trim();

  recognition.onresult = (event) => {
    let interim = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript;
      if (event.results[index].isFinal) finalTranscript += `${finalTranscript ? " " : ""}${transcript.trim()}`;
      else interim += transcript;
    }
    $("#answerInput").value = `${finalTranscript}${interim ? ` ${interim}` : ""}`.trim();
  };
  recognition.onerror = () => {
    showToast("No se pudo usar el micrófono. Revisa el permiso del navegador.");
  };
  recognition.onend = () => {
    state.recognition = null;
    control.classList.remove("is-recording");
    button.textContent = "Iniciar dictado";
    status.textContent = "Dictado detenido. Revisa la transcripción.";
  };

  state.recognition = recognition;
  recognition.start();
  control.classList.add("is-recording");
  button.textContent = "Detener dictado";
  status.textContent = "Escuchando…";
}

function resetPractice(topic) {
  if (state.recognition) state.recognition.stop();
  nextScenario(topic);
  $("#answerInput").value = "";
  $("#practiceFeedback").hidden = true;
  $("#scoreValue").textContent = "—";
  $("#scoreTitle").textContent = "Nuevo caso listo";
  $("#scoreText").textContent = "Responde para ver tu resultado.";
  $("#scoreRing").style.background = "conic-gradient(var(--blue-600) 0deg, #e8eef4 0deg)";
  ["clarity", "empathy", "personal", "advance"].forEach((metric) => {
    $(`#metric-${metric}`).style.width = "0";
    $(`#metric-${metric}-value`).textContent = "0";
  });
  $("#answerInput").focus();
}

function evaluatePractice(topic) {
  const answer = $("#answerInput").value.trim();
  if (!answer) {
    showToast("Escribe o dicta una respuesta antes de evaluar.");
    $("#answerInput").focus();
    return;
  }

  const metrics = evaluateAnswer(answer);
  const score = Math.round(Object.values(metrics).reduce((sum, value) => sum + value, 0) / 4);
  const title = score >= 85 ? "Nivel excede" : score >= 70 ? "Nivel efectivo" : "Sigue practicando";
  const message = score >= 85
    ? "Conectas la necesidad con un siguiente paso claro."
    : score >= 70
      ? "Buena base. Agrega una frase más personal."
      : "Reconoce la inquietud y cierra con una pregunta.";

  $("#scoreValue").textContent = score;
  $("#scoreTitle").textContent = title;
  $("#scoreText").textContent = message;
  $("#scoreRing").style.background = `conic-gradient(var(--blue-600) ${score * 3.6}deg, #e8eef4 0deg)`;
  Object.entries(metrics).forEach(([metric, value]) => {
    $(`#metric-${metric}`).style.width = `${value}%`;
    $(`#metric-${metric}-value`).textContent = value;
  });

  const attempt = {
    name: state.currentUser.name,
    email: state.currentUser.email,
    role: state.currentUser.role,
    topic: topic.title,
    topicId: topic.id,
    score,
    createdAt: new Date().toISOString(),
    day: todayKey()
  };
  state.attempts.push(attempt);
  localStorage.setItem("qaLabAttempts_v4", JSON.stringify(state.attempts));

  const topicCount = todayAttempts().filter((item) => item.email === state.currentUser.email && item.topicId === topic.id).length;
  $("#attemptCount").textContent = `${topicCount} intento${topicCount === 1 ? "" : "s"} hoy`;
  $("#practiceFeedback").textContent = message;
  $("#practiceFeedback").hidden = false;
  $("#topicRanking").innerHTML = rankRows();
  renderDailyBoard();
  showToast(`Evaluación guardada: ${score} puntos.`);
}

function average(values) {
  return values.length ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) : 0;
}

function renderSupervisor() {
  const attempts = todayAttempts();
  const participants = new Set(attempts.map((attempt) => attempt.email)).size;
  $("#supervisorDate").textContent = `Hoy · ${new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(new Date())}`;
  $("#kpiParticipants").textContent = participants;
  $("#kpiAttempts").textContent = attempts.length;
  $("#kpiAverage").textContent = average(attempts.map((attempt) => attempt.score));

  const best = getBestAttempts(attempts);
  $("#supervisorRanking").innerHTML = best.length ? best.map((attempt, index) => `
    <div class="super-rank">
      <span class="rank-number">${index + 1}</span>
      <span class="rank-avatar">${getInitials(attempt.name)}</span>
      <span><strong>${escapeHtml(attempt.name)}</strong><small>${escapeHtml(attempt.topic)}</small></span>
      <span class="rank-score">${attempt.score}</span>
    </div>
  `).join("") : '<div class="empty-state"><strong>Sin resultados</strong><span>El ranking aparecerá con la primera evaluación.</span></div>';

  $("#behaviorPerformance").innerHTML = topics.map((topic) => {
    const scores = attempts.filter((attempt) => attempt.topicId === topic.id).map((attempt) => attempt.score);
    const score = average(scores);
    return `
      <div class="behavior-line">
        <div class="behavior-line__labels"><span>${topic.title}</span><strong>${score} pts</strong></div>
        <div class="behavior-track"><span style="width:${score}%"></span></div>
      </div>
    `;
  }).join("");

  const recent = [...attempts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);
  $("#recentAttempts").innerHTML = recent.length ? `
    <div class="data-row data-row--header"><span>Participante</span><span>Comportamiento</span><span>Resultado</span><span>Estado</span></div>
    ${recent.map((attempt) => `
      <div class="data-row">
        <strong>${escapeHtml(attempt.name)}</strong>
        <span>${escapeHtml(attempt.topic)}</span>
        <span>${attempt.score} puntos</span>
        <span class="status-chip">Evaluado</span>
      </div>
    `).join("")}
  ` : '<div class="empty-state"><strong>Sin actividad reciente</strong><span>Los intentos del día aparecerán aquí.</span></div>';

  $("#usersTable").innerHTML = `
    <div class="data-row data-row--header"><span>Usuario</span><span>Correo</span><span>Rol</span><span>Estado</span></div>
    ${teamUsers.map((user) => `
      <div class="data-row">
        <strong>${escapeHtml(user.name)}</strong>
        <span>${escapeHtml(user.email)}</span>
        <span>${escapeHtml(user.role)}</span>
        <span class="status-chip status-chip--neutral">Acceso demo</span>
      </div>
    `).join("")}
  `;
}

function logIn(user) {
  state.currentUser = user;
  dom.loginScreen.hidden = true;
  dom.appShell.hidden = false;
  $("#currentUser").textContent = user.name;
  $("#currentRole").textContent = user.role;
  $("#userAvatar").textContent = getInitials(user.name);
  $("#supervisorNav").hidden = !user.canSupervisor;
  if (!location.hash) history.replaceState(null, "", "#inicio");
  handleRoute();
}

function logOut() {
  if (state.recognition) state.recognition.stop();
  state.currentUser = null;
  dom.appShell.hidden = true;
  dom.loginScreen.hidden = false;
  dom.loginForm.reset();
  dom.loginError.hidden = true;
  history.replaceState(null, "", "#inicio");
  dom.loginEmail.focus();
}

function bindEvents() {
  dom.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = dom.loginEmail.value.trim().toLocaleLowerCase("es-MX");
    const password = dom.loginPassword.value;
    const user = authUsers.find((item) => item.email === email && item.password === password);
    if (!user) {
      dom.loginError.hidden = false;
      dom.loginEmail.focus();
      return;
    }
    dom.loginError.hidden = true;
    logIn(user);
  });

  dom.passwordToggle.addEventListener("click", () => {
    const visible = dom.loginPassword.type === "text";
    dom.loginPassword.type = visible ? "password" : "text";
    dom.passwordToggle.setAttribute("aria-pressed", String(!visible));
    dom.passwordToggle.setAttribute("aria-label", visible ? "Mostrar contraseña" : "Ocultar contraseña");
    dom.passwordToggle.innerHTML = iconSvg(visible ? "eye" : "eye-off");
    dom.loginPassword.focus();
  });

  $("#logoutButton").addEventListener("click", logOut);
  dom.menuButton.addEventListener("click", () => {
    if (dom.sidebar.classList.contains("is-open")) closeDrawer({ returnFocus: true });
    else openDrawer();
  });
  dom.drawerScrim.addEventListener("click", () => closeDrawer({ returnFocus: true }));

  dom.topicGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-topic]");
    if (card) location.hash = `#tema/${card.dataset.topic}`;
  });
  dom.search.addEventListener("input", renderTopics);
  dom.filter.addEventListener("change", renderTopics);

  $("#refreshSupervisor").addEventListener("click", () => {
    renderSupervisor();
    showToast("Panel actualizado.");
  });
  $("#clearResults").addEventListener("click", () => {
    if (!window.confirm("¿Eliminar los resultados locales de este navegador?")) return;
    state.attempts = [];
    localStorage.removeItem("qaLabAttempts_v4");
    renderSupervisor();
    renderDailyBoard();
    showToast("Resultados locales eliminados.");
  });
  $("#inviteAll").addEventListener("click", () => showToast(`${teamUsers.length} invitaciones listas para preparar.`));

  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dom.sidebar.classList.contains("is-open")) closeDrawer({ returnFocus: true });
  });
}

hydrateIcons();
bindEvents();
renderTopics();
renderDailyBoard();
