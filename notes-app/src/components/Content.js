import { useSelector } from "react-redux"
import NoteBox from "./NoteBox";
import NotesField from "./NotesField";



function Content() {
    const items = useSelector((state) => state.notes.items);
    console.log(items);
    return (
        <div>
           <NotesField/>
           <br/>
           <br/>
           <br/>
           <br/>
           <NoteBox />
        </div>
    )
}

export default Content