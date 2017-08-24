
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit'
import Loader from './Loader'
import firebase from 'firebase'

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN') 
    .build()

const styles = StyleSheet.create({
    form: {
        paddingBottom:10,
        width:200
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width:200
    },
    loginButtonArea: {
        marginTop:20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorMessage: {
        marginTop: 15,
        color: 'red',
        fontSize: 15,
        alignSelf:'center'
    }

})

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error:'',
        loading:false,
    }

    onButtonPreess() {
        const {email,password} = this.state
        this.setState({error:'',loding:true})

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onAuthSuccess.bind(this))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error code: " + errorCode);
                console.log("error message: " + errorMessage); 

                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onAuthSuccess.bind(this))
                    .catch(this.onAuthFailed.bind(this))
            })
    }
    
    onAuthSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false,
        })
    }
    onAuthFailed() {
        this.setState({
            error:'Authentication failed',
            loading:false,
        })
    }

    renderLoader() {
        if (this.state.loading) {
            return <Loader size='large' />
        } else {
            return <LoginButton onPress={this.onButtonPreess.bind(this)} />
        }
    }

    render() {
        const { form, fieldStyles, loginButtonArea, errorMessage, container, welcome } = styles
        return (
            <View style={form}>
                <Text>
                   Login or create an account
                </Text>
            
                <MKTextField
                    text={this.state.email}
                    onTextChange={email => this.setState({ email })}  
                    textInputStyle={fieldStyles}
                    placeholder={'Email...'}
                    tintColor={MKColor.Teal}
                />
                <MKTextField
                    text={this.state.password}
                    onTextChange={password => this.setState({ password })}
                    textInputStyle={fieldStyles}
                    placeholder={'PassWord...'}
                    tintColor={MKColor.Teal}
                    password={true}
                />
                <Text style={errorMessage}>
                    {this.state.error}
                </Text>
                <View style={loginButtonArea}>
                    {this.renderLoader()}
                </View>
            </View>    
        );
    }
}

