(() => {
  "use strict";

  const body = document.body;
  const appShell = document.getElementById("appShell");
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("mainContent");
  const search = document.querySelector(".search");
  const navItems = [...document.querySelectorAll(".nav-item")];

  function routeState() {
    const hash = decodeURIComponent(location.hash || "#inicio");
    if (hash === "#supervisor") return { view: "supervisor", nav: "#supervisor", search: false, title: "Panel supervisor" };
    if (hash.startsWith("#tema/")) return { view: "detail", nav: "#comportamientos", search: false, title: "Comportamiento" };
    if (hash === "#comportamientos") return { view: "home", nav: "#comportamientos", search: true, title: "Comportamientos" };
    if (hash === "#practica") return { view: "home", nav: "#practica", search: false, title: "Práctica del día" };
    return { view: "home", nav: "#inicio", search: true, title: "Inicio" };
  }

  function syncRoutePresentation() {
    const route = routeState();
    body.dataset.view = route.view;
    if (search) search.hidden = !route.search;

    navItems.forEach((item) => {
      const active = item.getAttribute("href") === route.nav;
      item.classList.toggle("is-active", active);
      if (active) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });

    document.title = route.title === "Inicio"
      ? "QA Lab | Borrador visual"
      : `${route.title} · QA Lab`;
  }

  function drawerIsOpen() {
    return sidebar?.classList.contains("is-open") ?? false;
  }

  function syncDrawerAccessibility() {
    const open = drawerIsOpen();
    if (main) main.inert = open;
    if (sidebar) sidebar.setAttribute("aria-modal", String(open));
  }

  function drawerFocusables() {
    if (!sidebar) return [];
    return [...sidebar.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])")]
      .filter((element) => !element.hidden && element.getClientRects().length > 0);
  }

  function trapDrawerFocus(event) {
    if (event.key !== "Tab" || !drawerIsOpen()) return;
    const focusables = drawerFocusables();
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function stopActiveDictationBeforeLeaving(event) {
    if (!event.target.closest("a[href^='#']")) return;
    const voiceControl = document.getElementById("voiceControl");
    const recordButton = document.getElementById("recordButton");
    if (voiceControl?.classList.contains("is-recording") && recordButton) recordButton.click();
  }

  window.addEventListener("hashchange", syncRoutePresentation);
  document.addEventListener("keydown", trapDrawerFocus, true);
  document.addEventListener("click", stopActiveDictationBeforeLeaving, true);

  if (sidebar) {
    new MutationObserver(syncDrawerAccessibility).observe(sidebar, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  if (appShell) {
    new MutationObserver(syncRoutePresentation).observe(appShell, {
      attributes: true,
      attributeFilter: ["hidden"]
    });
  }

  syncRoutePresentation();
  syncDrawerAccessibility();
})();
