import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; 

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
//store.subscribe(() => console.log('store', store.getState())); has been used for checking for building the whole application

ReactDOM.render(
    <Provider store = {store}>
       <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {App} />
            <Route exact path='/favorites' component={FavoriteRecipeList}/> //exact already is true implicitly
        </Switch>
       </BrowserRouter>
    </Provider>, document.getElementById('root')
);
