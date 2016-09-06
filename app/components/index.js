import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialFetch } from '../actions/index.js';
import Container from './container';

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        ui: state.ui
    };
};

class App extends Component {
    componentWillMount() {
        // this.props.dispatch(initialFetch());
    }

    render() {
        let { posts, ui, dispatch } = this.props;
        return (
            <div className="container">
                <Container posts={posts} dispatch={dispatch} ui={ui}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
