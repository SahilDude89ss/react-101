import React, {Component} from 'react';

/***
 *
 */
class RecipeItem extends Component {

    handleDeleteRecipe(recipeId) {
        this.props.onDeleteRecipe(recipeId)
    }

    render() {
        return (
            <li className="Recipe">
                <strong>{this.props.recipe.title}</strong> <br/>
                <i>{this.props.recipe.category}</i>

                <a href="#" onClick={this.handleDeleteRecipe.bind(this, this.props.recipe.id)}>X</a>
            </li>
        );
    }
}

export default RecipeItem;
