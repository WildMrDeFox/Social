const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Nice, and you?'},
            {id: 4, message: 'I am fine'},
            {id: 5, message: 'Good'},
        ],
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Misha'}
        ],
    };

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;