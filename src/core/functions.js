import { isFuture, isPast } from "date-fns";
import { surveyDictionary } from "i18n";

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
    toolTip = " n'a pas encore démarrée";
  }
  if (isPast(new Date(openingDate)) && isFuture(new Date(returnDate))) {
    status = surveyDictionary.surveyOpen;
    colorChip = "success";
    toolTip = " est ouverte";
  }
  if (isPast(new Date(returnDate)) && isFuture(new Date(closingDate))) {
    status = surveyDictionary.surveyClosing;
    colorChip = "warning";
    toolTip = " est en cours de fermeture";
  }
  if (isPast(new Date(closingDate))) {
    status = surveyDictionary.surveyClosed;
    colorChip = "error";
    toolTip = " est fermée";
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
