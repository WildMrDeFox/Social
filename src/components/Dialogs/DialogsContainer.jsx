import {addMessageActionCreator} from "../../redux/dialogs-reducer";
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
        addMessage: (newMessageBody) => {dispatch(addMessageActionCreator(newMessageBody));},
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)