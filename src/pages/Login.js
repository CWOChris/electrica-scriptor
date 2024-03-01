import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
    return (
        <div>
            <h2>Log In</h2>
            {/* may need to remove isSignUp={false} below */}
            <AuthForm isSignUp={false} />
        </div>
    );
};
