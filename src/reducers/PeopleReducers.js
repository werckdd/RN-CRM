import people from './people.json'

const initState = {
    people,
    detailView: false,
    personSelected: null,
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    notes: '',
    loadingPeople:false
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            return {
                ...state,
                people: people.concat(action.payload),
                detailView: false,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
            }
        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                personSelected:action.payload
            }
        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                personSelected: null
            }  
        case 'FORM_UPDATE':
            return {
                ...state,
                [action.payload.prop]:action.payload.value
            }  
        case 'ADD_PERSON':
            return {
                ...state,
                ...action.newPerson
            }  
        default:
            return state    
    }
}