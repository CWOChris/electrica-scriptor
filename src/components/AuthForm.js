import React, { useState } from'react';
import { auth, createUserProfile } from '../firebase';

const AuthForm = ({ isSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfile(user);
            } else {
                await auth.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
    );
};

export default AuthForm;