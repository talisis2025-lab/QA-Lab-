"use strict";

const topics = [
  {
    id: "amable", title: "Sé amable y natural", icon: "sun", tag: "experience",
    description: "Crea confianza desde el primer contacto.",
    intro: "Habla con cercanía, adapta el tono y evita respuestas que suenen memorizadas.",
    formula: ["Saluda con intención", "Adapta el tono", "Conversa, no recites"],
    effective: { title: "Cercanía clara", text: "La respuesta es cordial, directa y adecuada al canal.", call: ["Hola, quiero información.", "Claro, con gusto. ¿Qué te gustaría estudiar?"], chat: ["¿Me ayudan con una carrera?", "Sí. Cuéntame qué área te interesa y revisamos opciones."] },
    exceeds: { title: "Conexión genuina", text: "Además de orientar, reconoce el contexto de la persona.", call: ["Trabajo y no sé si pueda estudiar.", "Entiendo. Revisemos una opción que se ajuste a tu horario."], chat: ["Me da miedo no tener tiempo.", "Es válido. ¿Cómo es tu semana? Así buscamos una modalidad realista."] }
  },
  {
    id: "descubre", title: "Descubre necesidades", icon: "compass", tag: "conversion",
    description: "Pregunta para entender qué necesita la persona.",
    intro: "Explora la motivación, el contexto y las prioridades antes de recomendar una opción.",
    formula: ["Pregunta", "Profundiza", "Confirma"],
    effective: { title: "Preguntas útiles", text: "Obtiene información suficiente para orientar la conversación.", call: ["Quiero estudiar Administración.", "¿Qué te gustaría lograr con esa carrera?"], chat: ["Busco una universidad.", "¿Qué es lo más importante para ti: horario, modalidad o plan de estudios?"] },
    exceeds: { title: "Motivación conectada", text: "Relaciona las respuestas y valida la necesidad principal.", call: ["Quiero crecer en mi trabajo.", "Entonces buscas una opción que puedas aplicar mientras trabajas, ¿correcto?"], chat: ["Tengo un negocio propio.", "¿Quieres ordenar mejor la operación o prepararte para hacerlo crecer?"] }
  },
  {
    id: "escucha", title: "Escucha activa", icon: "ear", tag: "experience",
    description: "Retoma lo importante y demuestra comprensión.",
    intro: "Escuchar es usar lo que la persona dijo para construir la siguiente respuesta.",
    formula: ["Identifica la idea", "Reconoce", "Conecta"],
    effective: { title: "Respuesta conectada", text: "Retoma un dato relevante antes de continuar.", call: ["Trabajo de lunes a sábado.", "Con ese horario, revisemos modalidades que no te obliguen a asistir diario."], chat: ["Ya tengo experiencia laboral.", "Esa experiencia puede ayudarte a aprovechar mejor la carrera."] },
    exceeds: { title: "Comprensión precisa", text: "Reconoce emoción, contexto y objetivo sin asumir.", call: ["Llevo años haciendo lo mismo.", "Suena a que buscas un cambio real, no solo un título. ¿Qué puesto te interesa?"], chat: ["Mi familia me anima, pero tengo dudas.", "Tienes apoyo y también inquietudes. ¿Cuál pesa más hoy?"] }
  },
  {
    id: "palabras", title: "Elige tus palabras", icon: "message", tag: "experience",
    description: "Comunica con claridad y enfoque en soluciones.",
    intro: "Usa lenguaje simple, positivo y específico. Explica posibilidades sin prometer de más.",
    formula: ["Simplifica", "Enfoca en opciones", "Sé preciso"],
    effective: { title: "Mensaje fácil de entender", text: "Evita tecnicismos y responde de forma concreta.", call: ["¿Puedo pagar después?", "Podemos revisar las fechas y opciones de pago disponibles."], chat: ["No puedo ir entre semana.", "Tenemos alternativas con mayor flexibilidad. Te explico cómo funcionan."] },
    exceeds: { title: "Claridad que tranquiliza", text: "Reformula la preocupación y ofrece un camino verificable.", call: ["No sé si sea el momento.", "Podemos revisar tiempo y presupuesto para que decidas con información clara."], chat: ["Me preocupa no continuar.", "Revisemos la carga y el acompañamiento antes de que tomes una decisión."] }
  },
  {
    id: "resolucion", title: "Resolución", icon: "check-circle", tag: "conversion",
    description: "Resuelve la duda y orienta el siguiente paso.",
    intro: "Una buena respuesta cierra la duda actual y deja claro qué puede hacer la persona después.",
    formula: ["Responde", "Verifica", "Orienta"],
    effective: { title: "Solución completa", text: "Responde de manera directa y propone una acción.", call: ["¿Cuánto dura la carrera?", "Te confirmo la duración del plan y después revisamos tu fecha de inicio."], chat: ["¿Qué necesito para iniciar?", "Necesitas estos documentos. Si quieres, revisamos ahora cuáles ya tienes."] },
    exceeds: { title: "Solución anticipada", text: "Además de resolver, previene la siguiente duda relevante.", call: ["Trabajo tiempo completo.", "Sí puedes estudiar. Revisemos modalidad, carga sugerida y horarios de apoyo."], chat: ["¿Tienen modalidad en línea?", "Sí. Te explico cómo se cursa y qué acompañamiento recibes."] }
  },
  {
    id: "embajador", title: "Embajador Talisis", icon: "spark", tag: "conversion",
    description: "Convierte atributos en beneficios relevantes.",
    intro: "Habla de la institución desde la necesidad expresada, no desde una lista de características.",
    formula: ["Escucha la meta", "Elige un atributo", "Traduce el beneficio"],
    effective: { title: "Beneficio relevante", text: "Relaciona una característica con el contexto del prospecto.", call: ["Quiero seguir trabajando.", "La flexibilidad te permite avanzar sin pausar tu experiencia laboral."], chat: ["Busco crecer en mi empleo.", "El enfoque práctico te ayuda a aplicar lo aprendido desde ahora."] },
    exceeds: { title: "Valor personalizado", text: "Conecta varios beneficios sin convertir la respuesta en un discurso.", call: ["No tengo mucho tiempo.", "Podemos combinar flexibilidad y acompañamiento para que organices un ritmo sostenible."], chat: ["¿Por qué elegirlos?", "Por lo que buscas, destacan la modalidad flexible y la orientación durante tu avance."] }
  },
  {
    id: "oferta", title: "Oferta efectiva", icon: "offer", tag: "conversion",
    description: "Presenta la opción correcta y facilita el avance.",
    intro: "Resume lo entendido, recomienda una alternativa y propone un siguiente paso concreto.",
    formula: ["Resume", "Recomienda", "Avanza"],
    effective: { title: "Recomendación con sentido", text: "La oferta responde a una necesidad que ya fue confirmada.", call: ["No quiero dejar mi negocio.", "Por tu situación, la modalidad flexible es la mejor opción. Revisemos horarios."], chat: ["Me interesa Administración.", "Por tu meta laboral, esta carrera encaja. ¿Quieres revisar el plan o el proceso de ingreso?"] },
    exceeds: { title: "Oferta fácil de decidir", text: "Compara opciones relevantes y reduce fricción para avanzar.", call: ["Necesito pensarlo.", "Claro. Para ayudarte, resumamos costo, tiempo y modalidad antes de cerrar."], chat: ["Estoy comparando opciones.", "Te comparto los tres puntos que responden a lo que buscas y agendamos seguimiento."] }
  },
  {
    id: "negociacion", title: "Negociación", icon: "handshake", tag: "conversion",
    description: "Entiende la objeción y construye alternativas.",
    intro: "No contradigas de inmediato. Aclara la resistencia, valida y explora una solución posible.",
    formula: ["Aclara", "Valida", "Propón"],
    effective: { title: "Objeción atendida", text: "Reconoce la inquietud y ofrece una alternativa pertinente.", call: ["Se me hace muy caro.", "Entiendo. ¿Te preocupa el pago inicial o el monto mensual?"], chat: ["No tengo tiempo.", "Revisemos tu semana y veamos si existe una carga que sí puedas sostener."] },
    exceeds: { title: "Acuerdo construido", text: "Confirma la causa real y acuerda una acción sin presionar.", call: ["Debo consultarlo con mi familia.", "Claro. ¿Qué información necesitan para revisarlo juntos? Te la preparo."], chat: ["No sé si sea para mí.", "¿La duda es por la modalidad o por el esfuerzo que requiere? Revisemos ese punto."] }
  },
  {
    id: "expectativas", title: "Manejo de expectativas", icon: "clock", tag: "experience",
    description: "Cierra con acuerdos, tiempos y canales claros.",
    intro: "Antes de terminar, confirma qué ocurrirá, quién hará cada acción y cuándo habrá seguimiento.",
    formula: ["Resume acuerdos", "Define responsable", "Confirma tiempo"],
    effective: { title: "Cierre sin dudas", text: "Indica el siguiente paso y el canal de contacto.", call: ["¿Qué sigue?", "Hoy te envío la información y mañana te contacto para resolver dudas."], chat: ["¿Dónde recibiré los datos?", "Te llegarán a este correo en unos minutos. Confírmame cuando los veas."] },
    exceeds: { title: "Seguimiento prevenido", text: "Confirma acuerdos y explica qué hacer si algo cambia.", call: ["¿Y si no puedo asistir?", "Puedes cambiar el horario desde este enlace o avisarme y lo ajustamos."], chat: ["¿Qué llevo a la cita?", "Necesitas estos documentos. Te enviaré la lista y un recordatorio antes de la cita."] }
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

const iconPaths = {
  home: '<path d="M3 10.7 12 3l9 7.7"/><path d="M5.5 9.4V21h13V9.4M9 21v-7h6v7"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  practice: '<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  dashboard: '<rect x="3" y="3" width="7" height="18" rx="1.5"/><rect x="14" y="3" width="7" height="8" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/>',
  spark: '<path d="m12 3 1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  logout: '<path d="M10 5H5v14h5M14 8l4 4-4 4M18 12H9"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  shield: '<path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  chevron: '<path d="m7 9 5 5 5-5"/>', arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 8A7 7 0 0 1 18.7 9.5L20 12M4 12l1.3 2.5A7 7 0 0 0 17.9 16"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.2a4 4 0 0 1 0 7.7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>', trend: '<path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>', ear: '<path d="M6.8 9a5.2 5.2 0 1 1 9.7 2.6c-.7 1.3-1.9 1.9-2.6 3.1-.8 1.3-.8 3.3-2.8 3.3-1.6 0-2.6-1.2-2.6-2.6"/><path d="M10 9.2a2.5 2.5 0 1 1 4.6 1.4c-.5.8-1.4 1.1-1.7 2"/>',
  message: '<path d="M4 4h16v12H8l-4 4z"/><path d="M8 8h8M8 12h5"/>', "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/>',
  offer: '<path d="M4 19V5h8l4 4v10z"/><path d="M12 5v4h4M8 13h4M8 16h6"/>', handshake: '<path d="m8 11 3-3a2 2 0 0 1 3 0l5 5M2 12l5 5 3-3M22 12l-5 5-5-5"/><path d="m9 15 2 2a2 2 0 0 0 3 0l1-1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', check: '<path d="m5 12 4 4L19 6"/>',
  mic: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1M12 19v3M8 22h8"/>', edit: '<path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4"/>'
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function iconSvg(name) {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${iconPaths[name] || iconPaths.spark}</svg>`;
}

function hydrateIcons(root = document) {
  $$('[data-icon]', root).forEach((element) => { element.innerHTML = iconSvg(element.dataset.icon); });
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[character]);
}

function getInitials(name = "") {
  return name.split(/\s+/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function randomChannel() {
  if (!window.crypto?.getRandomValues) throw new Error("SECURE_CONTEXT_REQUIRED");
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  return [...bytes].map((value) => value.toString(16).padStart(2, "0")).join("");
}

function isTrustedBridgeOrigin(origin) {
  if (origin === "null") return true;
  try {
    const url = new URL(origin);
    const trustedHost = url.hostname === "script.google.com" ||
      url.hostname === "script.googleusercontent.com" ||
      url.hostname.endsWith("-script.googleusercontent.com");
    return url.protocol === "https:" && trustedHost;
  } catch {
    return false;
  }
}

class AppsScriptBridge {
  constructor(url, timeoutMs = 20000) {
    this.url = url;
    this.timeoutMs = timeoutMs;
    this.channel = randomChannel();
    this.pending = new Map();
    this.connected = false;
    this.onMessage = this.onMessage.bind(this);
  }

  isConfigured() {
    return /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec(?:\?.*)?$/.test(this.url || "");
  }

  connect() {
    if (!this.isConfigured()) return Promise.reject(new Error("CONFIG_REQUIRED"));
    if (!this.connected) {
      window.addEventListener("message", this.onMessage);
      this.connected = true;
    }
    return Promise.resolve();
  }

  onMessage(event) {
    if (!isTrustedBridgeOrigin(event.origin)) return;
    const message = event.data;
    if (!message || message.channel !== this.channel || message.type !== "qa-lab:response" || !message.id) return;
    const pending = this.pending.get(message.id);
    if (!pending) return;
    this.cleanup(message.id);
    if (message.ok) pending.resolve(message.result);
    else pending.reject(new Error(message.error || "REQUEST_FAILED"));
  }

  cleanup(id) {
    const pending = this.pending.get(id);
    if (!pending) return;
    this.pending.delete(id);
    window.clearTimeout(pending.timer);
    pending.payload.value = "";
    pending.form.remove();
    pending.frame.remove();
  }

  async call(method, args = {}) {
    await this.connect();
    const id = randomChannel();
    return new Promise((resolve, reject) => {
      const frameName = `qa-lab-rpc-${id}`;
      const frame = document.createElement("iframe");
      frame.hidden = true;
      frame.name = frameName;
      frame.title = "Respuesta segura de QA Lab";
      frame.referrerPolicy = "no-referrer";

      const form = document.createElement("form");
      form.hidden = true;
      form.method = "post";
      form.action = this.url;
      form.target = frameName;
      form.acceptCharset = "UTF-8";

      const addField = (name, value) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.append(input);
        return input;
      };
      addField("channel", this.channel);
      addField("id", id);
      addField("method", method);
      const payload = addField("payload", JSON.stringify(args));

      const timer = window.setTimeout(() => {
        this.cleanup(id);
        reject(new Error("REQUEST_TIMEOUT"));
      }, this.timeoutMs);
      this.pending.set(id, { resolve, reject, timer, frame, form, payload });
      document.body.append(frame, form);
      form.submit();
    });
  }
}

const clientConfig = window.QA_LAB_CONFIG || {};
const bridge = new AppsScriptBridge(clientConfig.appsScriptUrl, Number(clientConfig.requestTimeoutMs) || 20000);
const state = {
  currentUser: null,
  currentTopic: null,
  currentScenario: null,
  recognition: null,
  toastTimer: null,
  token: "",
  challengeId: "",
  loginEmail: "",
  authStep: "email",
  dailyRanking: [],
  scenarioSeen: new Map(),
  supervisorRequest: 0,
  sessionEpoch: 0
};

const dom = {
  loginScreen: $("#loginScreen"), loginForm: $("#loginForm"), loginEmail: $("#loginEmail"), loginCode: $("#loginCode"),
  loginError: $("#loginError"), loginSubmit: $("#loginSubmit"), codeStep: $("#codeStep"), emailStep: $("#emailStep"),
  emailSummary: $("#loginEmailSummary"), resendCode: $("#resendCodeButton"), connectionNote: $("#connectionNote"),
  appShell: $("#appShell"), main: $("#mainContent"), homeView: $("#homeView"), detailView: $("#detailView"),
  supervisorView: $("#supervisorView"), topicGrid: $("#topicGrid"), search: $("#searchInput"), filter: $("#topicFilter"),
  crumb: $("#crumbCurrent"), toast: $("#toast"), sidebar: $("#sidebar"), drawerScrim: $("#drawerScrim"),
  menuButton: $("#menuButton"), syncState: $("#syncState")
};

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  state.toastTimer = window.setTimeout(() => dom.toast.classList.remove("is-visible"), 3600);
}

function setSync(status = "ready") {
  dom.syncState?.classList.toggle("is-busy", status === "busy");
  dom.syncState?.classList.toggle("is-offline", status === "offline");
  const label = status === "busy" ? "Sincronizando datos" : status === "offline" ? "Sin conexión" : "Datos conectados";
  dom.syncState?.setAttribute("aria-label", label);
  dom.syncState?.setAttribute("title", label);
}

async function callServer(method, payload = {}, { authenticated = true } = {}) {
  setSync("busy");
  try {
    const args = authenticated ? { ...payload, token: state.token } : payload;
    const result = await bridge.call(method, args);
    if (result?.ok === false) {
      if (result.code === "SESSION_REQUIRED") {
        localLogout("Tu sesión terminó. Ingresa nuevamente.");
      }
      const serverError = new Error(result.code || "REQUEST_FAILED");
      serverError.code = result.code || "REQUEST_FAILED";
      throw serverError;
    }
    setSync("ready");
    return result;
  } catch (error) {
    setSync(error.code ? "ready" : "offline");
    throw error;
  }
}

function setLoginBusy(busy, label) {
  dom.loginSubmit.disabled = busy;
  dom.loginSubmit.classList.toggle("is-loading", busy);
  dom.loginForm.setAttribute("aria-busy", String(busy));
  if (label) dom.loginSubmit.textContent = label;
}

function showLoginError(message = "No fue posible completar el acceso. Verifica la información o solicita ayuda.") {
  dom.loginError.textContent = message;
  dom.loginError.hidden = false;
  dom.loginError.focus?.();
}

function clearLoginError() {
  dom.loginError.hidden = true;
}

function showCodeStep(email, challengeId) {
  state.authStep = "code";
  state.loginEmail = email;
  state.challengeId = challengeId;
  dom.emailStep.hidden = true;
  dom.codeStep.hidden = false;
  dom.emailSummary.textContent = email;
  dom.resendCode.hidden = false;
  dom.loginSubmit.textContent = "Verificar y entrar";
  dom.connectionNote.textContent = "Si la cuenta tiene acceso, el código llegará en unos momentos.";
  dom.loginCode.required = true;
  dom.loginCode.focus();
}

function showEmailStep() {
  state.authStep = "email";
  state.challengeId = "";
  dom.emailStep.hidden = false;
  dom.codeStep.hidden = true;
  dom.resendCode.hidden = true;
  dom.loginCode.required = false;
  dom.loginCode.value = "";
  dom.loginSubmit.textContent = "Enviar código";
  dom.connectionNote.textContent = "La verificación se realiza de forma segura.";
  clearLoginError();
  dom.loginEmail.focus();
}

async function requestCode() {
  const email = dom.loginEmail.value.trim().toLocaleLowerCase("es-MX");
  if (!email || !dom.loginEmail.checkValidity()) {
    showLoginError("Escribe un correo válido para continuar.");
    dom.loginEmail.focus();
    return;
  }
  clearLoginError();
  setLoginBusy(true, "Enviando…");
  try {
    const result = await callServer("requestAccessCode", { email }, { authenticated: false });
    showCodeStep(email, result?.challengeId || randomChannel());
  } catch {
    showLoginError();
    dom.connectionNote.textContent = "No se pudo completar la solicitud. Intenta de nuevo.";
  } finally {
    setLoginBusy(false, state.authStep === "code" ? "Verificar y entrar" : "Enviar código");
  }
}

async function verifyCode() {
  const code = dom.loginCode.value.replace(/\D/g, "");
  if (!/^\d{8}$/.test(code)) {
    showLoginError("Ingresa el código completo para continuar.");
    dom.loginCode.focus();
    return;
  }
  clearLoginError();
  setLoginBusy(true, "Verificando…");
  try {
    const result = await callServer("verifyAccessCode", {
      email: state.loginEmail,
      challengeId: state.challengeId,
      code
    }, { authenticated: false });
    if (!result?.ok || !result.token || !result.profile) {
      showLoginError();
      dom.loginCode.select();
      return;
    }
    state.token = result.token;
    logIn(result.profile);
  } catch {
    showLoginError();
  } finally {
    setLoginBusy(false, "Verificar y entrar");
  }
}

async function resendCode() {
  if (!state.loginEmail) return;
  dom.resendCode.disabled = true;
  clearLoginError();
  try {
    const result = await callServer("requestAccessCode", { email: state.loginEmail }, { authenticated: false });
    state.challengeId = result?.challengeId || randomChannel();
    dom.loginCode.value = "";
    dom.connectionNote.textContent = "Si la cuenta tiene acceso, se envió un código nuevo.";
    dom.loginCode.focus();
  } catch {
    showLoginError();
  } finally {
    window.setTimeout(() => { dom.resendCode.disabled = false; }, 3000);
  }
}

function closeDrawer({ returnFocus = false } = {}) {
  dom.sidebar.classList.remove("is-open");
  dom.drawerScrim.hidden = true;
  document.body.classList.remove("drawer-open");
  dom.main.inert = false;
  dom.menuButton.setAttribute("aria-expanded", "false");
  dom.menuButton.setAttribute("aria-label", "Abrir menú");
  if (returnFocus) dom.menuButton.focus();
}

function openDrawer() {
  dom.sidebar.classList.add("is-open");
  dom.drawerScrim.hidden = false;
  document.body.classList.add("drawer-open");
  dom.main.inert = true;
  dom.menuButton.setAttribute("aria-expanded", "true");
  dom.menuButton.setAttribute("aria-label", "Cerrar menú");
  $(".nav-item:not([hidden])", dom.sidebar)?.focus();
}

function trapDrawerFocus(event) {
  if (event.key !== "Tab" || !dom.sidebar.classList.contains("is-open")) return;
  const controls = $$('a[href]:not([hidden]), button:not([disabled]):not([hidden]), [tabindex]:not([tabindex="-1"])', dom.sidebar)
    .filter((element) => element.getClientRects().length);
  if (!controls.length) return;
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function stopRecognition() {
  if (!state.recognition) return;
  state.recognition.stop();
  state.recognition = null;
}

function setActiveNav(hash) {
  const target = hash === "#supervisor" ? "#supervisor" : hash === "#practica" ? "#practica" : hash === "#comportamientos" || hash.startsWith("#tema/") ? "#comportamientos" : "#inicio";
  $$(".nav-item").forEach((item) => {
    const active = item.getAttribute("href") === target;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
}

function revealView(view) {
  [dom.homeView, dom.detailView, dom.supervisorView].forEach((item) => {
    item.hidden = item !== view;
    item.classList.remove("is-entering");
  });
  view.classList.add("is-entering");
  window.setTimeout(() => view.classList.remove("is-entering"), 300);
}

function showHome(anchor) {
  state.currentTopic = null;
  revealView(dom.homeView);
  dom.crumb.textContent = "Inicio";
  setActiveNav(location.hash || "#inicio");
  $(".search")?.removeAttribute("hidden");
  renderTopics();
  renderDailyBoard();
  if (anchor) {
    requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }));
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
    dom.main.focus({ preventScroll: true });
  }
}

async function showSupervisor() {
  if (!state.currentUser?.canSupervisor) {
    location.hash = "#inicio";
    showToast("No fue posible abrir esa sección.");
    return;
  }
  state.currentTopic = null;
  revealView(dom.supervisorView);
  dom.crumb.textContent = "Panel supervisor";
  setActiveNav("#supervisor");
  $(".search")?.setAttribute("hidden", "");
  window.scrollTo({ top: 0, behavior: "auto" });
  dom.main.focus({ preventScroll: true });
  await loadSupervisor();
}

function handleRoute() {
  if (!state.currentUser) return;
  stopRecognition();
  closeDrawer();
  let hash = "#inicio";
  try { hash = decodeURIComponent(location.hash || "#inicio"); }
  catch { history.replaceState(null, "", "#inicio"); }
  if (hash === "#supervisor") { showSupervisor(); return; }
  if (hash.startsWith("#tema/")) { openTopic(hash.slice(6)); return; }
  if (hash === "#comportamientos") { showHome("behaviors"); return; }
  if (hash === "#practica") { showHome("dailyPractice"); return; }
  showHome();
}

function topicById(id) {
  return topics.find((topic) => topic.id === id);
}

function normalizeSearch(value) {
  return value.toLocaleLowerCase("es-MX").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderTopics() {
  const query = normalizeSearch(dom.search.value.trim());
  const filter = dom.filter.value;
  const list = topics.filter((topic) => {
    const matchesFilter = filter === "all" || topic.tag === filter;
    return matchesFilter && (!query || normalizeSearch(`${topic.title} ${topic.description}`).includes(query));
  });
  if (!list.length) {
    dom.topicGrid.innerHTML = '<div class="empty-state"><strong>Sin coincidencias</strong><span>Prueba con otra palabra o cambia el filtro.</span></div>';
    return;
  }
  dom.topicGrid.innerHTML = list.map((topic, index) => `
    <button class="topic-card" type="button" data-topic="${topic.id}" style="--stagger:${index}">
      <span class="topic-card__top"><span class="topic-icon topic-icon--${topic.tag}">${iconSvg(topic.icon)}</span><span class="tag">${topic.tag === "conversion" ? "Conversión" : "Experiencia"}</span></span>
      <h3>${topic.title}</h3><p>${topic.description}</p><span class="topic-card__action">Consultar guía ${iconSvg("arrow")}</span>
    </button>`).join("");
}

function rankRows(attempts = state.dailyRanking) {
  if (!attempts?.length) return '<div class="empty-state"><strong>Aún no hay resultados</strong><span>Completa una práctica para iniciar el ranking.</span></div>';
  return attempts.map((attempt, index) => `
    <div class="rank-row"><span class="rank-number">${index + 1}</span><span class="rank-person"><strong>${escapeHtml(attempt.name)}</strong><small>${escapeHtml(attempt.role)}</small></span><span class="rank-topic">${escapeHtml(attempt.topic)}</span><span class="rank-score">${Number(attempt.score) || 0} pts</span></div>`).join("");
}

function renderDailyBoard() {
  $("#dailyBoard").innerHTML = rankRows();
}

async function loadHomeData() {
  const epoch = state.sessionEpoch;
  $("#dailyBoard").innerHTML = '<div class="loading-block">Cargando resultados…</div>';
  try {
    const result = await callServer("getHomeData");
    if (epoch !== state.sessionEpoch || !state.currentUser) return;
    state.dailyRanking = result?.ranking || [];
    state.topicAttempts = result?.topicAttempts || {};
    renderDailyBoard();
  } catch (error) {
    if (error.message === "SESSION_REQUIRED") return;
    $("#dailyBoard").innerHTML = '<div class="empty-state"><strong>No se pudieron cargar los resultados</strong><span>Revisa la conexión e inténtalo nuevamente.</span><button class="button button--secondary" id="retryHomeData" type="button">Reintentar</button></div>';
    $("#retryHomeData")?.addEventListener("click", loadHomeData);
  }
}

function conversationTemplate(title, channel, lines) {
  return `<article class="conversation"><div class="conversation__heading"><span>${title}</span><span>${channel}</span></div>${lines.map((line, index) => `<div class="message"><strong>${index % 2 === 0 ? "Prospecto" : "Asesor"}</strong>${escapeHtml(line)}</div>`).join("")}</article>`;
}

function levelTemplate(level, exceeds = false) {
  return `<article class="content-card"><span class="level-badge ${exceeds ? "level-badge--exceeds" : ""}">${exceeds ? "Nivel excede" : "Nivel efectivo"}</span><h2>${level.title}</h2><p class="level-summary">${level.text}</p><div class="example-grid">${conversationTemplate("Ejemplo", "Llamada", level.call)}${conversationTemplate("Ejemplo", "Chat", level.chat)}</div></article>`;
}

function metricTemplate(id, label) {
  return `<div class="metric-row"><span>${label}</span><span class="metric-track"><span id="metric-${id}"></span></span><span class="metric-value" id="metric-${id}-value">0</span></div>`;
}

function practiceTemplate() {
  return `<div class="practice-grid">
    <article class="scenario-card"><p class="kicker kicker--light">Reto de aplicación</p><h2>Responde como asesor</h2><p>Tu respuesta se evalúa con cuatro criterios.</p><div class="scenario-question" id="scenarioQuestion"></div><div class="scenario-meta"><span id="attemptCount">Sin intentos en este tema</span><span>Práctica ilimitada</span></div>
      <div class="mode-switch" aria-label="Modo de respuesta"><button class="mode-button" type="button" data-mode="text" aria-pressed="true">${iconSvg("edit")}Texto</button><button class="mode-button" type="button" data-mode="voice" aria-pressed="false">${iconSvg("mic")}Voz</button></div>
      <div class="voice-control" id="voiceControl" hidden><span class="voice-dot" aria-hidden="true"></span><span id="voiceStatus">Dicta tu respuesta y revisa la transcripción.</span><button class="button button--light" id="recordButton" type="button">Iniciar dictado</button></div>
      <label class="answer-label" for="answerInput"><span id="answerLabel">Tu respuesta</span><textarea class="answer-area" id="answerInput" maxlength="3000" placeholder="Escribe cómo responderías al prospecto"></textarea></label>
      <div class="practice-actions"><button class="button button--primary" id="evaluateButton" type="button">Evaluar respuesta</button><button class="button button--secondary" id="nextScenarioButton" type="button">Otro caso</button></div><p class="practice-feedback" id="practiceFeedback" role="status" hidden></p>
    </article>
    <div class="score-stack"><article class="score-card"><h2>Tu evaluación</h2><div class="score-summary"><div class="score-ring" id="scoreRing"><strong id="scoreValue">—</strong></div><div class="score-summary__copy"><strong id="scoreTitle">Aún no evaluada</strong><span id="scoreText">Responde el caso para ver tu resultado.</span></div></div>${metricTemplate("clarity", "Claridad")}${metricTemplate("empathy", "Empatía")}${metricTemplate("personal", "Personalización")}${metricTemplate("advance", "Avance")}</article><div class="leaderboard" id="topicRanking"></div></div>
  </div>`;
}

function openTopic(id) {
  const topic = topicById(id);
  if (!topic) { location.hash = "#inicio"; return; }
  state.currentTopic = topic;
  revealView(dom.detailView);
  dom.crumb.textContent = topic.title;
  setActiveNav("#comportamientos");
  $(".search")?.setAttribute("hidden", "");
  dom.detailView.innerHTML = `
    <a class="back-link" href="#comportamientos">${iconSvg("arrow")}Volver a comportamientos</a>
    <div class="detail-heading"><div class="detail-heading__title"><span class="topic-icon topic-icon--${topic.tag}">${iconSvg(topic.icon)}</span><div><h1>${topic.title}</h1><p>${topic.description}</p></div></div><span class="tag">${topic.tag === "conversion" ? "Conversión" : "Experiencia"}</span></div>
    <div class="detail-tabs" role="tablist" aria-label="Contenido del comportamiento"><button class="tab-button" type="button" role="tab" id="tab-guide" aria-controls="panel-guide" aria-selected="true" tabindex="0">Guía breve</button><button class="tab-button" type="button" role="tab" id="tab-effective" aria-controls="panel-effective" aria-selected="false" tabindex="-1">Nivel efectivo</button><button class="tab-button" type="button" role="tab" id="tab-exceeds" aria-controls="panel-exceeds" aria-selected="false" tabindex="-1">Nivel excede</button><button class="tab-button" type="button" role="tab" id="tab-practice" aria-controls="panel-practice" aria-selected="false" tabindex="-1">Practicar</button></div>
    <div class="tab-panel is-active" id="panel-guide" role="tabpanel" aria-labelledby="tab-guide"><div class="guide-grid"><article class="content-card"><h2>Idea central</h2><p>${topic.intro}</p><ul class="formula-list">${topic.formula.map((item) => `<li>${item}</li>`).join("")}</ul></article><article class="content-card"><h2>Antes de responder</h2><ul class="check-list">${topic.formula.map((item) => `<li>${iconSvg("check")}<span>${item}</span></li>`).join("")}<li>${iconSvg("check")}<span>Ajusta el mensaje al canal y a la persona.</span></li></ul></article></div></div>
    <div class="tab-panel" id="panel-effective" role="tabpanel" aria-labelledby="tab-effective" hidden>${levelTemplate(topic.effective)}</div><div class="tab-panel" id="panel-exceeds" role="tabpanel" aria-labelledby="tab-exceeds" hidden>${levelTemplate(topic.exceeds, true)}</div><div class="tab-panel" id="panel-practice" role="tabpanel" aria-labelledby="tab-practice" hidden>${practiceTemplate()}</div>`;
  setupTabs();
  setupPractice(topic);
  window.scrollTo({ top: 0, behavior: "auto" });
  dom.main.focus({ preventScroll: true });
}

function activateTab(tab) {
  $$(".tab-button", dom.detailView).forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(item.getAttribute("aria-controls"));
    panel.hidden = !selected;
    panel.classList.toggle("is-active", selected);
  });
}

function setupTabs() {
  const tabs = $$(".tab-button", dom.detailView);
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      activateTab(tabs[next]);
      tabs[next].focus();
    });
  });
}

function nextScenario(topic) {
  const bank = scenarioBank[topic.id] || scenarioBank.amable;
  const seen = state.scenarioSeen.get(topic.id) || [];
  let available = bank.map((text, index) => ({ text, index })).filter((item) => !seen.includes(item.index));
  if (!available.length) { seen.length = 0; available = bank.map((text, index) => ({ text, index })); }
  const picked = available[Math.floor(Math.random() * available.length)];
  seen.push(picked.index);
  state.scenarioSeen.set(topic.id, seen);
  state.currentScenario = picked.index;
  $("#scenarioQuestion").textContent = `“${picked.text}”`;
}

function setupPractice(topic) {
  nextScenario(topic);
  const count = Number(state.topicAttempts?.[topic.id]) || 0;
  $("#attemptCount").textContent = count ? `${count} intento${count === 1 ? "" : "s"} hoy` : "Sin intentos en este tema";
  $("#topicRanking").innerHTML = rankRows();
  $$(".mode-button", dom.detailView).forEach((button) => button.addEventListener("click", () => {
    const voiceMode = button.dataset.mode === "voice";
    $$(".mode-button", dom.detailView).forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    $("#voiceControl").hidden = !voiceMode;
    $("#answerLabel").textContent = voiceMode ? "Transcripción" : "Tu respuesta";
    if (!voiceMode) stopRecognition();
  }));
  $("#recordButton").addEventListener("click", toggleVoiceRecognition);
  $("#nextScenarioButton").addEventListener("click", () => resetPractice(topic));
  $("#evaluateButton").addEventListener("click", () => evaluatePractice(topic));
}

function toggleVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const control = $("#voiceControl");
  const button = $("#recordButton");
  const status = $("#voiceStatus");
  if (state.recognition) { state.recognition.stop(); return; }
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
  recognition.onerror = () => showToast("No se pudo usar el micrófono. Revisa el permiso del navegador.");
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
  stopRecognition();
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

async function evaluatePractice(topic) {
  const answer = $("#answerInput").value.trim();
  if (!answer) { showToast("Escribe o dicta una respuesta antes de evaluar."); $("#answerInput").focus(); return; }
  const button = $("#evaluateButton");
  button.disabled = true;
  button.classList.add("is-loading");
  const original = "Evaluar respuesta";
  button.textContent = "Evaluando…";
  const epoch = state.sessionEpoch;
  try {
    const result = await callServer("saveEvaluation", { topicId: topic.id, scenarioIndex: state.currentScenario, answer });
    if (epoch !== state.sessionEpoch || !state.currentUser) return;
    if (!result?.ok) throw new Error("EVALUATION_FAILED");
    const { score, metrics, title, message } = result;
    $("#scoreValue").textContent = score;
    $("#scoreTitle").textContent = title;
    $("#scoreText").textContent = message;
    $("#scoreRing").style.background = `conic-gradient(var(--blue-600) ${score * 3.6}deg, #e8eef4 0deg)`;
    const metricIds = { clarity: "clarity", empathy: "empathy", personalization: "personal", personal: "personal", advance: "advance" };
    Object.entries(metrics || {}).forEach(([metric, rawValue]) => {
      const id = metricIds[metric];
      const bar = id ? $(`#metric-${id}`) : null;
      const label = id ? $(`#metric-${id}-value`) : null;
      if (!bar || !label) return;
      const value = Math.max(0, Math.min(100, Number(rawValue) || 0));
      bar.style.width = `${value}%`;
      label.textContent = value;
    });
    state.dailyRanking = result.ranking || state.dailyRanking;
    state.topicAttempts = { ...(state.topicAttempts || {}), [topic.id]: result.attemptCount };
    $("#attemptCount").textContent = `${result.attemptCount} intento${result.attemptCount === 1 ? "" : "s"} hoy`;
    $("#practiceFeedback").textContent = message;
    $("#practiceFeedback").hidden = false;
    $("#topicRanking").innerHTML = rankRows();
    renderDailyBoard();
    showToast(`Evaluación guardada: ${score} puntos.`);
  } catch (error) {
    if (error.message !== "SESSION_REQUIRED") showToast("No se pudo guardar la evaluación. Intenta nuevamente.");
  } finally {
    button.disabled = false;
    button.classList.remove("is-loading");
    button.textContent = original;
  }
}

function renderSupervisor(data) {
  $("#supervisorDate").textContent = data.label || "Hoy";
  $("#kpiParticipants").textContent = data.kpis?.participants || 0;
  $("#kpiAttempts").textContent = data.kpis?.attempts || 0;
  $("#kpiAverage").textContent = data.kpis?.average || 0;
  $("#supervisorRanking").innerHTML = data.ranking?.length ? data.ranking.map((attempt, index) => `<div class="super-rank"><span class="rank-number">${index + 1}</span><span class="rank-avatar">${escapeHtml(getInitials(attempt.name))}</span><span><strong>${escapeHtml(attempt.name)}</strong><small>${escapeHtml(attempt.topic)}</small></span><span class="rank-score">${Number(attempt.score) || 0}</span></div>`).join("") : '<div class="empty-state"><strong>Sin resultados</strong><span>El ranking aparecerá con la primera evaluación.</span></div>';
  $("#behaviorPerformance").innerHTML = topics.map((topic) => {
    const score = Number(data.performance?.[topic.id]) || 0;
    return `<div class="behavior-line"><div class="behavior-line__labels"><span>${topic.title}</span><strong>${score} pts</strong></div><div class="behavior-track"><span style="width:${score}%"></span></div></div>`;
  }).join("");
  $("#recentAttempts").innerHTML = data.recent?.length ? `<div class="data-row data-row--header"><span>Participante</span><span>Comportamiento</span><span>Resultado</span><span>Estado</span></div>${data.recent.map((attempt) => `<div class="data-row"><strong>${escapeHtml(attempt.name)}</strong><span>${escapeHtml(attempt.topic)}</span><span>${Number(attempt.score) || 0} puntos</span><span class="status-chip">Evaluado</span></div>`).join("")}` : '<div class="empty-state"><strong>Sin actividad reciente</strong><span>Los intentos del día aparecerán aquí.</span></div>';
}

async function loadSupervisor() {
  const requestId = ++state.supervisorRequest;
  const epoch = state.sessionEpoch;
  $("#supervisorRanking").innerHTML = '<div class="loading-block">Cargando panel…</div>';
  $("#behaviorPerformance").innerHTML = '<div class="loading-block">Cargando resultados…</div>';
  $("#recentAttempts").innerHTML = '<div class="loading-block">Cargando actividad…</div>';
  try {
    const result = await callServer("getSupervisorData");
    if (requestId !== state.supervisorRequest || epoch !== state.sessionEpoch || !state.currentUser) return;
    if (!result?.ok) {
      location.hash = "#inicio";
      showToast("No fue posible abrir esa sección.");
      return;
    }
    renderSupervisor(result);
  } catch (error) {
    if (requestId !== state.supervisorRequest || epoch !== state.sessionEpoch || error.message === "SESSION_REQUIRED") return;
    $("#supervisorRanking").innerHTML = '<div class="empty-state"><strong>No se pudo cargar el panel</strong><span>Revisa la conexión y vuelve a intentarlo.</span></div>';
    $("#behaviorPerformance").innerHTML = "";
    $("#recentAttempts").innerHTML = "";
  }
}

function logIn(profile) {
  state.sessionEpoch += 1;
  state.currentUser = profile;
  dom.loginScreen.hidden = true;
  dom.appShell.hidden = false;
  $("#currentUser").textContent = profile.name;
  $("#currentRole").textContent = profile.role;
  $("#userAvatar").textContent = getInitials(profile.name);
  $("#supervisorNav").hidden = !profile.canSupervisor;
  $("#adminNav").hidden = !profile.canAdmin;
  $("#staffNavigation").hidden = !profile.canSupervisor && !profile.canAdmin;
  if (profile.canAdmin && bridge.isConfigured()) {
    const adminUrl = new URL(clientConfig.appsScriptUrl);
    adminUrl.searchParams.set("page", "admin");
    $("#adminNav").href = adminUrl.toString();
  }
  if (!location.hash) history.replaceState(null, "", "#inicio");
  handleRoute();
  loadHomeData();
}

function localLogout(message = "") {
  stopRecognition();
  state.sessionEpoch += 1;
  state.supervisorRequest += 1;
  state.currentUser = null;
  state.token = "";
  state.dailyRanking = [];
  dom.appShell.hidden = true;
  dom.loginScreen.hidden = false;
  dom.loginForm.reset();
  history.replaceState(null, "", "#inicio");
  showEmailStep();
  dom.connectionNote.textContent = message || "La verificación se realiza de forma segura.";
}

async function logOut() {
  const token = state.token;
  localLogout();
  if (token) {
    try { await bridge.call("logoutSession", { token }); } catch { /* La sesión local ya fue eliminada. */ }
  }
}

function bindEvents() {
  dom.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (state.authStep === "email") requestCode();
    else verifyCode();
  });
  $("#changeEmailButton").addEventListener("click", showEmailStep);
  dom.resendCode.addEventListener("click", resendCode);
  $("#logoutButton").addEventListener("click", logOut);
  dom.menuButton.addEventListener("click", () => dom.sidebar.classList.contains("is-open") ? closeDrawer({ returnFocus: true }) : openDrawer());
  dom.drawerScrim.addEventListener("click", () => closeDrawer({ returnFocus: true }));
  dom.topicGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-topic]");
    if (card) location.hash = `#tema/${card.dataset.topic}`;
  });
  dom.search.addEventListener("input", renderTopics);
  dom.filter.addEventListener("change", renderTopics);
  $("#refreshSupervisor").addEventListener("click", loadSupervisor);
  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("online", () => setSync("ready"));
  window.addEventListener("offline", () => setSync("offline"));
  window.addEventListener("keydown", (event) => {
    trapDrawerFocus(event);
    if (event.key === "Escape" && dom.sidebar.classList.contains("is-open")) closeDrawer({ returnFocus: true });
  });
}

async function initialize() {
  if (window.top !== window.self) {
    document.body.replaceChildren();
    const notice = document.createElement("p");
    notice.textContent = "Abre QA Lab en una pestaña independiente para continuar.";
    notice.style.cssText = "max-width:36rem;margin:18vh auto;padding:24px;font:600 16px/1.5 sans-serif;text-align:center";
    document.body.append(notice);
    return;
  }
  try { sessionStorage.removeItem("qaLabSession_v1"); } catch { /* Limpieza de una versión anterior. */ }
  hydrateIcons();
  bindEvents();
  renderTopics();
  renderDailyBoard();
  dom.loginSubmit.disabled = true;
  try {
    await bridge.connect();
    dom.loginSubmit.disabled = false;
    dom.connectionNote.textContent = "La verificación se realiza de forma segura.";
  } catch (error) {
    if (error.code === "SESSION_REQUIRED" || error.message === "SESSION_REQUIRED") {
      dom.loginSubmit.disabled = false;
      dom.connectionNote.classList.remove("is-error");
      dom.connectionNote.textContent = "Tu sesión terminó. Ingresa nuevamente.";
      return;
    }
    dom.loginSubmit.disabled = true;
    dom.connectionNote.classList.add("is-error");
    dom.connectionNote.textContent = error.message === "CONFIG_REQUIRED" ? "Falta conectar el servicio de acceso." : "No se pudo conectar con el servicio. Intenta más tarde.";
  }
}

initialize();
