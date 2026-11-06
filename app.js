(() => {
  const toggle = document.getElementById("languageToggle");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  let language = "ar";
  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = document.documentElement.dir;
    document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
      element.textContent = element.dataset[language];
    });
    if (toggle) toggle.textContent = language === "ar" ? "English" : "العربية";
    document.title = language === "ar"
      ? "أكاديمية القرآن الكريم وعلومه"
      : "Quran Sciences Academy";
  }
  if (toggle) {
    toggle.addEventListener("click", () => setLanguage(language === "ar" ? "en" : "ar"));
  }
  setLanguage("ar");
})();