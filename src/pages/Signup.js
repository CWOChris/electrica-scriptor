import React from 'react';
import AuthForm from '../components/AuthForm';

const Signup = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            {/* May need to remove ={true} below */}
            <AuthForm isSignUp={true} />  
        </div>
    );
};

export default Signup;