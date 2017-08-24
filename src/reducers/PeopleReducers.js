

const initState = {
    people:[],
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
                people: action.payload,
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
        case 'DELET_CONTACT':
            return {
                ...state,
                detailView: false,
                personSelected:false
            }    
        default:
            return state    
    }
}