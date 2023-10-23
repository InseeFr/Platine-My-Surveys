#!/bin/sh
echo "self._env_['REACT_APP_AUTH_TYPE'] = '$REACT_APP_AUTH_TYPE';" >> /usr/share/nginx/html/env-config.js
echo "self._env_['REACT_APP_CLIENT_ID'] = '$REACT_APP_CLIENT_ID';" >> /usr/share/nginx/html/env-config.js
echo "self._env_['REACT_APP_AUTH_URL'] = '$REACT_APP_AUTH_URL';" >> /usr/share/nginx/html/env-config.js
echo "self._env_['REACT_APP_PORTAIL_URL'] = '$REACT_APP_PORTAIL_URL';" >> /usr/share/nginx/html/env-config.js
echo "self._env_['REACT_APP_MANAGEMENT_API_BASE_URL'] = '$REACT_APP_MANAGEMENT_API_BASE_URL';" >> /usr/share/nginx/html/env-config.js
echo "self._env_['REACT_APP_REALM'] = '$REACT_APP_REALM';" >> /usr/share/nginx/html/env-config.js
exec "$@"