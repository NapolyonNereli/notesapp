import { Container, TextField } from '@mui/material';

function Header () {
    return (
        <>
            <h1>NoteAPP</h1>
            <Container>
                <form onSubmit={console.log("submit")}>
                    <TextField label="Search" variant="outlined" />
                </form>
            </Container>
        </>
    )
}


export default Header;