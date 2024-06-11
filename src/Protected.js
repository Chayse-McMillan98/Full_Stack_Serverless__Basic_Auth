import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from 'aws-amplify/auth';
import Container from './Container';

function Protected(props) {
    const navigate = useNavigate();

    // If you're not authenticated, redirect to the profile to sign up / sign in
    useEffect(() => {
        async function fetchCurrentUser() {
            await getCurrentUser()
                .catch((err) => {
                    navigate('/profile');
            });
        }
        fetchCurrentUser();
    }, []);

    return (
        <Container>
            <h1>
                Protected Route
            </h1>
        </Container>
    );
}

export default Protected;