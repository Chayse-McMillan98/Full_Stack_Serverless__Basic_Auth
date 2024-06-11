import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Container from './Container';

function Profile() {
    return (
        <Container>
            <Authenticator
                loginMechanisms={["email"]}
                socialProviders={["google", "facebook", "amazon", "apple"]}
            >
                {({ signOut, user }) => (
                    <main>
                    <h1>Hello {user?.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>

        </Container>
    );
}

export default withAuthenticator(Profile);