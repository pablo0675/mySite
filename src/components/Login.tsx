import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importez Navigate depuis 'react-router-dom'
import '../pages/Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToSignup, setRedirectToSignup] = useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (username === 'user' && password === 'password') {
            alert('Connexion réussie !');
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
        }
    };

    const handleSignup = (event: React.FormEvent) => {
        event.preventDefault();
        setRedirectToSignup(true); // Déclencher la redirection vers /inscription
    };

    return (
        <div className="login">
            {redirectToSignup && <Navigate to="/inscription" />}
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Se connecter</button>
            </form>
            <h2>Créer un compte</h2>
            <form onSubmit={handleSignup}>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Login;

