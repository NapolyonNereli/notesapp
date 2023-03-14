import { TextField } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"



function NotesField() {
    return (
        <Container style={{
            width:"50%",
            
            marginTop: "30px"
        }}>
           <TextField
                fullWidth
                id="filled-multiline-flexible"
                label= "Note"
                multiline
                maxRows={4}
                variant="filled"
            />
        </Container>
    )
}

export default NotesField