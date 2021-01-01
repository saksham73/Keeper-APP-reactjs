import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Takeinput from "./Takeinput";

function App(){

    const [notes, setNotes] = React.useState([]);

    function addNote(note){
        setNotes(prevValue => {
            return [...prevValue, note];
        });
    }

    function deleteNote(id){
        setNotes(prevValue =>{
            return prevValue.filter((notes, index) => {
                return index !== id;
            });
        });
    };
    return (
        <div>
            <Header />
            <Takeinput addNote = {addNote}/>
            {notes.map((notes,index) => {return <Note  key = {index} id = {index} title = {notes.title} content = {notes.content} deleteNote = {deleteNote}/>})}
            <Footer />
        </div>
    );
}

export default App;