// Script principal du site gaindé
// Gère : menu mobile, année dynamique, simulation d'envoi du formulaire.

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
        feedback.style.color = "#ffb3b3";
        return;
      }

      const formData = new FormData(form);
      const nom = formData.get("nom");

      feedback.textContent = `Merci ${nom}, votre demande a bien été envoyée (simulation).`;
      feedback.style.color = "#9fe7b1";
      form.reset();
    });
  }
});
