import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
        props.setOpenModal(prevstate => !prevstate);
    };

    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    );
};

export { CreateTodoButton };