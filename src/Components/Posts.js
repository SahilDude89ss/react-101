import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostItem from "./PostItem";

class Posts extends Component {

    handleDeleteRecipe(postId) {
        this.props.onDelete(postId);
    }

    render() {
        let postItems;

        if (this.props.posts) {
            postItems = this.props.posts.map(post => {
                return (
                    <PostItem
                        onDeleteRecipe={this.handleDeleteRecipe.bind(this, post.id)}
                        key={post.title} post={post}
                    />
                )
            });
        }

        return (
            <div className="Posts">
                <h4>My Posts</h4>
                <ul>
                    {postItems}
                </ul>
            </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array
};

export default Posts;
