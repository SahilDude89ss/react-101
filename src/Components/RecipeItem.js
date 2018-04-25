import React, {Component} from 'react';

class RecipeItem extends Component {
    render() {
        return (
            <li className="Recipe">
                <strong>{this.props.recipe.title}</strong> <br/>
                <i>{this.props.recipe.category}</i>
            </li>
        );
    }
}

export default RecipeItem;
