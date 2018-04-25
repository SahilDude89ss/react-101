import React, {Component} from 'react';
import PropTypes from "prop-types";

/***
 *
 */
class PostItem extends Component {
    render() {
        return (
            <li className="Post">
                <strong>{this.props.post.title}</strong> <br/>
                <i>{this.props.post.body}</i>
            </li>
        );
    }
}

PostItem.propTypes = {
    post: PropTypes.object,
    onDeletePost: PropTypes.func
};

export default PostItem;
