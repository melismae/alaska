import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MainPost extends Component {

    avatar(status) {
        this.props.avatarImageStatus(status);
    }

    video(url) {
        return (
            <video width="540" height="540" autoPlay src={url} key={url}>
                <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        );
    }

    avatarImage(avatar, visibility) {
        return (
            <div className={visibility}>
                <img src={avatar} onError={this.avatar.bind(this, 'hidden')} onLoad={this.avatar.bind(this, 'shown')} />
            </div>
        );
    }
    
    render() {
        let post = this.props.postShown ? this.props.postShown : "";
        let name, handle, iconClass, avatar, image, sourceType, sourceUrl;
        if (post) {
            name = post.user.full_name;
            handle = `@${post.user.screen_name}`;
            sourceType = post.source_type;
            iconClass = `icon-${sourceType}`;
            avatar = post.user.icon;
            sourceUrl = sourceType === 'instagram' ? post.images[0].url : post.videos[0].url;
        }
        let visibility = this.props.avatarVisibility;
        return (
            <div className="main-post">
                <ReactCSSTransitionGroup
                    transitionName="main-ani"
                    transitionEnterTimeout={500}
                    transitionAppearTimeout={500}
                    transitionLeaveTimeout={200}>
                    <div key={sourceUrl}>
                        { sourceType === 'instagram' ? <img src={sourceUrl} key={sourceUrl} className="main-image"/> : this.video(sourceUrl) }
                        <div className="insta-handle">
                            { avatar !== null ? this.avatarImage(avatar, visibility) : "" }
                            <div className="name">
                                <h2>{name}</h2>
                                <h3>{handle}</h3>
                            </div>
                            <div className="icon"><span className={iconClass}></span></div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
