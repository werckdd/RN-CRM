
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import { connect } from 'react-redux';

import PeopleItem from './PeopleItem'
import Icon from 'react-native-vector-icons/EvilIcons'
import PeopleDetail from './PeopleDetail'
import {loadInitialContacts} from '../actions/actions'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft:20
    },
});

const mapStateToProps = state => {

    return {
        peoples: state.people,
        detailView: state.detailView,
    }
}    

class PeopleList extends Component {
    static navigationOptions = {
        tabBarLaberl: 'People',
        tabBarIcon: ({ tintColor }) => (
                <Icon
                    name={'user'}
                    size={43}
                    style={{ color: tintColor }}
                />
            )
    }
   
    componentWillMount() {
        this.props.loadInitialContacts()
    }


    renderInitView() {
        if (this.props.detailView === true) {
            return (
                <PeopleDetail />
            )
        } else {
            return (
                <FlatList
                    data={this.props.peoples}
                    keyExtractor={(item) =>
                        item.id
                    }
                    renderItem={({ item }) =>
                        <PeopleItem people={item} />
                    }
                    getItemLayout={(data, index) => ({
                        length: 150,
                        offset: 150 * index,
                        index
                    })}
                />
            )
            
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderInitView()}
            </View>
        );
    }
}

export default connect(mapStateToProps, { loadInitialContacts})(PeopleList)

