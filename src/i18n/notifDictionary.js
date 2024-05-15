const dictionary = {
  contactLoadingError: {
    fr: "Une erreur est survenue lors du chargement des contacts.",
    en: "An error occurred while loading the contacts.",
  },
  contactsLoadingError: {
    fr: id => `Une erreur est survenue lors du chargement du contact ${id}.`,
    en: id => `An error occurred while loading the contact ${id}.`,
  },
  addressChangeConfirmation: {
    fr: "Le changement d'adresse a bien été pris en compte",
    en: "The change of address has been taken into account.",
  },
  addressChangeError: {
    fr: "Une erreur est survenue lors du changement d'adresse.",
    en: "An error occurred when changing the address.",
  },
  personalDataChangeConfirmation: {
    fr: "La modification de vos informations personnelles a bien été prise en compte",
    en: "The change of your personal datas has been taken into account.",
  },
  personalDataChangeError: {
    fr: "Une erreur est survenue lors de la modification de vos informations.",
    en: "An error occurred when modifying your personal datas.",
  },
  autoLogoutWarning: {
    fr: "Vous êtes toujours là?",
    en: "Are you still here?",
  },
  autoLogoutDisconnecting: {
    fr: secondsLeft => `Vous allez être déconnecté(e) dans ${secondsLeft} sec.`,
    en: secondsLeft => `You will be disconnected in ${secondsLeft} seconds.`,
  },
};

export default dictionary;
