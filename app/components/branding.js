import React from 'react';
import AlaskaLogo from '../assets/alair-logo.png';

export const Branding = () => {
    return (
        <div className="branding">
            <div className="ifly">
                <span className="hashtag">#iFlyAlaska</span><br />
                <span className="because">because&#8230;</span><br />
            </div>
            <div className="share">
                Share your journey.
            </div>
            <img src={AlaskaLogo} />
        </div>
    );
}
