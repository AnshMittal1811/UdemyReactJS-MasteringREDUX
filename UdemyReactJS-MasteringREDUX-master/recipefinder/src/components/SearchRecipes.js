import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
    }
    search() {
        let { ingredients, dish } =this.state;
        //let ingredient = this.state.ingredients;
        //let dish = this.state.dish;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`; //http://www.recipepuppy.com/api/?i=garlic,chicken&q=adobo for some info and queries as written over here !!!
        //`http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`. Here we can remove the 'this.state' to make the link much concise and better to look at.
        //No longer need to console.log('state', this.state,'url',url); for our state because we will be using the fetch function tand this helper function wont be able to heklp us anymore.

        fetch(url, {
              method: 'GET'
        }).then(response => response.json())
          .then(json => {
              this.props.setRecipes(json.results)
          });
    }
    render() {
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {'  '}
                    <FormControl 
                        type="text" 
                        placeholder="garlic,chicken"
                        onChange = {event => this.setState({ingredients: event.target.value })} 
                    />
                </FormGroup>
                {'   '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {'  '}
                    <FormControl 
                        type="text" 
                        placeholder="adobo" 
                        onChange={event => this.setState({dish: event.target.value})}
                    />
                </FormGroup>   
                {'   '}
                <Button onClick ={()=>this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, { setRecipes})(SearchRecipes);