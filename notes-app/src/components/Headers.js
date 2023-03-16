import { Container } from '@mui/material';
import NotesForm from './NotesForm';

function Header () {
    return (
        <>
            <h1>NoteAPP</h1>
            <Container>
               <NotesForm />
            </Container>
        </>
    )
}


export default Header;