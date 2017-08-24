
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { getTheme } from 'react-native-material-kit'
import Icon from 'react-native-vector-icons/MaterialIcons'

const theme = getTheme()


const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24
    },
    image: {
        height: 100
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
        paddingBottom: 5,
        paddingTop:5
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)'
    }
});

const CompanyItem = (props) => {
    return (
            <View style={[theme.cardStyle, styles.card]}>
                <Image
                    source={{ uri: '/Users/qj/Documents/CS/lynda/Ex_Files_CRM_App_ReactNative/Exercise_Files/MyCode/CRM/src/images/background.jpg' }}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon
                    name={'business'}
                    size={100}
                    style={styles.icon}

                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.company}</Text>
            {}
            <Text style={[theme.cardActionStyle, styles.action]}>{props.people.first_name}{props.people.last_name}-- Project:{props.people.project}</Text>
            </View>
    )
}

export default CompanyItem