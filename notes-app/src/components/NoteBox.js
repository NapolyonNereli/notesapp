import {Grid, Container } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"

function NoteBox(){
    const items = useSelector((state) => state.notes.items)
    return (
        <Container>
            <Grid container >
                {items.map((item) => (
                    <Grid style={{
                        background: `${item.color}`,
                        border: "solid 2px black",
                        margin: "30px"
                    }} item xs={3}>
                        item.title
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


export default NoteBox