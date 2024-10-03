export type APISchemas = {
  ReinitPasswordStatusDto: {
    message?: string;
    status?:
      | "100 CONTINUE"
      | "101 SWITCHING_PROTOCOLS"
      | "102 PROCESSING"
      | "103 EARLY_HINTS"
      | "103 CHECKPOINT"
      | "200 OK"
      | "201 CREATED"
      | "202 ACCEPTED"
      | "203 NON_AUTHORITATIVE_INFORMATION"
      | "204 NO_CONTENT"
      | "205 RESET_CONTENT"
      | "206 PARTIAL_CONTENT"
      | "207 MULTI_STATUS"
      | "208 ALREADY_REPORTED"
      | "226 IM_USED"
      | "300 MULTIPLE_CHOICES"
      | "301 MOVED_PERMANENTLY"
      | "302 FOUND"
      | "302 MOVED_TEMPORARILY"
      | "303 SEE_OTHER"
      | "304 NOT_MODIFIED"
      | "305 USE_PROXY"
      | "307 TEMPORARY_REDIRECT"
      | "308 PERMANENT_REDIRECT"
      | "400 BAD_REQUEST"
      | "401 UNAUTHORIZED"
      | "402 PAYMENT_REQUIRED"
      | "403 FORBIDDEN"
      | "404 NOT_FOUND"
      | "405 METHOD_NOT_ALLOWED"
      | "406 NOT_ACCEPTABLE"
      | "407 PROXY_AUTHENTICATION_REQUIRED"
      | "408 REQUEST_TIMEOUT"
      | "409 CONFLICT"
      | "410 GONE"
      | "411 LENGTH_REQUIRED"
      | "412 PRECONDITION_FAILED"
      | "413 PAYLOAD_TOO_LARGE"
      | "413 REQUEST_ENTITY_TOO_LARGE"
      | "414 URI_TOO_LONG"
      | "414 REQUEST_URI_TOO_LONG"
      | "415 UNSUPPORTED_MEDIA_TYPE"
      | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
      | "417 EXPECTATION_FAILED"
      | "418 I_AM_A_TEAPOT"
      | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
      | "420 METHOD_FAILURE"
      | "421 DESTINATION_LOCKED"
      | "422 UNPROCESSABLE_ENTITY"
      | "423 LOCKED"
      | "424 FAILED_DEPENDENCY"
      | "425 TOO_EARLY"
      | "426 UPGRADE_REQUIRED"
      | "428 PRECONDITION_REQUIRED"
      | "429 TOO_MANY_REQUESTS"
      | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
      | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
      | "500 INTERNAL_SERVER_ERROR"
      | "501 NOT_IMPLEMENTED"
      | "502 BAD_GATEWAY"
      | "503 SERVICE_UNAVAILABLE"
      | "504 GATEWAY_TIMEOUT"
      | "505 HTTP_VERSION_NOT_SUPPORTED"
      | "506 VARIANT_ALSO_NEGOTIATES"
      | "507 INSUFFICIENT_STORAGE"
      | "508 LOOP_DETECTED"
      | "509 BANDWIDTH_LIMIT_EXCEEDED"
      | "510 NOT_EXTENDED"
      | "511 NETWORK_AUTHENTICATION_REQUIRED";
  };
  MailAssistanceInputDto: {
    auth?: boolean;
    idec?: string;
    idue?: string;
    /* Format: int64 */
    questioningId?: number;
    mailaddress?: string;
    message?: string;
    name?: string;
    phonenumber?: string;
    survey?: string;
    mailobjet?: string;
  };
  MailAssistanceStatusDto: {
    message?: string;
    status?:
      | "100 CONTINUE"
      | "101 SWITCHING_PROTOCOLS"
      | "102 PROCESSING"
      | "103 EARLY_HINTS"
      | "103 CHECKPOINT"
      | "200 OK"
      | "201 CREATED"
      | "202 ACCEPTED"
      | "203 NON_AUTHORITATIVE_INFORMATION"
      | "204 NO_CONTENT"
      | "205 RESET_CONTENT"
      | "206 PARTIAL_CONTENT"
      | "207 MULTI_STATUS"
      | "208 ALREADY_REPORTED"
      | "226 IM_USED"
      | "300 MULTIPLE_CHOICES"
      | "301 MOVED_PERMANENTLY"
      | "302 FOUND"
      | "302 MOVED_TEMPORARILY"
      | "303 SEE_OTHER"
      | "304 NOT_MODIFIED"
      | "305 USE_PROXY"
      | "307 TEMPORARY_REDIRECT"
      | "308 PERMANENT_REDIRECT"
      | "400 BAD_REQUEST"
      | "401 UNAUTHORIZED"
      | "402 PAYMENT_REQUIRED"
      | "403 FORBIDDEN"
      | "404 NOT_FOUND"
      | "405 METHOD_NOT_ALLOWED"
      | "406 NOT_ACCEPTABLE"
      | "407 PROXY_AUTHENTICATION_REQUIRED"
      | "408 REQUEST_TIMEOUT"
      | "409 CONFLICT"
      | "410 GONE"
      | "411 LENGTH_REQUIRED"
      | "412 PRECONDITION_FAILED"
      | "413 PAYLOAD_TOO_LARGE"
      | "413 REQUEST_ENTITY_TOO_LARGE"
      | "414 URI_TOO_LONG"
      | "414 REQUEST_URI_TOO_LONG"
      | "415 UNSUPPORTED_MEDIA_TYPE"
      | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
      | "417 EXPECTATION_FAILED"
      | "418 I_AM_A_TEAPOT"
      | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
      | "420 METHOD_FAILURE"
      | "421 DESTINATION_LOCKED"
      | "422 UNPROCESSABLE_ENTITY"
      | "423 LOCKED"
      | "424 FAILED_DEPENDENCY"
      | "425 TOO_EARLY"
      | "426 UPGRADE_REQUIRED"
      | "428 PRECONDITION_REQUIRED"
      | "429 TOO_MANY_REQUESTS"
      | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
      | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
      | "500 INTERNAL_SERVER_ERROR"
      | "501 NOT_IMPLEMENTED"
      | "502 BAD_GATEWAY"
      | "503 SERVICE_UNAVAILABLE"
      | "504 GATEWAY_TIMEOUT"
      | "505 HTTP_VERSION_NOT_SUPPORTED"
      | "506 VARIANT_ALSO_NEGOTIATES"
      | "507 INSUFFICIENT_STORAGE"
      | "508 LOOP_DETECTED"
      | "509 BANDWIDTH_LIMIT_EXCEEDED"
      | "510 NOT_EXTENDED"
      | "511 NETWORK_AUTHENTICATION_REQUIRED";
  };
  Ligne: {
    idCampagne?: string;
    idUE?: string;
    dateRetourSouhaitee?: string;
    libelle?: string;
    etatCampagne?: string;
    /* Format: uri */
    url?: string;
  };
  SurveyStatus: {
    opened?: boolean;
    messageSurveyOffline?: string;
    messageInfoSurveyOffline?: string;
  };
  HealthcheckDto: {
    environnement?: string;
    keycloakServiceOk?: boolean;
    managementApiOk?: boolean;
    mailServiceOk?: boolean;
    ldapServiceOk?: boolean;
  };
  Link: { href?: string; templated?: boolean };
};

export type APIEndpoints = {
  "/repondant/mail": {
    responses: { get: null; put: null };
    requests: { method?: "get" } | { method: "put"; body: string };
  };
  "/reinit-password": {
    responses: { post: null };
    requests: { method: "post"; query: { idec: string } };
  };
  "/e-mail": {
    responses: { post: null };
    requests: { method: "post"; body: APISchemas["MailAssistanceInputDto"] };
  };
  "/questionnaires-url": {
    responses: { get: APISchemas["Ligne"][] };
    requests: { method?: "get" };
  };
  "/is-survey-online/{id}": {
    responses: { get: APISchemas["SurveyStatus"] };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/healthcheck": { responses: { get: null }; requests: { method?: "get" } };
  "/actuator": {
    responses: { get: { [key: string]: { [key: string]: APISchemas["Link"] } } };
    requests: { method?: "get" };
  };
  "/actuator/health": { responses: { get: unknown }; requests: { method?: "get" } };
  "/actuator/health/**": {
    responses: { get: unknown };
    requests: { method?: "get" };
  };
};

export type APIPaths = keyof APIEndpoints;

export type APIRequests<T extends APIPaths> = APIEndpoints[T]["requests"];

export type APIMethods<T extends APIPaths> = NonNullable<APIRequests<T>["method"]>;

export type APIRequest<T extends APIPaths, M extends APIMethods<T>> = Omit<
  {
    [MM in APIMethods<T>]: APIRequests<T> & { method: MM };
  }[M],
  "method"
> & { method?: M };

type DefaultToGet<T extends string | undefined> = T extends string ? T : "get";

export type APIResponse<T extends APIPaths, M extends string | undefined> =
  DefaultToGet<M> extends keyof APIEndpoints[T]["responses"]
    ? APIEndpoints[T]["responses"][DefaultToGet<M>]
    : never;
