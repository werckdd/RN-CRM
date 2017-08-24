import React,{ Component} from 'react'
import { Text, View, StyleSheet, ScrollView,Image} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import {MKTextField,MKColor,MKButton} from 'react-native-material-kit'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'


const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent:'space-between'
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
    },
    addButton: {
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom:10
    },
    add: {
        marginTop:30
    }
})

const AddButton = MKButton.coloredButton()
    .withText('ADD')
    .build()

class AddPerson extends Component{
    static navigationOptions = {
        tabBarLaberl: 'Add Person',
        tabBarIcon: ({ tintColor }) => (
            <Image 
                style={styles.addButton}
                source={require('../images/add_button.png')}
            />
        )
    }

    onAddPress() {
        const { first_name, last_name, phone, email, company, project, notes } = this.props
        const id = this.props.len + 1
        this.props.createNewContact({id,first_name,last_name,phone,email,company,project,notes})

        this.props.navigation.navigate('PeopleList')
    }

    render() {      
        return (
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text style={styles.title}>Add a new contact</Text>
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'First name...'}
                        tintColor={MKColor.Teal}
                        value={this.props.first_name}
                        onChangeText={value => this.props.formUpdate({prop:'first_name',value})}
                    />
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Last name...'}
                        tintColor={MKColor.Teal}
                        value={this.props.last_name}
                        onChangeText={value => this.props.formUpdate({ prop: 'last_name', value })}
                    />
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Email...'}
                        tintColor={MKColor.Teal}
                        value={this.props.email}
                        onChangeText={value => this.props.formUpdate({ prop: 'email', value })}
                    />
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Company...'}
                        tintColor={MKColor.Teal}
                        value={this.props.company}
                        onChangeText={value => this.props.formUpdate({ prop: 'company', value })}
                    />
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Phone...'}
                        tintColor={MKColor.Teal}
                        value={this.props.phone}
                        onChangeText={value => this.props.formUpdate({ prop: 'phone', value })}
                    />
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Project...'}
                        tintColor={MKColor.Teal}
                        value={this.props.project}
                        onChangeText={value => this.props.formUpdate({ prop: 'project', value })}
                    />
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Notes...'}
                        tintColor={MKColor.Teal}
                        value={this.props.notes}
                        onChangeText={value => this.props.formUpdate({ prop: 'notes', value })}
                    />
                    <View style={styles.add}>
                        <AddButton onPress={this.onAddPress.bind(this)}/>
                    </View>
                </View>    
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    const { first_name, last_name, phone, email, company, project, notes, } = state
    const len = state.people.length
    console.log(len)
    return { first_name, last_name, phone, email, company, project, notes, len }
}

export default connect(mapStateToProps,actions)(AddPerson)