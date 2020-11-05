import * as actionTypes from '../actions/actionTypes'

const initialState = {
    slots: [
        { id: 1, time: "9 A.M. - 10 A.M.", booked: false, firstName: '', lastName: '', phoneNumber: '' },
        { id: 2, time: "10 A.M. - 11 A.M.", booked: false, firstName: '', lastName: '', phoneNumber: '' },
        { id: 3, time: "11 A.M. - 12 P.M.", booked: false, firstName: '', lastName: '', phoneNumber: '' },
        { id: 4, time: "12 P.M. - 1 P.M.", booked: false, firstName: '', lastName: '', phoneNumber: '' },
        { id: 5, time: "1 P.M. - 2 P.M.", booked: false, firstName: '', lastName: '', phoneNumber: '' },
        { id: 6, time: "2 P.M. - 3 P.M.", booked: false, firstName: '', lastName: '', phoneNumber: '' },
        { id: 7, time: "3 P.M. - 4 P.M.", booked: false, firstName: '', lastName: '', phoneNumber: '' },
        { id: 8, time: "4 P.M. - 5 P.M.", booked: false, firstName: '', lastName: '', phoneNumber: '' }
    ],
    currentSlotId: null
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SAVE_SLOT_DETAILS):
            const slots = [...state.slots]
            for (let i = 0; i < slots.length; i++) {
                if (slots[i].id === action.id) {
                    slots[i].firstName = action.firstName
                    slots[i].lastName = action.lastName
                    slots[i].phoneNumber = action.phoneNumber
                    slots[i].booked = true
                }
            }
            return {
                ...state,
                slots: slots
            }
        case (actionTypes.STORING_SLOT_ID):
            return {
                ...state,
                currentSlotId: action.id
            }
        default:
            return state
    }

}

export default reducer 