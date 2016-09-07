import React, { Component } from 'react';
import SecondaryPost from './secondary-post';

export default class Sidebar extends Component {
    render() {
        let { topTweet, bottomTweet } = this.props;
        return (
            <div className="sidebar">
                <SecondaryPost customClass="top" tweet={topTweet}  />
                <SecondaryPost customClass="bottom" tweet={bottomTweet}  />
            </div>
        );
    }
}
