const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Nice, and you?'},
            {id: 4, message: 'I am fine'},
            {id: 5, message: 'Good'},
        ],
        newMessageText: 'New message',
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Misha'}
        ],
    };

function dialogsReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export function addMessageActionCreator() {
    return {
        type: ADD_MESSAGE,
    }
}

export function addUpdateNewMessageTextActionCreator(text) {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
}

export default dialogsReducer;