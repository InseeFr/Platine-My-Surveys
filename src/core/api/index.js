import { rows, sleep } from "../mock/surveys";
import { fetcher } from "./fetcher";

const putRequest = url => body => token => fetcher(url, token, "PUT", null, body);
const postRequest = url => body => token => fetcher(url, token, "POST", null, body);
const getRequest = url => params => token => fetcher(url, token, "GET", params, null);

const mockGetMySurveys = () => () => async () => {
  await sleep(2000);
  return { data: rows, status: 200, statusText: "ok", error: false };
};

const getMySurveys = apiUrl => async token => {
  return getRequest(`${apiUrl}/api/contacts/questionings`)(null)(token);
};

const getContacts = apiUrl => async token => {
  const params = { page: 0, size: 50, sort: "identifier" };
  return getRequest(`${apiUrl}/api/contacts`)(params)(token);
};

const getContact = apiUrl => id => async token => {
  return getRequest(`${apiUrl}/api/contacts/${id}`)(null)(token);
};

const putContact = apiUrl => id => body => async token => {
  return putRequest(`${apiUrl}/api/contacts/${id}`)(body)(token);
};

const postContactEvent = apiUrl => body => async token => {
  return postRequest(`${apiUrl}/api/contacts/contact-events`)(body)(token);
};

const getContactAddress = apiUrl => id => async token => {
  return getRequest(`${apiUrl}/api/contacts/${id}/address`)(null)(token);
};

const putAddress = apiUrl => id => body => async token => {
  return putRequest(`${apiUrl}/api/contacts/${id}/address`)(body)(token);
};

export const API = {
  mockGetMySurveys,
  getMySurveys,
  getContact,
  getContacts,
  getContactAddress,
  putAddress,
  putContact,
  postContactEvent,
};
