/**
 * Exaustech - Sistema de Monitoramento Inteligente
 * Arquivo JavaScript Principal
 * Versão: 2.0
 * Data: Novembro 2025
 */

// ========================================
// THEME MANAGEMENT
// ========================================
const ThemeManager = {
  themeToggle: null,
  sunIcon: null,
  moonIcon: null,
  htmlElement: document.documentElement,

  init() {
    this.themeToggle = document.getElementById("themeToggle");
    this.sunIcon = document.querySelector(".sun-icon");
    this.moonIcon = document.querySelector(".moon-icon");

    // Carregar tema salvo ou usar preferência do sistema
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    // Aplicar tema inicial
    if (currentTheme === "dark") {
      this.setDarkMode();
    }

    // Event listener para toggle
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
  },

  toggleTheme() {
    const currentTheme = this.htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    this.htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      this.setDarkMode();
    } else {
      this.setLightMode();
    }
  },

  setDarkMode() {
    this.htmlElement.setAttribute("data-theme", "dark");
    this.sunIcon.style.display = "none";
    this.moonIcon.style.display = "block";
  },

  setLightMode() {
    this.htmlElement.setAttribute("data-theme", "light");
    this.sunIcon.style.display = "block";
    this.moonIcon.style.display = "none";
  },
};

// ========================================
// NAVIGATION MANAGEMENT
// ========================================
const NavigationManager = {
  init() {
    // Menu toggle para mobile (acessível)
    window.toggleMenu = () => {
      const nav = document.getElementById("mainNav");
      nav.classList.toggle("active");
    };

    // Ligar botão .menu-toggle ao comportamento do menu e atualizar aria-expanded
    const nav = document.getElementById("mainNav");
    const menuToggleBtn = document.querySelector(".menu-toggle");
    if (menuToggleBtn && nav) {
      // garantir atributos básicos
      if (!menuToggleBtn.hasAttribute("aria-controls")) {
        menuToggleBtn.setAttribute("aria-controls", "mainNav");
      }
      if (!menuToggleBtn.hasAttribute("aria-expanded")) {
        menuToggleBtn.setAttribute("aria-expanded", "false");
      }

      menuToggleBtn.addEventListener("click", () => {
        const isActive = nav.classList.toggle("active");
        menuToggleBtn.setAttribute("aria-expanded", String(isActive));
        // toggle visual state (hamburger -> X)
        menuToggleBtn.classList.toggle("open", isActive);
      });
    }

    // Dropdown "Mais" behavior (desktop)
    const moreToggle = document.querySelector(".more-toggle");
    const moreDropdown = document.querySelector(".more-dropdown");
    if (moreToggle && moreDropdown) {
      moreToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = moreDropdown.classList.toggle("open");
        moreToggle.setAttribute("aria-expanded", String(isOpen));
      });

      // close dropdown on outside click
      document.addEventListener("click", (e) => {
        if (!moreDropdown.contains(e.target)) {
          moreDropdown.classList.remove("open");
          moreToggle.setAttribute("aria-expanded", "false");
        }
      });

      // keyboard: Esc to close
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          moreDropdown.classList.remove("open");
          moreToggle.setAttribute("aria-expanded", "false");
          moreToggle.focus();
        }
      });
    }

    // Scroll effect no header
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          document.getElementById("mainNav").classList.remove("active");
        }
      });
    });
  },
};

// ========================================
// ANIMATIONS & REVEALS
// ========================================
const AnimationManager = {
  init() {
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  },
};

// ========================================
// VERSION TOGGLE (Comercial/Técnico)
// ========================================
const VersionToggleManager = {
  init() {
    const toggleCommercial = document.getElementById("toggleCommercial");
    const toggleTechnical = document.getElementById("toggleTechnical");

    // Se não existir alternância de versão na página, não fazer nada
    if (!toggleCommercial || !toggleTechnical) {
      return;
    }

    const setVersion = (version) => {
      document
        .querySelectorAll("#missao-visao-valores .commercial")
        .forEach((el) => {
          el.style.display = version === "commercial" ? "" : "none";
        });
      document
        .querySelectorAll("#missao-visao-valores .technical")
        .forEach((el) => {
          el.style.display = version === "technical" ? "" : "none";
        });

      if (version === "commercial") {
        toggleCommercial.classList.add("active");
        toggleTechnical.classList.remove("active");
      } else {
        toggleTechnical.classList.add("active");
        toggleCommercial.classList.remove("active");
      }
    };

    toggleCommercial.addEventListener("click", () => setVersion("commercial"));
    toggleTechnical.addEventListener("click", () => setVersion("technical"));

    // Default version
    setVersion("commercial");
  },
};

// ========================================
// ACCORDION MANAGEMENT (Mobile Cards)
// ========================================
const AccordionManager = {
  init() {
    const accordCards = document.querySelectorAll(".feature-card.accord");

    accordCards.forEach((card) => {
      const header = card.querySelector("h3");
      if (!header.dataset.bound) {
        header.dataset.bound = "true";

        const toggle = () => {
          card.classList.toggle("open");
          const expanded = card.classList.contains("open");
          header.setAttribute("aria-expanded", expanded);

          const content = card.querySelector(".card-content");
          if (expanded) {
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            content.style.maxHeight = null;
          }
        };

        header.addEventListener("click", toggle);
        header.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        });

        header.setAttribute("tabindex", "0");
        header.setAttribute("role", "button");
        header.setAttribute("aria-expanded", "false");
      }
    });
  },
};

// ========================================
// RIPPLE EFFECT
// ========================================
const RippleManager = {
  init() {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn");
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const circle = document.createElement("span");
      circle.className = "ripple";
      const size = Math.max(rect.width, rect.height);
      circle.style.width = circle.style.height = size + "px";
      circle.style.left = e.clientX - rect.left - size / 2 + "px";
      circle.style.top = e.clientY - rect.top - size / 2 + "px";
      btn.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 700);
    });
  },
};

// ========================================
// COUNTERS ANIMATION
// ========================================
const CounterManager = {
  animateCounters() {
    document.querySelectorAll(".count").forEach((el) => {
      const target = +el.getAttribute("data-count");
      if (!target) return;

      const duration = 1500;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.floor(progress * target);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };

      window.requestAnimationFrame(step);
    });
  },

  init() {
    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      const statsObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateCounters();
              obs.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      statsObserver.observe(statsSection);
    }
  },
};

// ========================================
// INSTALLATION TABS
// ========================================
const InstallationTabsManager = {
  init() {
    const tabButtons = document.querySelectorAll(".install-tab");
    const tabPanels = document.querySelectorAll(".install-panel");

    const activateTab = (targetSelector) => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      const btn = Array.from(tabButtons).find(
        (b) => b.getAttribute("data-target") === targetSelector
      );
      const panel = document.querySelector(targetSelector);

      if (btn) btn.classList.add("active");
      if (panel) panel.classList.add("active");
    };

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        activateTab(target);
      });
    });
  },
};

// ========================================
// BACK TO TOP BUTTON
// ========================================
const BackToTopManager = {
  init() {
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  },
};

// ========================================
// SVG INTERACTIVITY & SIMULATOR
// ========================================
const SVGManager = {
  tooltip: null,
  simInterval: null,
  activeBubbles: new Set(),

  init() {
    this.tooltip = document.getElementById("svgTooltip");
    this.setupTooltips();
    this.setupSimulator();
  },

  showTooltip(text, x, y) {
    this.tooltip.textContent = text;
    this.tooltip.style.left = x + "px";
    this.tooltip.style.top = y + "px";
    this.tooltip.style.opacity = "1";
    this.tooltip.setAttribute("aria-hidden", "false");
  },

  hideTooltip() {
    this.tooltip.style.opacity = "0";
    this.tooltip.setAttribute("aria-hidden", "true");
  },

  setupTooltips() {
    const topoPaths = document.querySelectorAll(
      '.topo-svg .link, .topo-svg .link2, .topo-svg path[id$="_srv_c"]'
    );

    if (topoPaths.length) {
      topoPaths.forEach((path) => {
        path.addEventListener("mouseenter", (e) => {
          path.style.strokeWidth = 5;
          path.style.opacity = 0.95;

          const rect = path.getBoundingClientRect();
          const latency = path.getAttribute("data-latency") || "";
          const port = path.getAttribute("data-port") || "";
          const isSrv = /_srv_c$/.test(path.id);

          if (isSrv) {
            this.showTooltip(
              `fluxo: servidor → cliente`,
              rect.left + rect.width / 2,
              rect.top + 8
            );
          } else {
            this.showTooltip(
              `latência: ${latency} ${port ? "• porta: " + port : ""}`,
              rect.left + rect.width / 2,
              rect.top + 8
            );
          }
        });

        path.addEventListener("mousemove", (e) => {
          this.showTooltip(this.tooltip.textContent, e.clientX, e.clientY - 12);
        });

        path.addEventListener("mouseleave", (e) => {
          path.style.strokeWidth = "";
          path.style.opacity = "";
          this.hideTooltip();
        });
      });
    }
  },

  spawnBubbleOnPath(pathEl, duration = 3000) {
    const svg = pathEl.ownerSVGElement;
    const bubble = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    bubble.setAttribute("r", "6");
    bubble.setAttribute("fill", "#fff");
    bubble.setAttribute("opacity", "0.95");
    svg.appendChild(bubble);

    const pathLength = pathEl.getTotalLength();
    const start = performance.now();
    const id = Symbol();
    this.activeBubbles.add(id);

    const step = (ts) => {
      const t = (ts - start) / duration;
      if (t > 1 || !this.activeBubbles.has(id)) {
        bubble.remove();
        this.activeBubbles.delete(id);
        return;
      }
      const point = pathEl.getPointAtLength(t * pathLength);
      bubble.setAttribute("cx", point.x);
      bubble.setAttribute("cy", point.y);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },

  startSimulation() {
    if (this.simInterval) return;

    const allPaths = Array.from(
      document.querySelectorAll(
        '#topoA .link, #topoA path[id$="_srv_c"], #topoA .link2, #topoB .link2, #topoB path[id$="_srv_c"]'
      )
    );

    this.simInterval = setInterval(() => {
      const p = allPaths[Math.floor(Math.random() * allPaths.length)];
      if (p) this.spawnBubbleOnPath(p, 2200 + Math.random() * 1800);
    }, 500);
  },

  stopSimulation() {
    clearInterval(this.simInterval);
    this.simInterval = null;
    document.querySelectorAll(".topo-svg circle").forEach((c) => c.remove());
    this.activeBubbles.clear();
  },

  setupSimulator() {
    const simStartBtn = document.getElementById("simStart");
    const simStopBtn = document.getElementById("simStop");

    if (simStartBtn && simStopBtn) {
      simStartBtn.addEventListener("click", () => this.startSimulation());
      simStopBtn.addEventListener("click", () => this.stopSimulation());
    }
  },
};

// ========================================
// 3D MODEL VIEWER MANAGER
// ========================================
const ModelViewerManager = {
  viewer: null,

  init() {
    // Verificar se o container existe
    const container = document.getElementById("model-viewer-container");
    if (!container || typeof Model3DViewer === "undefined") {
      return;
    }

    // Caminho para o modelo 3D (suporta .glb, .gltf, .fbx)
    const modelPath = "images/bb-2.glb";

    try {
      this.viewer = new Model3DViewer("model-viewer-container", modelPath);
    } catch (error) {
      console.error("Erro ao inicializar visualizador 3D:", error);
    }
  },
};

// ========================================
// SERVER POPUP MANAGER
// ========================================
const ServerPopupManager = {
  popup: null,
  backdrop: null,
  iframe: null,
  openButtons: [],
  closeButton: null,

  init() {
    this.popup = document.getElementById("serverPopup");
    this.backdrop = document.getElementById("serverPopupBackdrop");
    this.iframe = document.getElementById("serverPopupFrame");
    this.closeButton = document.getElementById("closeServerPopup");

    // buttons that open the popup (header button added)
    const headerBtn = document.getElementById("openServerPopupHeader");
    if (headerBtn) this.openButtons.push(headerBtn);

    this.openButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.open();
      });
    });

    if (this.closeButton)
      this.closeButton.addEventListener("click", () => this.close());
    if (this.backdrop)
      this.backdrop.addEventListener("click", () => this.close());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
  },

  open() {
    if (!this.popup) return;
    this.popup.setAttribute("aria-hidden", "false");
    // reload iframe to ensure fresh content
    if (this.iframe) {
      // set src again to force reload
      const src = this.iframe.getAttribute("src");
      this.iframe.setAttribute("src", src);
    }
    // lock scroll
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  },

  close() {
    if (!this.popup) return;
    this.popup.setAttribute("aria-hidden", "true");
    // stop iframe media by clearing src (optional): keep src to allow quick reopen
    // unlock scroll
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  },
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  ThemeManager.init();
  NavigationManager.init();
  AnimationManager.init();
  VersionToggleManager.init();
  AccordionManager.init();
  RippleManager.init();
  CounterManager.init();
  InstallationTabsManager.init();
  BackToTopManager.init();
  SVGManager.init();
  ModelViewerManager.init(); // Inicializar visualizador 3D
  ServerPopupManager.init(); // Inicializar popup de exemplo de servidor

  // Re-run accordion setup on resize (for mobile)
  window.addEventListener("resize", () => {
    AccordionManager.init();
  });
});
