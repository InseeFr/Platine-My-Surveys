import type { GenericTranslations } from "i18nifty";

//List the languages you with to support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = (typeof languages)[number];

export type ComponentKey =
  | import("components/Header").I18n
  | import("components/Footer").I18n
  | import("components/homepage/Homepage").I18n
  | import("components/myAccount/MyAccount").I18n
  | import("components/mySurveys/MySurveys").I18n
  | import("components/myAccount/PersonalInformationsForm").I18n
  | import("components/myAccount/PostalAddressInformationsForm").I18n
  | import("components/AutoLogoutCountdown").I18n
  | import("components/Logout").I18n
  | import("components/myAccount/PersonalInformations").I18n
  | import("components/myAccount/PostalAddressInformations").I18n
  | import("components/support/OfflineSupport").I18n;

export type Translations<L extends Language> = GenericTranslations<
  ComponentKey,
  Language,
  typeof fallbackLanguage,
  L
>;
