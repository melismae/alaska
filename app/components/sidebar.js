import React, { Component } from 'react';
import Tweet from './tweet';

export default class Sidebar extends Component {
    render() {
        let { topTweet, bottomTweet } = this.props;
        return (
            <div className="sidebar">
                <Tweet customClass="top" tweet={topTweet}  />
                <Tweet customClass="bottom" tweet={bottomTweet}  />
            </div>
        );
    }
}
