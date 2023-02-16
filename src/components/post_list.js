import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadPosts } from '../actions/post_action';

class PostList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentDidMount() {
        this.props.dispatch(loadPosts);
        console.log(this.props);
    }

    render() {
        const { list } = this.props.post;
        const posts = list.map(post=>{
            return (<li key={post.id}>{post.title}</li>)
        })
        return (
            <div>
                <ul>{posts}</ul>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return{
        post: state.post
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         askPost: () => {
//             dispatch({ type:"LOAD_POSTS"});
//         }
//     }
// }
export default connect(mapStateToProps)(PostList);