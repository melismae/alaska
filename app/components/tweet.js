import React, { Component } from 'react';
import reactStringReplace from 'react-string-replace';
import striptags from 'striptags';

export default class Tweet extends Component {

    // tweet() takes raw tweet, strips html, wraps @alaskaair & #iflyalaska in spans

    tweet(tweetContent) {
        let replacedText;

        //strip out any html from incoming tweet
        replacedText = striptags(tweetContent);

        // Match @-mentions
        replacedText = reactStringReplace(replacedText, /@(alaskaair)/gi, (match, i) => (
            <span key={match + i}>@{match}</span>
        ));

        // Match hashtags
        replacedText = reactStringReplace(replacedText, /#(iflyalaska)/gi, (match, i) => (
            <span key={match + i}>#{match}</span>
        ));

        return (
            <div>
                {replacedText}
            </div>
        );
    }

    render() {
        let { tweet } = this.props;

        return (
            <div className="tweet">
                {this.tweet(tweet)}
            </div>
        );
    }
}
