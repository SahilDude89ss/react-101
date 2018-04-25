import React, {Component} from 'react';
import Recipes from './Components/Recipes';
import AddRecipe from './Components/AddRecipe';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    // Life cycle method
    componentWillMount() {
        this.setState({
            recipes: [
                {
                    title: 'Tandoori Chicken',
                    category: 'Indian'
                },
                {
                    title: 'Chicken Pasta',
                    category: 'Italian'
                },
                {
                    title: 'Ramen Noodles',
                    category: 'Korean'
                }
            ]
        })
    }

    handleAddNewRecipe(newRecipe) {
        let recipes = this.state.recipes;
        recipes.push(newRecipe);

        this.setState({recipes})
    }

    render() {
        return (
            <div className="App">
                <h1>My App</h1>
                <AddRecipe addRecipe={this.handleAddNewRecipe.bind(this)}/>
                <Recipes recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default App;
