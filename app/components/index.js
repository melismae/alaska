import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialFetch } from '../actions/index.js';
import Card from './card';

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

class App extends Component {
    componentWillMount() {
        this.props.dispatch(initialFetch());
    }

    render() {
        let { posts, dispatch } = this.props;
        console.log("posts", posts);
        return (
            <div>
                <Card posts={posts} dispatch={dispatch} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
