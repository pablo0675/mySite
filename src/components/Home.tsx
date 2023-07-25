import React, { useEffect, useRef } from 'react';
import music from '../assets/music.mp3';
import '../pages/Home.css';

const Home: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return; // Return early if audio is null

        const storedTime = localStorage.getItem('musicTime');

        // Check if there's a stored time for the audio
        if (storedTime) {
            const parsedTime = parseFloat(storedTime);
            if (!isNaN(parsedTime)) {
                audio.currentTime = parsedTime;
            }
        }

        // Save the current time of the audio to localStorage when component unmounts
        return () => {
            localStorage.setItem('musicTime', audio.currentTime.toString());
        };
    }, []);
    return (
        <div className="home-background">
            <p className="home-text">I will destroy your ass</p>
            <audio ref={audioRef} autoPlay loop>
                <source src={music} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Home;
