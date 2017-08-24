import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux'
import CompanyItem from './CompanyItem'
import Icon from 'react-native-vector-icons/MaterialIcons'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight:10,
        backgroundColor: '#e5e5e5'
    }
})

class CompanyList extends Component {
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
            <View style={styles.container}>
                <FlatList
                    data={this.props.peoples}
                    keyExtractor={(item) =>
                        item.id
                    }
                    renderItem={({ item }) =>
                        <CompanyItem people={item} />
                    }
                    getItemLayout={(data, index) => ({
                        length: 150,
                        offset: 150 * index,
                        index
                    })}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {

    return {
        peoples: state.people
    }
} 

export default connect(mapStateToProps)(CompanyList)
