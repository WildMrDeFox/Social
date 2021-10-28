const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 12},
            {id: 2, message: 'It my first post', like: 11},
        ],
        newPostText: 'first-text',
    };

function profileReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state;
    }
}

export function addPostActionCreator() {
    return {
        type: ADD_POST,
    }
}

export function updateNewPostTextActionCreator(text){
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;
