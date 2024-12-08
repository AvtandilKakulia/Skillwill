import React, { Component } from "react"

const DoneItem = ({ id, description, actionClr, actionDone }) => {
    return (
        <li>
            <div className="task" id={id}>
                <p className="taskDesc" > {description} </p>
                <button className="btnDone" onClick={() => actionDone(id)}>Recover</button>
                <i className="fa-solid fa-trash-arrow-up basket" onClick={() => actionClr(id)}></i>
            </div>
        </li>
    )
}

export default DoneItem