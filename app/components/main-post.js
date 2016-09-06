import React, { Component } from 'react';
import PostImage from '../assets/post-image.jpg';
import PostAvatar from '../assets/insta-handle-sample.jpg';

export default class MainPost extends Component {
    render() {
        return (
            <div className="main-post">
                <img src={PostImage} />
                <div className="insta-handle">
                    <img src={PostAvatar} />
                    <div>
                        <h2>Melissa Smith</h2>
                        <h3>@melismae</h3>
                    </div>
                    <span className="icon-twitter"></span>
                </div>
            </div>
        );
    }
}
