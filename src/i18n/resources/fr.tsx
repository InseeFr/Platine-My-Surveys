import type { Translations } from "../types";

export const translations: Translations<"fr"> = {
  /* spell-checker: disable */
  Header: {
    "select language": "Sélectionner la langue",
    "home link title": "Accueil - Portail de réponse aux enquêtes de la statistique publique",
    login: "Se connecter",
    logout: "Me déconnecter",
    "my account": "Mon compte",
    "service tagline": "Portail de réponse aux enquêtes de la statistique publique",
    "operator logo alt": "Insee, mesurer pour comprendre",
    "page title surveys": "Mes enquêtes",
    "contact support": "Contacter l'assistance",
    "header": "Menu",
    "content": "Contenu",
    "footer": "Pied de page",
    "my surveys": "Mes enquêtes",
  },
  Footer: {
    "operator logo alt": "Insee, mesurer pour comprendre",
    "personal data": "Données personnelles",
    "cookies": "Gestion des cookies",
  },
  Homepage: {
    "survey introduction": "Introduction de l'enquête",
    "homepage": "Accueil",
    "in this section": "Dans cette rubrique",
    "legal framework": "Cadre juridique",
    "what are your answers for?": "À quoi servent vos réponses ?",
    "documents to the surveyed": "Documents aux enquêtés",
    "some results": "Quelques résultats",
    "respond to survey": "Répondre à l'enquête",
    "respond to survey detail":
      "Munissez vous de votre identifiant et de votre mot de passe pour répondre à l’enquête.",
    estimatedResponseTime: ({ time }: { time?: number }) => (
      <>Temps de réponse estimé: {time ? `${time} min` : "-"} </>
    ),
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
    "title my account": "Mon compte",
    "my personal information": "Mes informations personnelles",
    "Female": "Madame",
    "Male": "Monsieur",
    "edit": "Modifier",
    "postal address": "Mes coordonnées postales",
  },
  PersonalInformations: {
    "civility": "Civilité :",
    "lastName": "Nom :",
    "firstName": "Prénom :",
    "email": "Adresse mail :",
    "function": "Fonction :",
    "usual company name": "Entreprise :",
    "phone": "Téléphone fixe :",
    "mobile phone": "Téléphone portable :",
  },
  PersonalInformationsForm: {
    "civility": "Civilité",
    "lastName": "Nom",
    "firstName": "Prénom",
    "email": "Adresse mail",
    "function": "Fonction",
    "usual company name": "Entreprise",
    "phone": "Téléphone fixe",
    "mobile phone": "Téléphone portable",
    "phone hint text": "Saisissez le numéro sans point ni espace.",
    "phone example": "Exemple : 0102030405",
    "cancel": "Annuler",
    "register": "Enregistrer",
  },
  PostalAddressInformations: {
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
  PostalAddressInformationsForm: {
    "country name": "Pays",
    "street number": "Numéro de voie",
    "repetition index": "Indice de répétition",
    "street type": "Type de voie",
    "street name": "Libellé de voie",
    "address supplement": "Complément(ZI, Bat, Res, ...)",
    "special distribution": "Mention spéciale",
    "zip code": "Code postal",
    "city name": "Libellé commune",
    "cedex code": "Code cedex",
    "cedex code hint text": "Exemple: 75675",
    "cedex name": "Bureau distributeur",
    "cedex name hint text": "Exemple: PARIS CEDEX 14",
    "cancel": "Annuler",
    "register": "Enregistrer",
  },
  AutoLogout: {
    "autoLogoutLabel": "Êtes-vous toujours là ?",
    logoutTimer: ({ secondLeft }: { secondLeft: number }) => (
      <p>Vous allez être déconnecté dans {secondLeft} sec. </p>
    ),
  },
  Logout: {
    "title": "Vous avez été déconnecté.",
    "disconnected": "Déconnexion",
    "answer saved":
      "Vos réponses ont été sauvegardées, vous pourrez ainsi compléter ultérieurement votre questionnaire.",
    "send message warning":
      "N’oubliez pas d’envoyer votre questionnaire une fois qu’il sera entièrement complété.",
    "reconnect": "Se reconnecter",
  },
  /* spell-checker: enable */
};
