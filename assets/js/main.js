/* SIGINTENT — main.js : mobile menu + theme toggle */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("is-open"))
    );
  }

  // theme toggle
  const themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = () => {
      const attr = root.getAttribute("data-theme");
      if (attr) return attr;
      return mq.matches ? "dark" : "light";
    };

    const sync = () => {
      themeBtn.setAttribute("aria-pressed", currentTheme() === "dark" ? "true" : "false");
    };

    themeBtn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });

    mq.addEventListener("change", () => {
      try { if (!localStorage.getItem("theme")) sync(); } catch (e) { sync(); }
    });

    sync();
  }
});
