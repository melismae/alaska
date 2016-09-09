import React from 'react';
import AlaskaLogo from '../assets/alair-logo.png';

export const Branding = () => {
    return (
        <div className="branding">
            <div className="ifly">
                <h1>#iFlyAlaska</h1>
                <h2>because&#8230;</h2>
            </div>
            <h2 className="share">
                Share your journey.
            </h2>
            <img src={AlaskaLogo} />
        </div>
    );
}
