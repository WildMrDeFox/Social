const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Nikita', status: 'I am a god', location: {city: 'Novosibirsk', country: 'Russian'}},
        {id: 2, followed: false, fullName: 'Sasa', status: 'Local description', location: {city: 'Moscow', country: 'Russian'}},
        {id: 3, followed: true, fullName: 'Andrey', status: 'Use DDD', location: {city: 'Kiev', country: 'Ukraine'}},
    ]
}

function usersReducer(state = initialState, action) {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users ],
            }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;