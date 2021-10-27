import s from './MyPosts.module.css'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Post from "./Post/Post";

function MyPosts(props) {

    let postElements = props.posts.map( p => <Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    function addPost() {
        props.dispatch(addPostActionCreator());
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )

}

export default MyPosts;