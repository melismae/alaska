import React, { Component } from 'react';
import SecondaryPost from './secondary-post';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <SecondaryPost customClass="top" />
                <SecondaryPost customClass="bottom" />
            </div>
        );
    }
}
