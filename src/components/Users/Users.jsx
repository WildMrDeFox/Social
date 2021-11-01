import s from "./Users.module.css";
import userPhoto from "../../assets/placeholder-man-circle.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                                     className={s.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    userAPI.unFollow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(u.id);
                                            }
                                    })

                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    userAPI.follow(u.id).then(data => {
                                        if(data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    })

                                }}>Follow</button>}
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

export default Users