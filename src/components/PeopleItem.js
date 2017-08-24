
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {getTheme} from 'react-native-material-kit'
import Icon from 'react-native-vector-icons/EvilIcons'
import * as actions from '../actions/actions'

const theme = getTheme()


const styles = StyleSheet.create({
    card: {
       marginTop:20
    },
    title: {
        top: 20,
        left: 80,
       fontSize:24
    },
    image: {
        height:100
    },
    action: {
        backgroundColor: 'black',
        color:'white'
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor:'rgba(255,255,255,0)'
    }
});

const PeopleItem = (props) => {
    return (
        <TouchableHighlight onPress={()=> props.selectPerson(props.people)}>
            <View style={[theme.cardStyle, styles.card]}>
                <Image
                    source={{ uri: '/Users/qj/Documents/CS/lynda/Ex_Files_CRM_App_ReactNative/Exercise_Files/MyCode/CRM/src/images/background.jpg' }}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon
                    name={'user'}
                    size={100}
                    style={styles.icon}

                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.first_name}+{props.people.last_name}</Text>
                <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
            </View>
        </TouchableHighlight>   

       
    )
}

export default connect(null,actions)(PeopleItem)