import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/placeholder-man-circle.png'

/*users: [
    {id: 1, photoUrl: 'https://r3.mt.ru/r2/photoDBD0/20279248353-0/jpeg/bp.jpeg', followed: true, fullName: 'Nikita', status: 'I am a god', location: {city: 'Novosibirsk', country: 'Russian'}},
    {id: 2, photoUrl: 'https://semantic-ui.com/images/avatar2/large/matthew.png', followed: false, fullName: 'Sasa', status: 'Local description', location: {city: 'Moscow', country: 'Russian'}},
    {id: 3, photoUrl: 'https://pbs.twimg.com/profile_images/1057002966840827904/466s7Vf4.jpg', followed: true, fullName: 'Andrey', status: 'Use DDD', location: {city: 'Kiev', country: 'Ukraine'}},
]*/

function Users(props) {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            props.setUsers(response.data.items)
        } )
    }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.photo} />
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => {props.unFollow(u.id)} }>Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;