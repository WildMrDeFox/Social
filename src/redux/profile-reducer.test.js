import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 12},
        {id: 2, message: 'It my first post', like: 11},
    ]
};

test ('length of posts should be incremented', () => {
    // 1. Исходные данные теста
    let action = addPostActionCreator("The test text")

    // 2. action
    let newState = profileReducer(state, action)

    // 3. Ожидаемый результат
    expect(newState.posts.length).toBe(3)
});

test ("after deleting length of messages should be decrement", () => {
    // 1. Исходные данные теста
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. Ожидаемый результат
    expect(newState.posts.length).toBe(1)
});