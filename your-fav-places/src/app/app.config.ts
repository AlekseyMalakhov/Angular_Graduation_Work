export default {
  oidc: {
    clientId: "0oa48iu3oCyIWyO3I4x6",
    issuer: "https://dev-843586.okta.com/oauth2/default",
    redirectUri: 'http://localhost:4200/implicit/callback',
    //redirectUri: 'https://your-favorite-places.ew.r.appspot.com/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
  }
};
