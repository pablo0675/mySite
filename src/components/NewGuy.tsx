import React, { useState } from 'react';
import '../pages/NewGuy.css';

const NewGuy: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert("nice one you fucker")
        console.log(username, password)
    };

    return (
        <div className="newGuy">
            <h2>Join us you fucking bitch</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nom d'utilisateur:</label>
                    <input className="input-container"
                           type="text"
                           id="username"
                           value={username}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe:</label>
                    <input className="input-container"
                           type="password"
                           id="password"
                           value={password}
                    />
                </div>
                <button type="submit">I wanna join</button>
            </form>
        </div>
    );
};

export default NewGuy;
