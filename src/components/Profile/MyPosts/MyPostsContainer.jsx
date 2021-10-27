import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
    let state = props.store.getState();

    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }

    function onPostChange(text) {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts updateNewPostText={onPostChange} //callback
                 addPost={addPost} //callback
                 posts={state.profilePage.posts} // данные
                 newPostText={state.profilePage.newPostText} // данные
        />
    )

}

export default MyPostsContainer;