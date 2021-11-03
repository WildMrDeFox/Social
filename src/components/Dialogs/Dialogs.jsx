import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

function Dialogs(props) {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();
    
    function addMessage() {
        props.addMessage();
    }

    function onMessageChange() {
        let text = newMessageElement.current.value;
        props.onMessageText(text);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} />
                <button onClick={addMessage}>Add Message</button>
            </div>

        </div>
    )
}

export default Dialogs;