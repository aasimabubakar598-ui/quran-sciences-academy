
/* =========================================================
   QURAN SCIENCES ACADEMY
   SHARED APPLICATION SCRIPT — /app.js
   ========================================================= */

(() => {
  "use strict";

  const STORAGE_KEY = "academy-language";

  // Student Portal has its own language handling.
  // Do not let this shared script interfere with it.
  if (
    document.documentElement.dataset.page === "student-portal"
  ) {
    return;
  }

  let currentLanguage = "ar";

  try {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (savedLanguage === "ar" || savedLanguage === "en") {
      currentLanguage = savedLanguage;
    }
  } catch (error) {
    console.warn("Language preference could not be read:", error);
  }

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

  function isArabic() {
    return currentLanguage === "ar";
  }

  function setLanguage(language) {
    if (language !== "ar" && language !== "en") {
      return;
    }

    currentLanguage = language;

    const html = document.documentElement;
    const body = document.body;

    html.lang = language;
    html.dir = isArabic() ? "rtl" : "ltr";

    if (body) {
      body.dir = html.dir;
    }

    // Translate elements containing data-ar and data-en.
    $$("[data-ar][data-en]").forEach(element => {
      const translatedText = element.dataset[language];

      if (translatedText !== undefined) {
        element.textContent = translatedText;
      }
    });

    // Translate placeholders.
    $$("[data-placeholder-ar][data-placeholder-en]")
      .forEach(element => {
        const placeholder = isArabic()
          ? element.dataset.placeholderAr
          : element.dataset.placeholderEn;

        if (placeholder !== undefined) {
          element.placeholder = placeholder;
        }
      });

    // Translate titles and accessibility labels.
    $$("[data-title-ar][data-title-en]").forEach(element => {
      element.title = isArabic()
        ? element.dataset.titleAr
        : element.dataset.titleEn;
    });

    $$("[data-label-ar][data-label-en]").forEach(element => {
      element.setAttribute(
        "aria-label",
        isArabic()
          ? element.dataset.labelAr
          : element.dataset.labelEn
      );
    });

    // Update language toggle.
    const languageButton = $("#languageToggle");

    if (languageButton) {
      languageButton.textContent = isArabic()
        ? "English"
        : "العربية";

      languageButton.setAttribute(
        "aria-label",
        isArabic() ? "Switch to English" : "التبديل إلى العربية"
      );
    }

    // Translate document title when translations are provided.
    const titleElement = $("title");

    if (titleElement) {
      const arabicTitle = titleElement.dataset.ar;
      const englishTitle = titleElement.dataset.en;

      if (arabicTitle || englishTitle) {
        titleElement.textContent = isArabic()
          ? (arabicTitle || englishTitle)
          : (englishTitle || arabicTitle);
      }
    }

    // Save language preference.
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      console.warn("Language preference could not be saved:", error);
    }

    // Update footer year.
    const yearElement = $("#year");

    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    // Notify other page scripts if they need to react.
    document.dispatchEvent(
      new CustomEvent("academy:languageChanged", {
        detail: { language }
      })
    );
  }

  function initializeApp() {
    const languageButton = $("#languageToggle");

    if (languageButton) {
      languageButton.addEventListener("click", () => {
        setLanguage(isArabic() ? "en" : "ar");
      });
    }

    setLanguage(currentLanguage);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeApp,
      { once: true }
    );
  } else {
    initializeApp();
  }

})();
        
