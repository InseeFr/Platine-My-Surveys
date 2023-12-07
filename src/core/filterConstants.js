import { surveyDictionary } from "i18n";
import {
  VALINT_QUESTIONING,
  VALPAP_QUESTIONING,
  REFUSAL_QUESTIONING,
  HC_QUESTIONING,
} from "./constants";

export const statusOrder = [
  surveyDictionary.surveyClosing,
  surveyDictionary.surveyOpen,
  surveyDictionary.surveyIncoming,
  surveyDictionary.surveyClosed,
];
export const status = [
  surveyDictionary.surveyIncoming,
  surveyDictionary.surveyOpen,
  surveyDictionary.surveyClosing,
  surveyDictionary.surveyClosed,
];
export const lowOrderQuestioningStatus = [
  VALINT_QUESTIONING,
  VALPAP_QUESTIONING,
  REFUSAL_QUESTIONING,
  HC_QUESTIONING,
];
