export type ContentSurvey = {
  id: string;
  isSurveyOnline: boolean;
  messageSurveyOffline: string;
  messageInfoSurveyOffline: string;
  title: string;
  titleShort: string;
  verifmail: boolean;
  content: {
    description: {
      title: string;
      body: string;
    };
    resultats: {
      title: string;
      "menu-title": string;
      "picture-url": string;
      legende: string;
      "link-url": string;
    };
    "enquete-en-detail": {
      "menu-link": string;
    };
    "donnees-personnelles": {
      cartouche: string;
      context: string;
    };
    "a-quoi-servent-vos-reponses": {
      body: string;
    };
    "faq-data": {
      title: string;
      body: string;
    }[];
  };
  configuration: {
    listOptionsObjetMailAssistance: {
      auth: boolean;
      value: string;
      displayValue: string;
    }[];
  };
};
