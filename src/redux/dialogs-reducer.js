const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

function dialogsReducer(state, action) {

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