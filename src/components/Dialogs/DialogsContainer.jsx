import {addMessageActionCreator, addUpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)