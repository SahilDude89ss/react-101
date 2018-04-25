import React, {Component} from 'react';
import RecipeItem from "./RecipeItem";

class Recipes extends Component {
    render() {
        let recipeItems;

        if (this.props.recipes) {
            recipeItems = this.props.recipes.map(recipe => {
                return (
                    <RecipeItem key={recipe.title} recipe={recipe}/>
                )
            });
        }

        return (
            <div className="Recipes">
                My Recipes
                <ul>
                    {recipeItems}
                </ul>
            </div>
        );
    }
}

export default Recipes;
