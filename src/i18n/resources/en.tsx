import type { Translations } from "../types";
import { Button } from "@codegouvfr/react-dsfr/Button";

export const translations: Translations<"en"> = {
  /* spell-checker: disable */
  Header: {
    "select language": "Select language",
    "home link title": "Home - Response portal for official statistics surveys",
    login: "Log in",
    logout: "Log out",
    "my account": "My account",
    "service tagline": "Response portal for official statistics surveys",
    "operator logo alt": "Insee, measure to understand",
    "page title surveys": "My surveys",
    "contact support": "Contact support",
    "header": "Header",
    "content": "Content",
    "footer": "Footer",
    "my surveys": "My surveys",
  },
  Footer: {
    "operator logo alt": "Homepage",
    "personal data": "Personal data",
    "cookies": "Cookies management",
    "ssp logo alt": "Public statistics",
  },
  SurveyHomepage: {
    "title": "Select your survey",
    "openNewWindow": "open in a new window",
    "sideMenuTitle": "Side menu to access survey information",
    "surveyLink": "See the survey in detail",
    "survey introduction": "Survey introduction",
    "homepage": "Homepage",
    "in this section": "In this section",
    "legal framework": "Legal framework",
    "what are your answers for?": "What are your answers for?",
    "documents to the surveyed": "Documents to the surveyed",
    "some results": "Some results",
    "respond to survey": "Respond to the survey",
    "respond to survey detail": "Please bring your username and password to complete the survey.",
  },
  MySurveys: {
    "title my surveys": "Welcome on your dashboard",
    "closed": "Finished",
    "opened": "In progress",
    "unstarted": "Unstarted",
    "search": "Search",
    "surveys": "Surveys",
    "surveys table title": "My surveys",
    "survey name": "Survey name",
    "identifier": "Identifier",
    "actions": "Actions",
    "goToSurvey": "Respond",
    "status": "Status",
    "respond before": "Respond before",
    "on": "on",
    "entities displayed": "entities diplayed",
    "loading surveys": "loading surveys...",
    "identificationCode column": "identifier column",
    "survey name column": "survey name column",
    "status column": "status column",
    "respond before column": "respond before column",
    "actions column": "actions column",
    "sortable column": "sortable column",
    "identifier label": "Identifier:",
    "download deposit proof": "Deposit proof",
    "continue": "Continue",
    "from": "from",
  },
  MyAccount: {
    "title my account": "My account",
    "my personal information": "My personal information",
    "Female": "Female",
    "Male": "Male",
    "edit": "Edit",
    "postal address": "Postal address",
  },
  PersonalInformations: {
    "civility": "Civility:",
    "lastName": "Last name:",
    "firstName": "First name:",
    "email": "Email:",
    "function": "Function:",
    "usual company name": "Usual company name:",
    "phone": "Landline phone:",
    "mobile phone": "Mobile phone:",
  },
  PersonalInformationsForm: {
    "civility": "Civility",
    "lastName": "Last name",
    "firstName": "First name",
    "email": "Email",
    "function": "Function",
    "usual company name": "Usual company name",
    "phone": "Landline phone",
    "mobile phone": "Mobile phone",
    "phone hint text": "Enter the number without periods or spaces.",
    "phone example": "Example: 0102030405",
    "cancel": "Cancel",
    "register": "Register",
  },
  PostalAddressInformations: {
    "country name": "Country name:",
    "street number": "Street number:",
    "repetition index": "Repetition index:",
    "street type": "Street type:",
    "street name": "Street name:",
    "address supplement": "Address supplement:",
    "special distribution": "Special distribution:",
    "zip code": "Zip code:",
    "city name": "City name:",
    "cedex code": "Cedex code(example: 75675):",
    "cedex name": "Cedex name(example: PARIS CEDEX 14):",
  },
  PostalAddressInformationsForm: {
    "country name": "Country name",
    "street number": "Street number",
    "repetition index": "Repetition index",
    "street type": "Street type",
    "street name": "Street name",
    "address supplement": "Address supplement",
    "special distribution": "Special distribution",
    "zip code": "Zip code",
    "city name": "City name",
    "cedex code": "Cedex code",
    "cedex code hint text": "Example: 75675",
    "cedex name": "Cedex name",
    "cedex name hint text": "Example: PARIS CEDEX 14",
    "cancel": "Cancel",
    "register": "Register",
  },
  AutoLogout: {
    "autoLogoutLabel": "Are you still there?",
    logoutTimer: ({ secondLeft }: { secondLeft: number }) => (
      <p>You will be logged out in {secondLeft} sec. </p>
    ),
  },
  Logout: {
    "title": "You have been disconnected.",
    "disconnected": "Disconnected",
    "answer saved":
      "Your answers have been saved, so you can complete your questionnaire at a later date.",
    "send message warning":
      "Don't forget to send in your questionnaire once it has been fully completed.",
    "reconnect": "Reconnect",
  },
  Support: {
    "contact support": "Contact support",
    "support title": "Hello, how can we help you?",
    "FAQ": "FAQ",
    "FAQ section": "FAQ section",
    "generalQuestions": "General questions",
    "surveyQuestions": "Questions about the survey",
    "FAQ form section": "form to contact us",
    "FAQ form title": "Can't find the answer in the FAQ?",
    "contact us": "Contact us:",
  },
  SupportForm: {
    FaqSupport: ({ surveyId }: { surveyId: string }) => {
      return (
        <p className="fr-text--sm">
          Before submitting a support request, please check if the answer to your question can be found
          in the
          <Button
            className="fr-pl-1v fr-text--sm"
            style={{ padding: 0, display: "inline", textDecoration: "underline", fontWeight: "400" }}
            priority="tertiary no outline"
            linkProps={{
              to: "/$survey/faq",
              params: {
                survey: surveyId,
              },
            }}
          >
            FAQ
          </Button>
        </p>
      );
    },
    "address usage":
      "The address you provide remains strictly confidential. We commit to using your address only for sending messages related to your request.",
    "mandatory fields": "All fields marked with an asterisk (*) are mandatory.",
    "invalidEmail": "Please enter a valid email address",
    "emailRequired": "Please enter an email address",
    "emailConfirmationFailed": "The email addresses do not match",
    "lastName": "Last Name",
    "firstName": "First Name",
    "object": "Subject*",
    "objectPlaceholder": "Select an option",
    "mailObjetRequired": "Please enter a subject",
    "phone": "Phone",
    "email": "Email Address*",
    "confirmEmail": "Confirm Email Address*",
    "idec": "Identifier",
    "idecHintText": "Format: between 7 and 8 characters",
    "message": "Message*",
    "messageRequired": "Please enter a message",
    "messageInfo": "4000 characters remaining",
    "submit": "Submit",
    "affichageQuestionnaire": "Display of the questionnaire",
    "comprehensionQuestionnaire": "Understanding of the questionnaire",
    "autre": "Other",
    "perteIdentifiant": "Lost identifier",
    "perteMotDePasse": "Lost password",
    "successAlert":
      "Your support request has been successfully submitted. You will receive a response by email soon.",
  },
  Documents: {
    "downloadEMail": "Download the email",
    "downloadEMailDescription": "View the details of an email",
    "downloadInstructions": "Download the instructions",
    "downloadInstructionsDescription": "View the instructions for the questionnaire",
    "downloadQuestioning": "PDF Questionnaire",
    "downloadQuestioningDescription": "View the details of a PDF questionnaire",
    "downloadMail": "Download the mail",
    "downloadMailDescription": "View the details of a letter",
  },
  LegalInformation: {
    "pageTitle": "Legal Notice",
    "servicePresentationTitle": "Service Presentation",
    "servicePresentationText":
      "The online response service is intended for households and businesses surveyed as part of a public statistics survey. These users can complete their questionnaires directly online via the Internet. To access the online response service, the user must log in by providing the access code and password listed on the letter sent to them. The service also provides users with information about the survey and an online assistance system in case of any issues encountered.",
    "legalFrameworkTitle": "Legal Framework of the Survey",
    "legalFrameworkText": "It is available on the promotional portal for this survey.",
    "cookiesTitle": "Cookie Management",
    "cookiesText":
      "This portal does not use any cookies that require user consent. Therefore, you do not need to accept their use before continuing your browsing.",
    "copyrightTitle": "Copyright",
    "copyrightText":
      "Any reproduction of trademarks and logos displayed on this site for purposes other than strictly private is strictly prohibited.",
    "publisherInformationTitle": "Publisher Information",
    "address": "Institut National de la Statistique et des Études Économiques CS 70058",
    "streetInformation": "88 avenue Verdier",
    "cityInformation": "92541 MONTROUGE CEDEX FRANCE",
    "phone": "Phone:",
  },
  /* spell-checker: enable */
};
