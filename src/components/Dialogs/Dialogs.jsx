import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />

            <button>Add Message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;