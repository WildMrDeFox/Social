const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://r3.mt.ru/r2/photoDBD0/20279248353-0/jpeg/bp.jpeg', followed: true, fullName: 'Nikita', status: 'I am a god', location: {city: 'Novosibirsk', country: 'Russian'}},
        {id: 2, photoUrl: 'https://semantic-ui.com/images/avatar2/large/matthew.png', followed: false, fullName: 'Sasa', status: 'Local description', location: {city: 'Moscow', country: 'Russian'}},
        {id: 3, photoUrl: 'https://pbs.twimg.com/profile_images/1057002966840827904/466s7Vf4.jpg', followed: true, fullName: 'Andrey', status: 'Use DDD', location: {city: 'Kiev', country: 'Ukraine'}},
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