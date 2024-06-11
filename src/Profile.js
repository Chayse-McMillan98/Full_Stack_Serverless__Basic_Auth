import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Container from './Container';

function Profile() {
    useEffect(() => {
        checkUser();
    }, []);

    const [user, setUser] = useState({});
    async function checkUser() {
        try {
            const data = await Auth.currentUserPoolUser();
            const userInfo = { userName: data.username, ...data.attributes };
            setUser(userInfo);
        } catch(err) {
            console.log('Error: '+err);
        }
    }

    return (
        <Container>
            <h1>Profile</h1>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Phone: {user.phone_number}</h2>
            <AmplifySignOut/>
        </Container>
    );
}