import { PropsWithChildren, ReactElement } from 'react'
import { OidcConfiguration, OidcProvider } from '@axa-fr/react-oidc'

export function AuthenticationLayout(props: PropsWithChildren): ReactElement {
  const oidcConfig: OidcConfiguration = {
    client_id: 'backoffice',
    redirect_uri: window.location.origin + '/authentication/callback',
    silent_redirect_uri: window.location.origin + '/authentication/silent_callback',
    scope: 'openid profile',
    authority: 'http://localhost:8080/realms/webapp',
    service_worker_only: false,
    demonstrating_proof_of_possession: false
  }

  return (
    <OidcProvider configuration={oidcConfig}>
      {props.children}
    </OidcProvider>
  )
}
