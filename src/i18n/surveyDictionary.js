import { format, differenceInDays } from "date-fns";

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
    en: "Coming",
  },
  surveyOpen: {
    fr: "Ouverte",
    en: "Open",
  },
  surveyClosedTooltip: {
    fr: " est fermée.",
    en: " is closed.",
  },
  surveyClosingTooltip: {
    fr: " est en cours de fermeture.",
    en: " is closing.",
  },
  surveyIncomingTooltip: {
    fr: " n'est pas encore ouverte.",
    en: "is coming.",
  },
  surveyOpenTooltip: {
    fr: " est ouverte.",
    en: " is open.",
  },
  surveyMessagePartielIntOpen: {
    fr: date => `Compléter vos réponses avant le ${format(new Date(date), "dd/MM/yyyy")}`,
    en: date => `Complete the survey before ${format(new Date(date), "dd/MM/yyyy")}`,
  },
  surveyMessagePartielIntNotOpen: {
    fr: "Vous n'avez pas finalisé vos réponses.",
    en: "You have not finalized your answers.",
  },
  surveyMessageValPap: {
    fr: date =>
      `Vous avez répondu au format papier, votre réponse a été prise en compte le ${format(
        new Date(date),
        "dd/MM/yyyy",
      )}`,
    en: date =>
      `You answered in paper format, your answer was taken into account on ${format(
        new Date(date),
        "dd/MM/yyyy",
      )}`,
  },
  surveyMessageHC: {
    fr: "Vous êtes finalement hors champ de l’étude de l’enquête.",
    en: "You are finally out of the scope of the survey.",
  },
  surveyMessageValInt: {
    fr: date => `Vous avez répondu le ${format(new Date(date), "dd/MM/yyyy")}`,
    en: date => `You answered on ${format(new Date(date), "dd/MM/yyyy")}`,
  },
  surveyMessageRefusal: {
    fr: "Vous avez refusé de répondre à l’enquête.",
    en: "You refused to answer the survey.",
  },
  surveyMessageIncoming: {
    fr: date => `Répondre à partir du ${format(new Date(date), "dd/MM/yyyy")}`,
    en: date => `Reply from the ${format(new Date(date), "dd/MM/yyyy")}`,
  },
  surveyMessageOpen: {
    fr: date =>
      `Il vous reste ${differenceInDays(new Date(date), new Date())} jours pour répondre à l’enquête.`,
    en: date =>
      `You have ${differenceInDays(new Date(date), new Date())} days left to complete the survey.`,
  },
  surveyMessageClosing: {
    fr: date =>
      `Il vous reste ${differenceInDays(new Date(date), new Date())} jours pour répondre à l’enquête.`,
    en: date =>
      `You have ${differenceInDays(new Date(date), new Date())} days left to complete the survey.`,
  },
  surveyMessageClosed: {
    fr: date => `Votre réponse était attendue pour le ${format(new Date(date), "dd/MM/yyyy")}.`,
    en: date => `Your response was expected by ${format(new Date(date), "dd/MM/yyyy")}.`,
  },
  suIdentifier: {
    fr: "Identifiant: ",
    en: "Identifier: ",
  },
  accessSurvey: {
    fr: "Accéder au questionnaire",
    en: "Access the survey",
  },
  searchBySurveyName: {
    fr: "Enquêtes",
    en: "Surveys",
  },
  searchByStatus: {
    fr: "Statuts",
    en: "Status",
  },
  searchByStringLabel: {
    fr: "Rechercher",
    en: "Search",
  },
  searchByStringPlaceholder: {
    fr: "Filter par UE, enquêtes...",
    en: "Filter by SU, surveys...",
  },
  noSurveys: {
    fr: "Vous n'avez aucune enquête.",
    en: "You have no survey.",
  },
};
export default dictionary;
