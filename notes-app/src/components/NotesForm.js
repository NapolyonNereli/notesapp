import { TextField } from "@mui/material";
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {addNotes} from "../redux/notes/notesSlice"


function NotesForm () {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        if(!title) return;
        e.preventDefault();
        setTitle("");
        dispatch(addNotes({id:"3", title, color:"black"}))
    }

    return (
        <form onSubmit={handleSubmit()}>
            <TextField 
                value={title} 
                label="Search" 
                variant="outlined" 
            />
        </form>
    )
}

export default NotesForm