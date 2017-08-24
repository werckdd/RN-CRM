import firebase from 'firebase'
import R from 'ramda'

export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        payload:peopleId
    }
}

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    }
}

export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload:{prop,value}
    }
}

export const createNewContact = ({id, first_name, last_name, phone, email, company, project, notes }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/people`)
            .push({id, first_name, last_name, phone, email, company, project, notes })
            .then(() => {
                const { currentUser } = firebase.auth()
                firebase.database().ref(`users/${currentUser.uid}/people`)
                    .once('value', snapshot => {
                        const data = R.values(snapshot.val())
                        dispatch({ type: 'INITIAL_FETCH', payload: data })
                    })
            })
    }
}


export const loadInitialContacts = () => {
    const { currentUser } = firebase.auth()


    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/people`)
            .once('value', snapshot => {
                const data = R.values(snapshot.val()) 
                return dispatch({ type: 'INITIAL_FETCH', payload: data})
            })
    }
}

