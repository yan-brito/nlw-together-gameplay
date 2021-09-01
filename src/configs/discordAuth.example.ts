const REDIRECT_URI = 'https://auth.expo.io/@user/your-app-name';
const SCOPE = 'identify%20email%20connections%20guilds'; //Defined at discord.dev and located at redirect url
const RESPONSE_TYPE = 'token';
const CLIENT_ID = ''; //located at redirect url
const CDN_IMAGE = 'https://cdn.discordapp.com'; //Discord default assets server

export {
    REDIRECT_URI,
    SCOPE,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE
};