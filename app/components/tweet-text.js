import React, { Component } from 'react';
import reactStringReplace from 'react-string-replace';
import striptags from 'striptags';

export default class TweetText extends Component {

    // tweet() takes raw tweet, strips html, wraps @alaskaair & #iflyalaska in spans

    text(tweetContent) {
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
        let { text } = this.props;

        return (
            <div className="tweet">
                {this.text(text)}
            </div>
        );
    }
}
