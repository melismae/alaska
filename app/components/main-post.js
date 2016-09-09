import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MainPost extends Component {
    /*
        avatar()
        called in avatarImage() below to set avatar div visibility in the store.
        the dispatch function is called in the container component
    */
    avatar(status) {
        this.props.avatarImageStatus(status);
    }

    /*
        video()
        assembles the video element called in render()
    */
    video(url) {
        return (
            <video width="540" height="540" autoPlay src={url} key={url}>
                <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        );
    }
    /*
        avatarImage()
        takes avatarUrl and visibility to show or hide the div with the avatar
        it also called the avatar function above onLoad or onError to store the result in the store
    */
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
                                <h3>{name}</h3>
                                <h4>{handle}</h4>
                            </div>
                            <div className="icon"><span className={iconClass}></span></div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
