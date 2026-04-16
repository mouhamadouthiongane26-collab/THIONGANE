// Script principal du site gaindé
// Gère : menu mobile, sous-menus, année dynamique, simulation d'envoi du formulaire.

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  // Ouverture / fermeture du menu mobile
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Fermer le menu au clic sur un lien
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");

        mainNav.querySelectorAll(".nav-item").forEach((item) => {
          item.classList.remove("dropdown-open");
        });

        mainNav.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    });

    // Gestion des sous-menus
    mainNav.querySelectorAll(".nav-item.has-dropdown").forEach((item) => {
      const toggle = item.querySelector(".dropdown-toggle");
      if (!toggle) {
        return;
      }

      toggle.addEventListener("click", (event) => {
        event.preventDefault();
        const isOpen = item.classList.toggle("dropdown-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  // Mise à jour automatique de l'année dans le footer
  const currentYear = document.getElementById("current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Simulation d'envoi du formulaire de contact
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Validation HTML5 basique
      if (!form.checkValidity()) {
        feedback.textContent = "Merci de remplir correctement tous les champs.";
        feedback.style.color = "#ffd3ad";
        return;
      }

      const formData = new FormData(form);
      const nom = formData.get("nom");

      feedback.textContent = `Merci ${nom}, votre demande a bien été envoyée (simulation).`;
      feedback.style.color = "#9bf2bf";
      form.reset();
    });
  }
});
