import React, {Component} from 'react';
import Recipes from './Components/Recipes';
import AddRecipe from './Components/AddRecipe';
import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    getRecipes() {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            this.setState({recipes: response.data})
        })
    }

    // Life cycle method
    componentWillMount() {
        this.getRecipes();

    }

    componentDidMount() {
        this.getRecipes();
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
