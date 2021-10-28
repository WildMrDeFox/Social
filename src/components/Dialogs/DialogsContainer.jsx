import {addMessageActionCreator, addUpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*function DialogsContainer(props) {

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
}*/


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageText: (text) => {dispatch(addUpdateNewMessageTextActionCreator(text));},
        addMessage: () => {dispatch(addMessageActionCreator());},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;