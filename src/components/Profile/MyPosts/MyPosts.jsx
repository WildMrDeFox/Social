import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

function MyPosts(props) {

    let postElements = props.posts.map( p => <Post message={p.message} like={p.like} />)

    let addNewPost = (values) => {
        props.addPost(values.newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={ addNewPost }/>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPost" placeholder="Enter your text"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: "postAddPostForm"
})(AddPostForm)

export default MyPosts;