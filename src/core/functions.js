import { isFuture, isPast } from "date-fns";
import { surveyDictionary } from "i18n";
import { lowOrderQuestioningStatus, statusOrder } from "./filterConstants";

export const chunkArray = (myArray, chunk_size) => {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
};

export const fieldToTest = field => `${field}`.toLowerCase();

export const getSurveyStatus = (openingDate, closingDate, returnDate) => {
  var status;
  var colorChip;
  var toolTip;

  if (isFuture(new Date(openingDate))) {
    status = surveyDictionary.surveyIncoming;
    colorChip = "primary";
    toolTip = surveyDictionary.surveyIncomingTooltip;
  }
  if (isPast(new Date(openingDate)) && isFuture(new Date(returnDate))) {
    status = surveyDictionary.surveyOpen;
    colorChip = "success";
    toolTip = surveyDictionary.surveyOpenTooltip;
  }
  if (isPast(new Date(returnDate)) && isFuture(new Date(closingDate))) {
    status = surveyDictionary.surveyClosing;
    colorChip = "warning";
    toolTip = surveyDictionary.surveyClosingTooltip;
  }
  if (isPast(new Date(closingDate))) {
    status = surveyDictionary.surveyClosed;
    colorChip = "default";
    toolTip = surveyDictionary.surveyClosedTooltip;
  }
  return { status, colorChip, toolTip };
};

export const filterSurveys = (surveys, filterStr, surveysList, statusList) => {
  return surveys.filter(({ surveyUnitId, surveyWording, openingDate, closingDate, returnDate }) => {
    return (
      (fieldToTest(surveyUnitId).includes(filterStr.toLowerCase()) ||
        fieldToTest(surveyWording).includes(filterStr.toLowerCase())) &&
      (surveysList.length > 0 ? surveysList.includes(surveyWording) : true) &&
      (statusList.length > 0
        ? statusList.includes(getSurveyStatus(openingDate, closingDate, returnDate).status)
        : true)
    );
  });
};

export const sortByQuestioningStatusBySurveyStatusByReturnDate = (a, b) => {
  if (
    !lowOrderQuestioningStatus.includes(a.questioningStatus) &&
    lowOrderQuestioningStatus.includes(b.questioningStatus)
  ) {
    return -1;
  }
  if (
    lowOrderQuestioningStatus.includes(a.questioningStatus) &&
    !lowOrderQuestioningStatus.includes(b.questioningStatus)
  ) {
    return 1;
  }
  if (
    statusOrder.indexOf(getSurveyStatus(a.openingDate, a.closingDate, a.returnDate).status) <
    statusOrder.indexOf(getSurveyStatus(b.openingDate, b.closingDate, b.returnDate).status)
  ) {
    return -1;
  }
  if (
    statusOrder.indexOf(getSurveyStatus(b.openingDate, b.closingDate, b.returnDate).status) <
    statusOrder.indexOf(getSurveyStatus(a.openingDate, a.closingDate, a.returnDate).status)
  ) {
    return 1;
  }
  if (a.returnDate < b.returnDate) {
    return -1;
  }
  if (b.returnDate < a.returnDate) {
    return 1;
  }
  // a must be equal to b
  return 0;
};
