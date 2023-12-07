import { createDictionary, getLang } from "./build-dictionary";
import dictionary from "./mainDictionary";
import errorMessage from "./errorDictionary";
import buttonMessage from "./buttonDictionary";
import mainMenuMessage from "./mainMenuDictionary";
import notifMessage from "./notifDictionary";
import formMessage from "./formDictionary";
import surveyMessage from "./surveyDictionary";

const language = getLang();

export const errorDictionary = createDictionary(language)(errorMessage);
export const buttonDictionary = createDictionary(language)(buttonMessage);
export const defaultDictionary = createDictionary(language)(dictionary);
export const menuDictionary = createDictionary(language)(mainMenuMessage);
export const notifDictionary = createDictionary(language)(notifMessage);
export const formDictionary = createDictionary(language)(formMessage);
export const surveyDictionary = createDictionary(language)(surveyMessage);
