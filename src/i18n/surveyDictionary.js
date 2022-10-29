const dictionary = {
  surveyClosed: {
    fr: "Fermée",
    en: "Closed",
  },
  surveyClosing: {
    fr: "Fermeture",
    en: "Closing",
  },
  surveyIncoming: {
    fr: "A Venir",
    en: "Incoming.",
  },
  surveyOpen: {
    fr: "Ouverte",
    en: "Open",
  },
  surveyClosedTooltip: {
    fr: "Une erreur est survenue lors du chargement des contacts.",
    en: "An error occurred while loading the contacts.",
  },
  surveyClosingTooltip: {
    fr: id => `Une erreur est survenue lors du chargement du contact ${id}.`,
    en: id => `An error occurred while loading the contact ${id}.`,
  },
  surveyIncomingTooltip: {
    fr: "Le changement d'adresse a bien été pris en compte",
    en: "The change of address has been taken into account.",
  },
  surveyOpenTooltip: {
    fr: "Une erreur est survenue lors du changement d'adresse.",
    en: "An error occurred when changing the address.",
  },
};

export default dictionary;
