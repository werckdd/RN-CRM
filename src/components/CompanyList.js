import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 10,
        backgroundColor: '#e5e5e5'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10
    },
})

export default class AddPerson extends Component {
    static navigationOptions = {

        tabBarLaberl: 'Companies',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name={'business'}
                size={45}
                style={{ color: tintColor }}
            />
        )

    }

    render() {
        return(
            <View>
                <Text>Companies</Text>
            </View>
        )
    }
}