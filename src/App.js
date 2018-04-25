import React, {Component} from 'react';
import Recipes from './Components/Recipes';
import AddRecipe from './Components/AddRecipe';
import uuid from 'uuid';
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
                    id: uuid.v4(),
                    title: 'Tandoori Chicken',
                    category: 'Indian'
                },
                {
                    id: uuid.v4(),
                    title: 'Chicken Pasta',
                    category: 'Italian'
                },
                {
                    id: uuid.v4(),
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

    handleDeleteRecipe(id) {
        let recipes = this.state.recipes.filter((recipes) => {
            return recipes.id !== id
        });

        this.setState({recipes});
    }

    render() {
        return (
            <div className="App">
                <h1>My App</h1>
                <AddRecipe addRecipe={this.handleAddNewRecipe.bind(this)}/>
                <Recipes recipes={this.state.recipes} onDelete={this.handleDeleteRecipe.bind(this)}/>
            </div>
        );
    }
}

export default App;
