(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var nav = document.getElementById("main-nav");
  var navToggle = document.getElementById("nav-toggle");
  var themeToggle = document.getElementById("theme-toggle");
  var form = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");
  var yearEl = document.getElementById("year");

  /* Footer year */
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Sticky header shadow */
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile navigation */
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navToggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
      nav.classList.toggle("open", !expanded);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        nav.classList.remove("open");
      });
    });
  }

  /* Dark mode */
  var STORAGE_KEY = "florice-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore */
    }
  }

  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }

    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
      return;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    }
  }

  initTheme();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");

  /* Above-the-fold content should render immediately */
  document.querySelectorAll(".hero .reveal, .credibility-strip .reveal, .mission-strip .reveal").forEach(function (el) {
    el.classList.add("visible");
  });

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* Contact form — Netlify-ready with local fallback */
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var isNetlify = form.hasAttribute("data-netlify");

      if (formStatus) {
        formStatus.textContent = "Sending…";
      }

      if (isNetlify && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString(),
        })
          .then(function () {
            form.reset();
            if (formStatus) {
              formStatus.textContent = "Thank you. We will respond within one business day.";
            }
          })
          .catch(function () {
            if (formStatus) {
              formStatus.textContent = "Something went wrong. Please email consult@floricemilling.com directly.";
            }
          });
      } else {
        /* Local preview — simulate success */
        setTimeout(function () {
          form.reset();
          if (formStatus) {
            formStatus.textContent = "Form ready for Netlify. Locally: submission captured (demo mode).";
          }
        }, 600);
      }
    });
  }
})();
