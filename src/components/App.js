
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import reducers from '../reducers/PeopleReducers'
import firebase from 'firebase'
import Login from './Login'
import Loader from './Loader'
import Navigation from './Navigation'
import thunk from 'redux-thunk'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))

export default class App extends Component {
    state={loggedIn:null}

    componentWillMount() {
        firebase.initializeApp({
          
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn:true})
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderInitialView() {
        switch (this.state.loggedIn) {
            case true:
                return <Navigation />
            case false:
                return <Login />
            default:
                return <Loader size="large" />    
        }    
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {this.renderInitialView()}
                </View>
            </Provider>
            
        );
    }
}


