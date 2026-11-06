
(() => {
  const toggle = document.getElementById("languageToggle");
  const year = document.getElementById("year");

  const page = document.documentElement;

  const defaultTitles = {
    ar: "أكاديمية القرآن الكريم وعلومه",
    en: "Quran Sciences Academy"
  };

  let language = "ar";

  try {
    const savedLanguage = localStorage.getItem("academy-language");

    if (savedLanguage === "ar" || savedLanguage === "en") {
      language = savedLanguage;
    }
  } catch (error) {
    language = "ar";
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;

    page.lang = language;
    page.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = page.dir;

    document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
      element.textContent = element.dataset[language];
    });

    if (toggle) {
      toggle.textContent = language === "ar" ? "English" : "العربية";
    }

    document.title =
      page.dataset[`title${language.toUpperCase()}`] ||
      defaultTitles[language];

    try {
      localStorage.setItem("academy-language", language);
    } catch (error) {
      // The website will still work if storage is unavailable.
    }
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      setLanguage(language === "ar" ? "en" : "ar");
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  setLanguage(language);
})();
