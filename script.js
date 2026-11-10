/**
 * ==============================================================================
 * GEMINI PRO 18M — CONFIGURAÇÃO E COMPORTAMENTO INTERATIVO
 * ==============================================================================
 */

// ==========================================
// 1. CONFIGURAÇÃO CENTRALIZADA (EDITE AQUI)
// ==========================================
const CONFIG = {
  // INSIRA AQUI O LINK OFICIAL DO SEU CHECKOUT NA CAKTO:
  CAKTO_CHECKOUT_URL: "https://cakto.com.br/checkout/gemini-pro-18m",

  // CANAL DE SUPORTE NO WHATSAPP (Link completo com DDI + DDD + Número):
  SUPPORT_WHATSAPP_URL: "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20a%20oferta%20do%20Gemini%20Pro%2018%20Meses.",

  // E-MAIL DE ATENDIMENTO AO CLIENTE:
  SUPPORT_EMAIL: "suporte@seudominio.com",

  // IDENTIFICAÇÃO DO VENDEDOR INDEPENDENTE:
  SELLER_NAME: "Digital AI Tech Soluções Independentes",
  SELLER_CNPJ_OR_ID: "Representação Comercial Independente"
};

// ==========================================
// 2. INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initCheckoutLinks();
  initSupportLinks();
  initHeaderScroll();
  initMobileMenu();
  initFaqAccordion();
  initScrollReveal();
  initModals();
  initInteractiveMockup();
});

/**
 * Atualiza todos os botões de compra para o link configurado da Cakto
 */
function initCheckoutLinks() {
  const checkoutElements = document.querySelectorAll("[data-cakto-checkout]");
  
  checkoutElements.forEach((el) => {
    if (el.tagName.toLowerCase() === "a") {
      el.href = CONFIG.CAKTO_CHECKOUT_URL;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el.addEventListener("click", () => {
        window.open(CONFIG.CAKTO_CHECKOUT_URL, "_blank", "noopener,noreferrer");
      });
    }
  });
}

/**
 * Configura links de suporte e dados do vendedor na página
 */
function initSupportLinks() {
  const supportLinks = document.querySelectorAll("[data-support-whatsapp]");
  supportLinks.forEach((el) => {
    el.href = CONFIG.SUPPORT_WHATSAPP_URL;
  });

  const emailLinks = document.querySelectorAll("[data-support-email]");
  emailLinks.forEach((el) => {
    el.textContent = CONFIG.SUPPORT_EMAIL;
    if (el.tagName.toLowerCase() === "a") {
      el.href = `mailto:${CONFIG.SUPPORT_EMAIL}`;
    }
  });

  const sellerDisplays = document.querySelectorAll("[data-seller-name]");
  sellerDisplays.forEach((el) => {
    el.textContent = CONFIG.SELLER_NAME;
  });
}

/**
 * Efeito visual de vidro e sombra no cabeçalho durante a rolagem
 */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Menu móvel responsivo com botão hambúrguer
 */
function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileDrawer = document.querySelector(".mobile-drawer");
  const navLinks = document.querySelectorAll(".mobile-drawer a");

  if (!menuToggle || !mobileDrawer) return;

  const toggleMenu = () => {
    const isOpen = menuToggle.classList.toggle("is-active");
    mobileDrawer.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    menuToggle.classList.remove("is-active");
    mobileDrawer.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (
      mobileDrawer.classList.contains("is-open") &&
      !mobileDrawer.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });
}

/**
 * Sistema de perguntas frequentes expansíveis (Accordion)
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Fechar outros itens abertos para manter visual limpo
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
          const btn = other.querySelector(".faq-question");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      });

      // Alternar o atual
      if (isOpen) {
        item.classList.remove("is-open");
        questionBtn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Animação suave dos elementos ao entrar na tela (Scroll Reveal)
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

/**
 * Gerenciador dos Modais de Políticas e Termos
 */
function initModals() {
  const modalTriggers = document.querySelectorAll("[data-modal-target]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");
  const overlays = document.querySelectorAll(".modal-overlay");

  modalTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-modal-target");
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeModal = (modal) => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-overlay");
      if (modal) closeModal(modal);
    });
  });

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlays.forEach((overlay) => {
        if (overlay.classList.contains("is-open")) {
          closeModal(overlay);
        }
      });
    }
  });
}

/**
 * Card interativo de demonstração do ecossistema Gemini Pro no Hero
 */
function initInteractiveMockup() {
  const mockupUserText = document.getElementById("mockup-user-query");
  const mockupAiText = document.getElementById("mockup-ai-response");
  const promptButtons = document.querySelectorAll(".mockup-pill-btn");

  if (!mockupUserText || !mockupAiText || !promptButtons.length) return;

  const demoData = {
    "pesquisa": {
      q: "NotebookLM: Resuma este PDF técnico e elabore um plano de ação",
      r: "Sintetizei 84 páginas em 4 tópicos estratégicos com fontes citadas e gerei uma minuta de planejamento pronta para uso."
    },
    "video": {
      q: "Veo 3: Gerar conceito de animação em alta resolução para produto",
      r: "Prompt estruturado com parâmetros de iluminação cinematográfica, 60fps e renderização pronta para pré-visualização."
    },
    "drive": {
      q: "Google Drive: Status da cota de armazenamento em nuvem",
      r: "Cota de 5.000 GB (5 TB) ativa e vinculada ao seu e-mail. Espaço disponível para backups e grandes bibliotecas."
    }
  };

  promptButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      promptButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const key = btn.getAttribute("data-demo-key");
      const data = demoData[key];

      if (data) {
        mockupUserText.style.opacity = "0";
        mockupAiText.style.opacity = "0";

        setTimeout(() => {
          mockupUserText.textContent = data.q;
          mockupAiText.textContent = data.r;
          mockupUserText.style.opacity = "1";
          mockupAiText.style.opacity = "1";
        }, 180);
      }
    });
  });
}
