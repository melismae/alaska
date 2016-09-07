import React, { Component } from 'react';

export default class MainPost extends Component {
    avatarStatus(status) {
        this.props.avatarImageStatus(status);
    }

    render() {
        let post = this.props.postShown ? this.props.postShown : "";
        let name, handle, iconClass, avatar, image;
        if (post) {
            name = post.user.full_name;
            handle = `@${post.user.screen_name}`;
            iconClass = `icon-${post.source_type}`;
            avatar = post.user.icon;
            image = post.images[0].url;
        }
        let status = this.props.avatarStatus;
        return (
            <div className="main-post">
                <img src={image} />
                <div className="insta-handle">
                    { avatar !== null && status !== 'error' ? <img src={avatar} onError={this.avatarStatus.bind(this, 'error')} onLoad={this.avatarStatus.bind(this, 'loaded')}/> : "" }
                    <div className="name">
                        <h2>{name}</h2>
                        <h3>{handle}</h3>
                    </div>
                    <div className="icon"><span className={iconClass}></span></div>
                </div>
            </div>
        );
    }
}
