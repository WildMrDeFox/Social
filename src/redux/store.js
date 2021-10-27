import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 12},
                {id: 2, message: 'It my first post', like: 11},
            ],
            newPostText: 'first-text',

        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber () {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}





export default store;