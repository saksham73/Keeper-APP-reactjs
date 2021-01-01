import React from "react";

function note(props){

    function deleteNote(event){
        props.deleteNote(props.id);
    };

    return <div className = "note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick ={deleteNote} > Delete</button>
    </div>
}

export default note;