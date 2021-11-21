import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Sort by name": "Sort by name",
      "Sort by date": "Sort by date",
      "Sort by id": "Sort by id",
      "Type album title": "Type album title",
      "Add to List": "Add to List",
      "Set as best of the best": "Set as best of the best",
      "Unset best of the best": "Unset as best of the best",
    },
  },
  ua: {
    translation: {
      "Sort by name": "Сортувати за назвою",
      "Sort by date": "Сортувати по даті",
      "Sort by id": "Сортувати по id",
      "Type album title": "Додаті назву альбому",
      "Add to List": "Додати альбом",
      "Set as best of the best": "Помітити як кращій з найкращих",
      "Unset best of the best": "Прибрати кращій з найкращих",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
