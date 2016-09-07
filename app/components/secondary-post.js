import React, { Component } from 'react';
import Tweet from './tweet';

export default class SecondaryPost extends Component {
    render() {
        let { tweet, customClass } = this.props;
        let name, handle, text;
        if (tweet) {
            name = tweet.user.full_name;
            handle = `@${tweet.user.screen_name}`;
            text = tweet.text;
        }
        customClass = 'secondary-post ' + customClass;
        return (
            <div className={customClass}>
                <div className="corner">
                    <span className="icon-twitter"></span>
                </div>
                <div className="tweet-name">
                    <Tweet text={text} />
                    <div className="name">
                        {name}
                    </div>
                    <div className="handle">
                        {handle}
                    </div>
                </div>
            </div>
        );
    }
}
