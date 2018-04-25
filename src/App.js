import React, {Component} from 'react';
import Recipes from './Components/Recipes';
import Posts from './Components/Posts';
import AddRecipe from './Components/AddRecipe';
import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            posts: []
        }
    }

    getRecipes() {
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

    getPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            this.setState({posts: response.data})
        })
    }

    // Life cycle method
    componentWillMount() {
        this.getRecipes();
        this.getPosts()
    }

    componentDidMount() {
        this.getRecipes();
        this.getPosts();
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
                <hr/>
                <Posts posts={this.state.posts} />
            </div>
        );
    }
}

export default App;
