import {addMessageActionCreator, addUpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {

    let state = props.store.getState();

    function addMessage() {
        props.store.dispatch(addMessageActionCreator());
    }

    function onMessageChange(text) {
        props.store.dispatch(addUpdateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs addMessage={addMessage}
                 onMessageText={onMessageChange}
                 newMessageText={state.dialogsPage.newMessageText}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}/>
    )
}

export default DialogsContainer;