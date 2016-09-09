import React, { Component } from 'react';
import TweetText from './tweet-text';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Tweet extends Component {
    render() {
        let { tweet, customClass } = this.props;
        let name, handle, text;
        if (tweet) {
            name = tweet.user.full_name;
            handle = `@${tweet.user.screen_name}`;
            text = tweet.text;
        }
        customClass = 'sidebar-post ' + customClass;
        return (
            <div className={customClass}>
                <div className="corner">
                    <span className="icon-twitter"></span>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="tweet-ani"
                    transitionEnterTimeout={300}
                    transitionAppearTimeout={500}
                    transitionLeaveTimeout={100}>
                    <div className="tweet-name" key={name}>
                        <TweetText text={text} />
                        <h4>{name}</h4>
                        <p>{handle}</p>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
