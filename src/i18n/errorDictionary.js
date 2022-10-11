const dictionary = {
  error401: { fr: "Erreur 401", en: "Error 401" },
  errorUser: {
    fr: userId => `Il n'existe pas de compte pour l'identifiant ${userId}`,
    en: userId => `There is no account for the identifier ${userId}`,
  },
};

export default dictionary;
