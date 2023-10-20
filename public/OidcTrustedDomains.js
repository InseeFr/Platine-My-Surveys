self.importScripts('env-config.js');

const oidcServerOrigin = new URL(self?._env_?.REACT_APP_AUTHORITY || 'https://auth.insee.test/auth' || '').origin;

const apiOrigin =
	self?._env_?.REACT_APP_MANAGEMENT_API_BASE_URL || 'https://api-pilotage-enquetes.developpement.insee.fr' || '';

const trustedDomains = {
	default: [oidcServerOrigin, apiOrigin],
};

trustedDomains.config_separate_oidc_access_token_domains = {
    oidcDomains: [oidcServerOrigin],
    accessTokenDomains: [apiOrigin],
};

