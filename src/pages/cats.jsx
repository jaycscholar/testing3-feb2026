import React from 'react';
import './cats.css';

export default function Cats() {
     return (
          
          <div className="cats-page">
    <header>
        <h1>🐾 Meet Mercy 🐾</h1>
    </header>

    <div className="container">

        <img src="Mercy1.jpg" alt="A photo of Mercy the cat" />
        
        <h2>About Mercy</h2>
        <p>Mercy is more than just a cat; she is a legend. Whether she's napping in a sunbeam or chasing a laser pointer, she brings joy to everyone around her.</p>

        <h2>Quick Facts</h2>
        <ul>
            <li><strong>Favorite Food:</strong> Tuna and Salmon 🐟</li>
            <li><strong>Motto:</strong> "If it fits, I sits."</li>
            <li><strong>Special Talent:</strong> Professional 3 AM zoomies.</li>
        </ul>

        <h2>Her Gallery</h2>
        <p>Imagine beautiful photos of Mercy here!</p>
    </div>

    <div className="footer">
        <p>Made with love for Mercy &copy; 2026</p>
    </div>


          </div>
          
     );
}

