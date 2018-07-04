import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
    render() {
        console.log('this.props', this.props);

        return (
            <div>
            {
                this.props.favoriteRecipes.length > 0 ?
                    <h4 className="Link"><Link to='/favorites'> Favorites </Link></h4>
                :
                    <div></div>
            }
                
                {
                    this.props.recipes.map((recipe, index) => {
                        return (
                            <RecipeItem 
                                key={index} 
                                recipe = {recipe}
                                favoriteButton= {true}
                            />
                            //<li inline>
                            //<h4>{recipe.title}</h4>
                            //</li>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;     // Already use FavoriteRecipes, So it automatically has Favorite Recipes. State is only an object representing a redux store. So returning it means it gets mapped onto our props
}

export default connect(mapStateToProps, null) (RecipeList);