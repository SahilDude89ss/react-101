import React, {Component} from 'react';
import uuid from "uuid";
import SuccessButton from './Buttons/SuccessButton'
import PropTypes from "prop-types";

/**
 *
 */
class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRecipe: {}
        };
    }

    /**
     *
     * @param e
     */
    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Title is required')
        } else {
            this.setState({
                newRecipe: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value,
                }
            }, () => {
                this.props.addRecipe(this.state.newRecipe)
            })
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div className="AddRecipe">
                <h3>Add Recipe</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="">Title</label> <br/>
                        <input type="text" ref={`title`}/>
                    </div>
                    <div>
                        <label htmlFor="">Category</label> <br/>
                        <select ref={`category`}>
                            {categoryOptions}
                        </select>
                    </div>
                    <br/>
                    <SuccessButton label={`Submit Recipe`} />
                </form>
            </div>
        );
    }
}


AddRecipe.propTypes = {
    categories: PropTypes.array,
    addRecipe: PropTypes.func
};

AddRecipe.defaultProps = {
    categories: ['Indian', 'Italian', 'Korean']
}

export default AddRecipe;
