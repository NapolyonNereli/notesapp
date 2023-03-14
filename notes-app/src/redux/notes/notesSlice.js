import { createSlice } from "@reduxjs/toolkit";


export const notesSlice = createSlice({
    name:"notes",
    initialState: {
        items: [
            {
                id:"1",
                title:"Birinci not",
                color: "blue",
            },
            {
                id:"2",
                title: "İkinci not",
                color:"green",
            }
        ],
    },
    reducers:{}
})

export default notesSlice.reducer;