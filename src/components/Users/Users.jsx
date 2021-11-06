import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

function Users({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) {

    return (<div>

            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {
                props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                           unFollow={props.unFollow} follow={props.follow}/>)


            }
        </div>
    )
}

export default Users