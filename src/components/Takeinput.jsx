import React from "react";

function Takeinput(props){

    const [expand, setExpand] = React.useState(false);
    const [input, setInput] = React.useState({
        title : "",
        content : ""
    });

    function getInput(event){

        const name = event.target.name;
        const value = event.target.value;

        setInput(prevValue => {
            /*if(name === "title"){
                return {
                    title : value,
                    ontent : prevValue.content
                }
                
            }else if(name === "content"){
                return {
                    title : prevValue.title,
                    content : value
                    
                }
            }*/
                return {
                    ...prevValue,
                    [name] : value
                }
            
        });
    };

    function submitNote(event){
        props.addNote(input);
        setInput({
            title : "",
            content : ""
        });
        setExpand(!expand);
        event.preventDefault();
        

    };

    function changeExpand(){
        setExpand(prevValue =>{
            return !prevValue;
        })
    }

    return <div>
    <form>
        <input type = "text" value = {input.title} name = "title" placeholder = "Title" onChange = {getInput} onClick = {changeExpand}/>
        {(expand) && <textarea value = {input.content} name = "content" placeholder = "Add a note..." rows = "3" onChange = {getInput}/>}
        {(expand) && <button onClick = {submitNote}>+</button>}
    </form>
    </div>
}

export default Takeinput;