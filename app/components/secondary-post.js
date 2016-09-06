import React, { Component } from 'react';
import Tweet from './tweet';

export default class SecondaryPost extends Component {
    render() {
        // let { tweet, name, handle, customClass } = this.props;
        let name = "Melissa Smith";
        let handle = "@melismae";
        let tweet = 'Aloha: <a href=\"https://twitter.com/search?q=%23iflyalaska&src=hash\" target=\"_blank\" class=\"postano-in-post-link\">#iflyalaska</a> because of surprise pogmosas. Thanks to the awesome crew this am! <a href=\"https://twitter.com/@AlaskaAir\" target=\"_blank\" class=\"postano-in-post-link\">@AlaskaAir</a>';
        let customClass = 'secondary-post ' + this.props.customClass;
        return (
            <div className={customClass}>
                <div className="corner">
                    <span className="icon-twitter"></span>
                </div>
                <Tweet tweet={tweet} />
                <div className="name">
                    {name}
                </div>
                <div className="handle">
                    {handle}
                </div>
            </div>
        );
    }
}
