import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

    let postElements = props.posts.map(p => <Post message={p.message} like={p.like}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPost" placeholder="Enter your text" validate={[requiredField, maxLength10]}/>
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