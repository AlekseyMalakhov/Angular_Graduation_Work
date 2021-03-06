import {environment} from "../environments/environment";

export default {
  oidc: {
    clientId: "0oa48iu3oCyIWyO3I4x6",
    issuer: "https://dev-843586.okta.com/oauth2/default",
    redirectUri: environment.server_url + '/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
  }
};
