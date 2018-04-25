import React, {Component} from 'react';
import RecipeItem from "./RecipeItem";

class Recipes extends Component {

    handleDeleteRecipe(recipeId) {
        this.props.onDelete(recipeId);
    }

    render() {
        let recipeItems;

        if (this.props.recipes) {
            recipeItems = this.props.recipes.map(recipe => {
                return (
                    <RecipeItem
                            onDeleteRecipe={this.handleDeleteRecipe.bind(this, recipe.id)}
                        key={recipe.title} recipe={recipe}
                    />
                )
            });
        }

        return (
            <div className="Recipes">
                <h4>My Recipes</h4>
                <ul>
                    {recipeItems}
                </ul>
            </div>
        );
    }
}

export default Recipes;
