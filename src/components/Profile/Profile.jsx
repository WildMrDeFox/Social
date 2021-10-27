import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile