import type { Translations } from "../types";

export const translations: Translations<"fr"> = {
  /* spell-checker: disable */
  Header: {
    "select language": "Sélectionner la langue",
    "home link title": "Accueil - Portail de réponse aux enquêtes de la statistique publique",
    login: "Se connecter",
    logout: "Se déconnecter",
    "my account": "Mon compte",
    "service title": "STATISTIQUE PUBLIQUE - INSEE",
    "service tagline": "Portail de réponse aux enquêtes de la statistique publique",
    "operator logo alt": "Insee, mesurer pour comprendre",
    "page title surveys": "Mes enquêtes",
  },
  Footer: {
    "operator logo alt": "Insee, mesurer pour comprendre",
    "content description": `
      Ce site est une démonstration de l'utilisation de Vite + TypeScript + React + react-dsfr.
      Il est destiné à être utilisé comme base pour un les projets de développement a l'Insee.
    `,
  },
  MySurveys: {
    "title my surveys": "Bienvenue sur votre tableau de bord",
    "closed": "Terminé",
    "opened": "En cours",
    "unstarted": "Non commencée",
    "search": "Rechercher",
    "surveys": "Enquêtes",
    "surveys table title": "Mes enquêtes",
    "survey name": "Nom de l'enquête",
    "identifier": "Identifiant",
    "actions": "Actions",
    "goToSurvey": "Répondre",
    "status": "Statut",
    "respond before": "Répondre avant le",
    "on": "sur",
    "entities displayed": "entités affichées",
    "loading surveys": "chargement des enquêtes...",
    "identificationCode column": "colonne identifiant",
    "survey name column": "colonne nom de l'enquête",
    "status column": "colonne statut",
    "respond before column": "colonne répondre avant le...",
    "actions column": "colonne d'actions",
    "sortable column": "colonne triable",
    "identifier label": "Identifiant :",
    "download deposit proof": "Preuve de dépot",
    "continue": "Continuer",
    "from": "à partir du",
  },
  MyAccount: {
    "title my account": "Bienvenue sur votre compte",
    "my personal information": "Mes informations personnelles",
    "civility": "Civilité :",
    "Female": "Madame",
    "Male": "Monsieur",
    "lastName": "Nom :",
    "firstName": "Prénom :",
    "email": "Adresse mail :",
    "function": "Fonction :",
    "usual company name": "Entreprise :",
    "phone": "Téléphone :",
    "edit": "Modifier",
    "postal address": "Mes coordonnées postales",
    "country name": "Pays :",
    "street number": "Numéro de voie :",
    "repetition index": "Indice de répétition :",
    "street type": "Type de voie :",
    "street name": "Libellé de voie :",
    "address supplement": "Complément(ZI, Bat, Res, ...) :",
    "special distribution": "Mention spéciale :",
    "zip code": "Code postal :",
    "city name": "Libellé commune :",
    "cedex code": "Code cedex(exemple: 75675) :",
    "cedex name": "Bureau distributeur(exemple: PARIS CEDEX 14) :",
  },
  PersonalInformationsForm: {
    "civility": "Civilité",
    "lastName": "Nom",
    "firstName": "Prénom",
    "email": "Adresse mail",
    "function": "Fonction",
    "usual company name": "Entreprise",
    "phone": "Téléphone",
    "phone hint text": "Saisissez le numéro sans point ni espace.",
    "phone example": "Exemple : 0102030405",
    "cancel": "Annuler",
    "register": "Enregistrer",
  },

  /* spell-checker: enable */
};
