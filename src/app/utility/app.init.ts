import { KeycloakService} from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://51.250.102.62:8180/auth', //10.17.0.140:8080
        realm: 'quarkus',
        clientId: 'angular-web-client'
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25
      },
      // loadUserProfileAtStartUp: true
    });
}
