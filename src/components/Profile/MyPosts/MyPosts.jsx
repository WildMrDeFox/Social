import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {

    let postElements = props.posts.map( p => <Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    function onAddPost() {
        props.addPost();
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )

}

export default MyPosts;